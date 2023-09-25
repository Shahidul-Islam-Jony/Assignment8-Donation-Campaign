import Banner from "../../components/Header/Banner/Banner";
import CategoryCards from "../../components/CategoryCards/CategoryCards";
import { useEffect, useState } from "react";

const Home = () => {

    const [contents,setContents] = useState([]);

    useEffect(()=>{
        fetch('../../../public/donation.json')
        .then(res=>res.json())
        .then(data=>setContents(data))
    },[])

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-24 gap-6 w-11/12 mx-auto">
                {
                    contents.map((content,idx)=><CategoryCards key={idx} content={content}></CategoryCards>)
                }
            </div>
        </div>
    );
};

export default Home;