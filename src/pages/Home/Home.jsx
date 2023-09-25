import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import CategoryCards from "../../components/CategoryCards/CategoryCards";

const Home = () => {

    const contents = useLoaderData();
    // console.log(contents);

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-4 my-24 gap-6 w-4/5 mx-auto">
                {
                    contents.map((content,idx)=><CategoryCards key={idx} content={content}></CategoryCards>)
                }
            </div>
        </div>
    );
};

export default Home;