import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { setDataInLS } from "../../components/LocalStorage/LocalStorage";

const DonationDetails = () => {
    const categoryDetails = useParams();
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch('../../../public/donation.json')
        .then(res=>res.json())
        .then(contents=>setContent(contents?.find(data => data.category === categoryDetails.category)))
    }, [categoryDetails.category])

    // console.log(contents);

    const { image,category, title,text_color, price, description } = content;

    const btnStyle={
        backgroundColor:text_color,
        opacity:"1",
        color:"white",
        padding:"16px 26px",
        borderRadius:"4px",
    }

    const handleDonateBtn=()=>{
        setDataInLS(category);
        console.log(category);
        swal("Thank You", "Your Donation has been Successful", "success");
    }

    return (
        <div className="mt-24 w-11/12 mx-auto">
            <div className="relative">
                <img src={image?.link2} className="w-full rounded-lg  mx-auto h-[700px]" alt="" />
                <div className="absolute z-30 bottom-0 p-9 bg-black bg-opacity-40 w-full">
                    <button onClick={handleDonateBtn} className="text-xl font-bold" style={btnStyle}>Donate {price}</button>
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-4xl font-bold capitalize mb-6">{title}</h2>
                <p className="mb-28">{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;