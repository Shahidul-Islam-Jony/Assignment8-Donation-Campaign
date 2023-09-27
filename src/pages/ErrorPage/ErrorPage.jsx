import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <h3 className="text-2xl font-semibold text-center">Oops !!!</h3>
                {/* <p className="text-lg">Something gona wrong</p> */}
                <p className="text-center">{error.statusText || error.messsage}</p>
                {
                    error.status === 404 && <div>
                        <h3 className="text-center mt-10">Page not found</h3>
                        <div className="mt-2">
                            <Link className="bg-red-500 text-white px-4 py-2 rounded-lg" to={'/'}>Go Back to Home</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ErrorPage;