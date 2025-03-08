import React from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <Link className="hover:text-green-500 transition-all duration-200">Home</Link>
        <Link className="hover:text-green-500 transition-all duration-200">About</Link>
        <Link className="hover:text-green-500 transition-all duration-200">Services</Link>
        <Link className="hover:text-green-500 transition-all duration-200">Contact</Link>
    </>
    
    return (
        <div className="flex justify-center p-5 py-6 fixed w-full z-50">
            <div className="w-full max-w-6xl inline-flex justify-between items-center  bg-white/90 p-6 py-4 rounded-2xl shadow-md">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow border">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl font-bold flex items-center gap-3 ">
                    <BsFillTriangleFill className='text-emerald-600 text-2xl' />
                        Silio Digital
                    </Link>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 text-md font-medium text-gray-700">
                        {links}
                    </ul>
                </div>
                
                <div className="navbar-end">
                    <Link className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;