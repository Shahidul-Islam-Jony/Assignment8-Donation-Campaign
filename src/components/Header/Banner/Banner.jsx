import banner_img from "../../../assets/images/clothes2.jpg";
import PropTypes from "prop-types";
import CategoryCards from "../../CategoryCards/CategoryCards";
import { useEffect, useRef, useState } from "react";

const Banner = () => {
    const [contents, setContents] = useState([]);
    const [searchContents, setSearchContents] = useState([]);
    const inputText = useRef(null);
    const [searchCategory, setSearchCategory] = useState('');

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setContents(data))
    }, [])

    const handleInput = (e) => {
        e.preventDefault();
        setSearchCategory(inputText.current.value);
    }

    useEffect(() => {
        const cart = [];
        const content = contents.filter(content => content.category.toLowerCase() === searchCategory.toLocaleLowerCase());
        if (content) {
            // console.log(content);
            cart.push(...content);
        }
        if (cart.length > 0) {
            setSearchContents(cart)
        }
        else {
            setSearchContents(contents)
        }
    }, [searchCategory, contents])

    // console.log(contents);

    return (
        <div>
            <div className="hero h-[600px] absolute z-10 top-0" style={{ backgroundImage: `url(${banner_img})` }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full text-black">

                        <div className="flex justify-center my-36">
                            <div>
                                <h2 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
                                <div className="form-control">
                                    <form onSubmit={handleInput}>
                                        <label className="input-group justify-center">
                                            <input ref={inputText} type="text" name="name" placeholder="Search here...." className="input input-bordered" />
                                            <input className="bg-[#FF444A] text-white px-4 font-semibold cursor-pointer" type="submit" value="Search" />
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-44 mt-[570px] lg:grid-cols-4  gap-6 w-11/12 mx-auto">
                {
                    searchContents.map((content, idx) => <CategoryCards key={idx} content={content}></CategoryCards>)
                }
            </div>
        </div>

    );
};

Banner.propTypes = {
    contents: PropTypes.array
}

export default Banner;