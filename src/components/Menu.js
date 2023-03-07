import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";



function Menu() {

    const [show, setShow] = useState(false);

    return (

        <header>
            <div className="lg:flex hidden items-center justify-between font-outfit  text-white-100 h-24 text-md">
                <a href="/" className="logo w-52">
                    <img src={logo} alt="Logo" className='' />
                </a>

                <nav>
                    <ul className="flex justify-center gap-12 tracking-widest items-center uppercase">
                        <li><a href="/" className="hover:border-b-4 border-blue-50 pb-1.5">Home</a></li>
                        <li><a href="#about" className="hover:border-b-4 border-blue-50 pb-1.5">about us</a></li>
                        <li><a href="#contract" className="hover:border-b-4 border-blue-50 pb-1.5">contract</a></li>
                        <li><a href="#play" className="hover:border-b-4 border-blue-50 pb-1.5">Play</a></li>
                        <li><a href="#utility" className="hover:border-b-4 border-blue-50 pb-1.5">utility</a></li>
                        <li><Link to="/signup" className="hover:border-b-4 border-blue-50 pb-1.5">contact us</Link></li>
                    </ul>
                </nav>

                <a href="/">
                    <button className="text-white-100  border-2 border-custom rounded-full py-2 lg:px-8 px-4 mt-5 uppercase">
                        Whitepaper
                    </button>
                </a>
            </div>

            <div className="lg:hidden flex items-center justify-between pt-5 font-outfit">
                <a href="/" className="w-52">
                    <img src={logo} alt="Logo" />
                </a>

                <button onClick={() => setShow(!show)} className="nav cursor-pointer">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>

                </button>
            </div>

            {
                show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-outfit font-semibold bg-blue-50 z-20" style={{ left: "0" }}>

                    <div className="mt-3 mb-12">
                        <a href="/" className="text-white-100">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
                        <a href="/" className="text-lg ml-4 font-semibold">Home</a>
                    </button>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 text-white-100">
                        <a href="#about" className="text-lg ml-4 font-semibold">About Us</a>
                    </button>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
                        <a href="#contract" className="text-lg ml-4 font-semibold">Contract</a>
                    </button>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
                        <a href="#utility" className="text-lg ml-4 font-semibold">Utility</a>
                    </button>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
                        <a href="/signup" className="text-lg ml-4 font-semibold">Contact</a>
                    </button>
                    <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer  text-white-100">
                        <a href="/" className="text-lg ml-4 font-semibold">Whitepaper</a>
                    </button>
                </div> : null
            }


        </header >
    )

}

export default Menu