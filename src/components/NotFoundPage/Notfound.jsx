import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
    const navigate = useNavigate();
  return (
    <div>
        <div className='container m-auto px-5 grid justify-items-center '>
           <p className='text-4xl font-semibold py-5'> opps! page not found</p>
           <p className='border bg-bgOrange px-5 py-2 text-whiteFont cursor-pointer mb-5 rounded-full 
           font-semibold'
            onClick={()=> navigate('/')}
           >Go to Home Page</p>
        </div>
    </div>
  )
}

export default Notfound