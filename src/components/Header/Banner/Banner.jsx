import banner_img from "../../../assets/images/Clothing.png";

const Banner = () => {
    return (

        <div className="hero min-h-full" style={{ backgroundImage: `url(${banner_img})` }}>
            <div className="hero-overlay bg-white bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full text-black">

                    <div className="flex justify-center my-36">
                        <div>
                            <h2 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h2>
                            <div className="form-control">
                                <label className="input-group justify-center">
                                    <input type="text" placeholder="Search here...." className="input input-bordered" />
                                    <span className="bg-[#FF444A] text-white ">Search</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


    );
};

export default Banner;