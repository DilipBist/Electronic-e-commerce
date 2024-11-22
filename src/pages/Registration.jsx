import React from 'react'

function Registration() {
    return (
        <div>
            <div className="container m-auto px-5 py-10">

                <form action="" className='w-[80%] mx-auto'>
                    <div className='pb-5 text-center'>
                        <p className='text-base sm:text-xl md:text-2xl font-semibold text-blackFont pb-3'>Dealer Application</p>
                        <p >all the * fields are required below:</p>
                    </div>
                    <div>
                        <div className='border-2 rounded-xl shadow px-3 py-4'>
                            <p className='py-3 border-b-2 text-xl font-medium' > Personal Information ( ब्यक्तिगत विवरण)</p>
                            <div className='grid grid-cols-2 gap-5 my-5'>
                                <input type="text" placeholder='First name' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                <input type="text" placeholder='Last name' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                <input type="email" placeholder='email' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                <input type="number" placeholder='phone nunber' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                <input type="password" placeholder='password' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                                <input type="password" placeholder='repeat password' className='border px-2 py-3 rounded outline-1 outline-brandBG' required />
                            </div>
                            <input type="file" placeholder='upload your profile image' className='w-full border mt-5 py-2 px-3' />
                        </div>
                    </div>
                    <button className='py-2 text-center w-[30%] block mt-5 font-medium md:text-xl rounded-xl hover:scale-105 hover:shadow-md duration-500 text-white m-auto bg-buttonColor'>Apply</button>
                </form>

            </div>
        </div>
    )
}

export default Registration