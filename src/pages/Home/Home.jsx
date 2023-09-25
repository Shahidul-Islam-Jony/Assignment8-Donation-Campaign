import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import CategoryCards from "../../components/CategoryCards/CategoryCards";

const Home = () => {

    const contents = useLoaderData();
    // console.log(contents);

    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    contents.map((content,idx)=><CategoryCards key={idx} content={content}></CategoryCards>)
                }
            </div>
        </div>
    );
};

export default Home;