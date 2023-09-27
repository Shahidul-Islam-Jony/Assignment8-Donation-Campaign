import { getDataFromLS } from "../../components/LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import DonationCards from "../../components/DonationCards/DonationCards";

const Donation = () => {
    const [contents, setContents] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    const [donatedContents, setDonatedContents] = useState([]);
    useEffect(() => {
        const donatedData = getDataFromLS();
        const cart = [];
        for (const data of donatedData) {
            const content = contents.find(content => content.title === data);
            if (content) {
                cart.push(content);
            }
        }
        setDonatedContents(cart);
    }, [contents])

    // console.log(donatedContents);

    return (
        <>
            <div className="w-11/12 grid md:grid-cols-1 lg:grid-cols-2 mt-28 mb-10 gap-6 mx-auto">
                {
                    donatedContents.length !== 0 ?isShowAll?donatedContents.map((content, idx) => <DonationCards key={idx} content={content}></DonationCards>): donatedContents.slice(0,4).map((content, idx) => <DonationCards key={idx} content={content}></DonationCards>) : <p className="text-3xl font-bold">You have not donate yet</p>

                }
            </div>
            {
                donatedContents.length > 4 && <div className={"flex justify-center mb-20"}><button onClick={()=>setIsShowAll(!isShowAll)} className={`${isShowAll&&"hidden"} bg-green-600 rounded-lg text-white w-28 h-12 font-semibold px-7`}>See All</button></div>
            }
        </>
    );
};

export default Donation;