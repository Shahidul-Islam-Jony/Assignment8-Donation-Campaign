
const Banner = () => {
    return (
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
    );
};

export default Banner;