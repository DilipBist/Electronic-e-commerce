import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);


    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
        console.log('DropDown clicked')
    }
    return (
        <>
            {/* top bar in header */}
            <div className='bg-bgLightGrey border'>
                <div className="container m-auto px-4">
                    <div className='flex items-center justify-center md:justify-between py-1'>
                        <p className='flex gap-2 items-center justify-center text-base'>
                            <i className='bx bx-phone-call'></i> 9806437793
                        </p>
                        <div className='hidden md:flex text-base items-center gap-5'>
                            <p className='flex gap-1 items-center cursor-pointer'>
                                <i className='bx bx-map'></i> Store Locator
                            </p>
                            <p className='flex gap-1 items-center cursor-pointer'>
                                <i className='bx bxs-truck'></i> Track Your Order
                            </p>
                            <p className='flex gap-1 items-center cursor-pointer'>
                                <i className='bx bx-shopping-bag'></i> Shop
                            </p>
                            <p className='flex gap-1 items-center cursor-pointer'>
                                <i className='bx bx-user'></i> My Account
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* second top in header */}
            <div className='flex container px-4 m-auto items-center justify-between md:gap-5 lg:gap-12 py-3'>
                <Link to={'/'} className='font-bold text-2xl md:text-3xl text-bgOrange'>CompanyLogo.</Link>

                {/* form input search */}
                <form className='hidden md:flex w-full'>
                    <input
                        type="text" placeholder='Search for products..'
                        className='border w-full py-2 px-5 md:py-1 lg:py-2 border-brandBG rounded-l-lg outline-none'
                        
                    />
                    <button className='bg-brandBG rounded-r-lg'>
                        <i className='bx bx-search text-2xl text-whiteFont px-5'></i>
                    </button>
                </form>

                <div className='flex items-center gap-3'>
                    <div className="flex items-center justify-center bg-bgLightGrey p-2 h-[40px] w-[40px] rounded-full cursor-pointer">

                        <li className='relative group list-none'>
                            <button className='flex items-center gap-1'
                                onClick={handleDropdown}
                            >
                                <i className='bx bxs-user text-2xl'></i>
                            </button>
                            <div className={`absolute -left-1 md:group-hover:block z-10 
                                ${showDropdown ? 'flex' : 'hidden'}
                            `}>
                                <ul className='bg-whiteFont text-blackFont shadow-md rounded'>
                                    <Link to={'/signin'} className='cursor-pointer pb-2 hover:bg-bgLight rounded font-semibold px-5 py-3 border-b hover:scale-95 flex items-center gap-2'>
                                    <i className='bx bxs-log-in-circle' ></i> SignIn
                                    </Link>
                                    <Link to={'/signup'} className='cursor-pointer pt-2 hover:bg-bgLight rounded font-semibold px-5 py-3 hover:scale-95 flex gap-2 items-center'>
                                        <i className='bx bxs-user-circle '></i>
                                        SignUp  
                                    </Link>
                                </ul>
                            </div>
                        </li>
                    </div>

                    <div className='flex items-center gap-1 cursor-pointer' title='Cart'>
                        <div className="flex items-center justify-center bg-bgLightGrey p-2 h-[40px] w-[40px] rounded-full">
                            <i className='bx bxs-cart text-2xl'></i>
                        </div>
                        <p className='font-semibold'>₹0.00</p>
                    </div>
                </div>
            </div>

            {/* nav-bar in header */}
            <Navbar />
        </>
    );
}

export default Header;
