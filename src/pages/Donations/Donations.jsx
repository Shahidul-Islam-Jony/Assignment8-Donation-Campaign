import { useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../components/LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import DonationCards from "../../components/DonationCards/DonationCards";

const Donation = () => {
    const contents = useLoaderData();

    const [donatedContents,setDonatedContents]= useState([]);
    useEffect(()=>{
        const donatedData = getDataFromLS();
        const cart = [];
        for(const data of donatedData){
            const content = contents.find(content=>content.category === data);
            if(content){
                cart.push(content);
            }
        }
        setDonatedContents(cart);
    },[contents])
   
// console.log(donatedContents);

    return (
        <div className="w-11/12 grid grid-cols-2 my-28 gap-6 mx-auto">
            {
                donatedContents?.map((content,idx)=><DonationCards key={idx} content={content}></DonationCards>)
            }
        </div>
    );
};

export default Donation;