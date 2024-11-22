import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductList(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {

        const getCategory = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/category/${props.title}`)
                // console.log(res.data.products);
                setProductList(res.data.products)
                setLoading(false)
            } catch (error) {
                setError(error);
                console.log(error);
                setLoading(false)
            }
        }

        getCategory();
    }, [])

    
    if (error) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Error: {error}</p>;

    if (loading) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Loading...</p>;


    return (
        <div>
            <div className="container m-auto px-5">
                <div className='flex items-center justify-between px-5'>
                    <p className='py-2 my-10 font-bold text-base sm:text-3xl lg:text-4xl text-brandBG  w-max  px-4 rounded-full capitalize'>{props.title}</p>
                    <Link to={`/cat/${props.title}`}><p className='text-base sm:text-xl font-semibold  flex items-center gap-2  hover:text-bgOrange'>View all <i className='bx bx-chevron-right text-2xl'></i></p></Link>
                </div>

                <div className='grid my-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10'>
                    {
                        productList.slice(0, 4).map((product) => (
                            <div key={product.id}>
                                <div className='shadow-md w-[80%] mx-auto lg:h-[550px] sm:w-full p-5 rounded grid justify-items-center bg-bgLight border'>
                                    <div>
                                        <img src={product.images[0]} alt={product.title}
                                            className='border p-4 aspect-video object-cover sm:object-contain sm:aspect-square'
                                        />
                                    </div>
                                    <div>
                                        <p className='text-base sm:text-xl font-semibold  py-2'>{product.title}</p>
                                        <small className=''>{product.warrantyInformation}</small>
                                        <div className='flex items-center justify-between py-3 text-xl font-semibold px-1 gap-4'>
                                            <p className='text-footer'>$ {product.price}</p>
                                            <p className='text-footer'>Rating: {product.rating}</p>
                                        </div>
                                        <div className='flex items-center justify-center w-full gap-4 mt-3'>
                                            <Link to={`/detail/${product.id}`} className='px-3 py-2 bg-bgOrange rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105 mx-auto'>Buy Now</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList