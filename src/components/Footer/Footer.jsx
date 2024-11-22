import React from 'react'
import { Link } from 'react-router-dom'
import playstore from '../../assets/play.png'
import faq from '../../assets/faq.png'
import contact from '../../assets/contact.png'
import about_company from '../../assets/about.png'

function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-bgGrey border mt-[100px]">
        <div className='container mx-auto px-5 py-8 gap-10 grid grid-cols-2 sm:grid-cols-3 justify-between justify-items-center'>
          <div>
            <img src={about_company} alt="" />
            <p className='text-xl font-semibold pt-5'>About Company</p>
          </div>
         
          <div>
           <Link to={'/contact'}> <img src={faq} alt="" />
           <p className='text-xl font-semibold pt-5'>Contact Us</p>
           </Link>
          </div>
          <div>
            <img src={contact} alt="" />
            <p className='text-xl font-semibold pt-5'>FAQs</p>
          </div>
        </div>
      </div>
      <div className='bg-footer py-10'>
        <div className="container m-auto px-4 text-whiteFont">
          <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <div className='flex flex-col'>
              <Link to={'/'} className='font-bold text-2xl md:text-3xl text-whiteFont'>CompanyLogo.</Link>
              <img src={playstore} alt="playsore" className='w-[200px] lg:w-[250px]' />
            </div>
            <div>
              <ul className='flex flex-col justify-center gap-3'>
                <li className='mb-1 text-xl font-semibold uppercase'>Special</li>
                <li>Featured Products</li>
                <li>Latest Products</li>
                <li>Best Selling Products</li>
                <li>Top Rated Products</li>
                <li>Register as a student</li>
              </ul>
            </div>
            <div>
              <ul className='flex flex-col justify-center gap-3'>
                <li className='mb-1 text-xl font-semibold uppercase'>Customer Care</li>
                <li>My Account</li>
                <li>Track your Order</li>
                <li>Customer Service</li>
                <li>Returns/Exchange</li>
                <li>FAQs</li>
                <li>Product Support</li>
              </ul>
            </div>
            <div className=''>
              <ul className='flex flex-col '>
                <li className='mb-4 text-xl font-semibold'>NEWS LETTER</li>
                <li className='font-semibold pb-3'> Subscribe to our new channel to get latest updates</li>
              </ul>
              <div className='flex items-center justify-center'>
                <input type="text" placeholder='Enter your Email' className='px-5 py-2 w-full outline-none' />
                <button className='px-5 py-2 bg-buttonColor text-whiteFont font-semibold'>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className='bg-buttonColor py-5'>
        <div className='container px-5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-items-center gap-5 '>
            <p className='text-white text-xl'>&copy; CopyRight <small>Company Name</small> @ {currentYear}</p>
            <p className='text-white text-xl'>Refrence DigitalShauji</p>
            <p className='text-white text-xl'>Terms & Conditions &nbsp; Privacy & Policy  </p>
        </div>
      </div>
    </>
  )
}

export default Footer