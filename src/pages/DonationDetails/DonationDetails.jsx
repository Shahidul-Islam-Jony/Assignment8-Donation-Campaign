import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { setDataInLS } from "../../components/LocalStorage/LocalStorage";

const DonationDetails = () => {
    const titleDetails = useParams();
    // console.log(titleDetails);
    const [content, setContent] = useState([]);
    useEffect(() => {
        fetch('donation.json')
        .then(res=>res.json())
        .then(contents=>setContent(contents?.find(data => data.title === titleDetails.title)))
    }, [titleDetails.title])

    // console.log(contents);

    const { image,title,text_color, price, description } = content;

    const btnStyle={
        backgroundColor:text_color,
        opacity:"1",
        color:"white",
        padding:"16px 26px",
        borderRadius:"4px",
    }

    const handleDonateBtn=()=>{
        setDataInLS(title);
        // console.log(title);
        swal("Thank You", "Your Donation has been Successful", "success");
    }

    return (
        <div className="mt-24 w-11/12 mx-auto">
            <div className="relative">
                <img src={image?.link2} className="w-full h-[350px] md:h-[500px] rounded-lg  mx-auto lg:h-[700px]" alt="" />
                <div className="absolute bottom-0 p-4 md:p-7 lg:p-9 bg-black bg-opacity-40 w-full">
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