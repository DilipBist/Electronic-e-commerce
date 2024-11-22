import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { sliderImage, BrandData, newArrival, bestSeller } from '../../assets/sliderImage';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductLists/ProductList';

function Home() {

    const [productCategory, setProductCategory] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {

        const fetchData = async () => {
            try {
                const url = 'https://dummyjson.com/products/categories';
                const response = await axios.get(url);
                // response.ok is only used for the fetch method 
                // if (!response.ok) {
                //     throw new Error('Api fetching is not working');
                // }
                // console.log(response.data);
                setProductCategory(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        }

        fetchData();
    }, [])

    if (isloading)
        return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Loading...</p>;


    if (error) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Error: {error}</p>;



    return (
        <div>


            <div className='container m-auto px-4 py-2 grid grid-cols-12 gap-5'>
                <div className={`lg:col-span-3 hidden lg:block `}>
                    {/* <p className='px-3 py-2 bg-buttonColor text-whiteFont text-xl font-semibold'>Categories</p> */}
                    {
                        productCategory.slice(0, 8).map((catdata) => {
                            return (
                                <div key={catdata.name}>
                                    <ul>
                                        <Link to={`/cat/${catdata.slug}`}>
                                            <li className='px-3 py-2 bg-bgLight border-b hover:bg-bgLightGrey cursor-pointer flex justify-between items-center gap-5 md:text-xs lg:text-base'>{catdata.name} <i className='bx bx-chevron-right'></i></li>
                                        </Link>
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <Link to='/brand'>
                        <p className='px-3 py-2 bg-bgLight hover:bg-bgLightGrey  cursor-pointer flex justify-between items-center ga-5 md:text-xs lg:text-base'>View all <i className='bx bx-chevron-right'></i></p>
                        <img src={sliderImage.imageUrl} alt="" />
                    </Link>
                </div>

                <div className='lg:col-span-9 col-span-full w-full'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            sliderImage.map((slide) => (
                                <SwiperSlide key={slide.alt}>

                                    <img className='w-full lg:px-4' src={slide.imageUrl} alt={slide.alt} />

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>



                </div>
            </div>

            {/* brand slider  */}
            <div className='py-8 container m-auto px-4 w-full cursor-pointer'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={50}
                    breakpoints={{
                        320: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 9,
                            spaceBetween: 30,
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    {
                        BrandData.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <img src={brand} alt='brandImage' className='w-full' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

{/* new arrival slider  */}
            <div className='container m-auto px-5 py-5'>
                <p className='py-2 mb-5 font-bold text-base sm:text-3xl lg:text-4xl text-brandBG w-max px-4 rounded-full'>New Arrival products </p>
                <Swiper
                    slidesPerView={5}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        }
                    }}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        newArrival.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className='shadow-lg border w-full lg:h-[450px] sm:w-full p-5 rounded grid gap-5 bg-bgLight justify-items-center'>
                                    <div>
                                        <img src={product.image} alt={product.name}
                                            className='border p-4 aspect-video object-cover sm:object-contain  sm:aspect-square md:text-[13px] lg:text-base'
                                        />
                                    </div>
                                    <div>
                                    {/* <small className='text-footer'>{product.id}</small> */}

                                        <p className='text-base sm:text-xl font-semibold py-2'>{product.name}</p>
                                        <div className='flex items-center justify-between text-xl font-semibold px-1 gap-4'>
                                            <p className='text-footer'>$ {product.price}</p>
                                            <p className='text-footer'>Rating: {product.rating}</p>
                                        </div>
                                        <div className='flex items-center justify-center w-full gap-4 mt-3'>
                                            <Link to={`/detail/${product.id}`} className='px-3 py-2 bg-bgOrange rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105 mx-auto'>Buy Now</Link>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

            <div className='container m-auto px-5 py-5'>
                <img src="https://www.digitalsahuji.com/storage/app/public/banner/2024-07-29-66a73b5319750.png" alt="image" className='w-full' />
            </div>

            <div className='container m-auto px-5 py-5'>
                <p className='py-2 mb-5 font-bold text-base sm:text-3xl lg:text-4xl text-brandBG w-max px-4 rounded-full'>Best Selling products </p>
                <Swiper
                    slidesPerView={5}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        }
                    }}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bestSeller.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className='shadow-md border w-full lg:h-[450px] sm:w-full p-5 rounded grid gap-5 bg-bgLight justify-items-center'>
                                    <div>
                                        <img src={product.image} alt={product.name}
                                            className='border p-4 aspect-videoobject-cover sm:object-contain sm:aspect-square md:text-[13px] lg:text-base'
                                        />
                                    </div>
                                    <div>
                                            {/* <p className='text-footer'>{product.id}</p> */}
                                        <p className='text-base sm:text-xl font-semibold  py-2'>{product.name}</p>
                                        <div className='flex items-center justify-between text-xl font-semibold px-1 gap-4'>
                                            <p className='text-footer'>$ {product.price}</p>
                                            <p className='text-footer'>Rating: {product.rating}</p>
                                        </div>
                                        <div className='flex items-center justify-center w-full gap-4 mt-3'>
                                            <Link to={`/detail/${product.id}`} className='px-3 py-2 bg-bgOrange rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105 mx-auto'>Buy Now</Link>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>


            <ProductList title='laptops' />
            <ProductList title='mens-watches' />
            <ProductList title='smartphones' />
            <ProductList title='groceries' />
            <ProductList title='mens-shirts' />
        </div>
    )
}

export default Home