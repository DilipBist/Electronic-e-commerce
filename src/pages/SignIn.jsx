import React from 'react'

function SignIn() {
    return (
        <div>
            <div className="container m-auto px-5 py-10">

                <form action="" className='w-full md:w-[60%] lg:w-[40%] mx-auto'>
                    <div>
                        <div className='border-2 rounded-xl shadow px-3 py-4'>
                            <div className='grid grid-cols-1 gap-5 my-5'>
                                <p className='text-base sm:text-xl md:text-2xl font-semibold text-blackFont pb-3'>Sign In
                                </p>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email" >Email address / Phone</label>
                                    <input type="email" id='email' placeholder='Enter your email or phone number' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="pass" >Password:</label>
                                    <input type="password" id='pass' placeholder='Minimun 8 character long' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" name="" id="" />
                                    <p>Remember me</p>
                                </div>
                                <button className='bg-brandBG opacity-70 text-whiteFont px-5 py-2 rounded-md hover:opacity-90 font-medium hover:border-opacity-90'><i className='bx bxs-user-circle '></i> SignIn</button>

                            </div>
                            <div className='flex items-center justify-between gap-5 text-brandBG'>
                                <p className='font-medium text-xl'>No account? Sign Up now</p>
                                <button className='border-2 border-brandBG px-5 py-2 rounded-md hover:opacity-90 font-medium hover:border-opacity-90'> <i className='bx bxs-log-in-circle' ></i> SignUp</button>
                            </div>

                            <button className='my-4 px-10 py-2 border border-brandBG text-brandBG  flex items-center gap-2 rounded-md font-medium opacity-70 hover:opacity-90'>Sign in with google <i className='bx bxl-google text-2xl'></i></button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default SignIn