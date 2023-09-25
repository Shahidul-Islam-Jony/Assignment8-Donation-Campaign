import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/Logo.png';

const Navbar = () => {
    const links = <div className="flex flex-col gap-4 lg:flex-row lg:gap-10 text-lg">
        <NavLink to="/home" className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''}>Home</NavLink>
        <NavLink to="/donation" className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''}>Donation</NavLink>
        <NavLink to="/statistics" className={({ isPending, isActive }) => isPending ? 'pending' : isActive ? 'text-red-500 underline' : ''}>Statistics</NavLink>
    </div>
    return (
        <div className="w-4/5 pt-5 z-10 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;