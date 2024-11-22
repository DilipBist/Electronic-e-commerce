import React, { useEffect, useState } from 'react'

function ScrollTop() {
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () =>{
        const scrolled = window.scrollY;
        if(scrolled > 300) 
        {
            setVisible(true);
        }
        else if(scrolled <= 300)
        {
            setVisible(false)
        }
    }
   

    const handleScrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);

         return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    },[])
    return (
        <>
            <div className={`shadow-inner bg-buttonColor h-14 w-14 p-5 fixed z-10  right-12 rounded-full cursor-pointer bottom-12 ${visible ? 'flex items-center justify-center ' : 'hidden'}`} title='Scroll To Top ' 
             onClick={handleScrollTop}
            >
            <i className='bx bx-up-arrow-alt text-3xl text-whiteFont'></i>
            </div>
        </>
    )
}

export default ScrollTop