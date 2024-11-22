import React from 'react'

function SignUp() {
    return (
        <div>
            <div className="container m-auto px-5 py-10">

                <form action="" className='w-full md:w-[70%] lg:w-[60%] mx-auto'>
                    <div className='pb-5 text-center'>
                        <p className='text-base sm:text-xl md:text-2xl font-semibold text-blackFont pb-3'>Sign up
                        </p>
                        <p > No Account ? Register control your order .</p>
                    </div>
                    <div>
                        <div className='border-2 rounded-xl shadow px-3 py-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 my-5'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="first" >First Name:</label>
                                    <input type="text" id='first' placeholder='First name' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="last" >Last Name:</label>
                                    <input type="text" id='last' placeholder='last name' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email" >Email Address:</label>
                                    <input type="email" id='email' placeholder='Email' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="phone" >Phone Number:</label>
                                    <input type="number" id='phone' placeholder='contact number' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass" >Password:</label>
                                    <input type="password" id='pass' placeholder='Minimun 8 character long' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass" >Confirm Password</label>
                                    <input type="password" id='pass' placeholder='Minimun 8 character long' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>

                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="" id="" />
                                    <p>I agree to Your Terms and conditions</p>
                                </div>


                            </div>
                            <div className='flex items-center justify-between gap-5 text-brandBG'>
                                <button className='bg-brandBG opacity-70 text-whiteFont px-5 py-2 rounded-md hover:opacity-90 font-medium hover:border-opacity-90'><i className='bx bxs-user-circle '></i> SignUp</button>
                                <button className='border-2 border-brandBG px-5 py-2 rounded-md hover:opacity-90 font-medium hover:border-opacity-90'> <i className='bx bxs-log-in-circle' ></i> SignIn</button>
                            </div>

                            <button className='my-4 px-10 py-2 border border-brandBG text-brandBG  flex items-center gap-2 rounded-md font-medium opacity-70 hover:opacity-90'>Sign in with google <i className='bx bxl-google text-2xl'></i></button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default SignUp