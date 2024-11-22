import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleMenuLinks = () => {
        setShowLinks(!showLinks);
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop || window.scrollY;
        setIsSticky(scrolled > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`py-2 ${
                isSticky ? 'fixed top-0 left-0 w-full bg-brandBG z-20 shadow-md py-5' : 'bg-brandBG'
            }`}
        >
            <nav className="flex flex-col sm:flex-row sm:items-center container px-4 m-auto lg:gap-[100px] gap-5">
                <div className="flex items-center gap-2 text-whiteFont">
                    <i
                        className="bx bx-menu-alt-left text-4xl cursor-pointer sm:hidden"
                        onClick={handleMenuLinks}
                    ></i>
                    <p
                        className="text-xl hidden lg:flex lg:items-center justify-between px-5 gap-5 bg-whiteFont text-blackFont w-[360px] py-1 font-semibold cursor-pointer"
                        title="Below are the Categories"
                    >
                        Categories <i className="bx bxs-down-arrow-square"></i>
                    </p>
                </div>

                <ul
                    className={`flex flex-col sm:flex-row sm:items-center gap-8 text-whiteFont ${
                        showLinks ? 'block' : 'hidden sm:flex'
                    }`}
                >
                    <NavLink
                        to={`/`}
                        className={({ isActive }) =>
                            isActive ? 'text-xl font-semibold bg-buttonColor rounded py-1 px-3' : ''
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={`/brand`}
                        className={({ isActive }) =>
                            isActive ? 'text-xl font-semibold bg-buttonColor rounded py-1 px-3' : ''
                        }
                    >
                        All Brands
                    </NavLink>
                    <li className="relative group">
                        <button className="flex items-center gap-1" onClick={handleDropdown}>
                            Dealer Zone <i className="bx bx-chevron-down text-2xl"></i>
                        </button>
                        <div
                            className={`sm:absolute sm:-left-1 md:group-hover:block z-10 ${
                                showDropdown ? 'block' : 'hidden'
                            }`}
                        >
                            <ul className="bg-whiteFont text-blackFont shadow-md rounded">
                                <li className="cursor-pointer pb-2 hover:bg-bgLight rounded font-semibold px-5 py-3 border-b hover:scale-95">
                                    <Link to={'/register'}>Registration</Link>
                                </li>
                                <li className="cursor-pointer pt-2 hover:bg-bgLight rounded font-semibold px-5 py-3 hover:scale-95">
                                    <Link to={'/signin'}>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <NavLink
                        to={`/contact`}
                        className={({ isActive }) =>
                            isActive ? 'text-xl font-semibold bg-buttonColor rounded py-1 px-3' : ''
                        }
                    >
                        Contact Us
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
