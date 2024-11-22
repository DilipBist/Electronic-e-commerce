import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Brands() {

    const [productCategory, setProductCategory] = useState([]);
    const [allProducts, setAllProducts] = useState([])
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const url = 'https://dummyjson.com/products/categories';
                const url1 = 'https://dummyjson.com/products';
                const response = await axios.get(url);
                const response1 = await axios.get(url1);
                // response.ok is only used for the fetch method 
                // if (!response.ok) {
                //     throw new Error('Api fetching is not working');
                // }
                // console.log(response.data);
                setProductCategory(response.data);
                // console.log(response1.data.products);
                setAllProducts(response1.data.products)
            } catch (error) {
                setError(error.message);
            } finally {
                setIsloading(false);
            }
        }

        fetchData();
    }, [])


    if (isloading)
        return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Loading...</p>


    if (error) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Error: {error}</p>


    return (
        <div>
            <div className='container m-auto px-5'>
                <p className='px-3 py-2 bg-buttonColor text-whiteFont text-xl font-semibold text-center my-5'>All Categories</p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-5 justify-between items-center py-5 h-[200px] md:h-auto border md:border-0 px-3 rounded  overflow-x-auto my-5'>
                    {
                        productCategory.map((catdata, index) => {
                            return (
                                <div key={index}>
                                    <ul className=''>
                                        <Link to={`/cat/${catdata.slug}`} className='px-3 py-2 bg-bgLight    border-b hover:bg-bgLightGrey cursor-pointer flex justify-between  items-center gap-5 md:text-xs lg:text-base border shadow-inner rounded'>
                                            {catdata.name} <i className='bx bx-chevron-right'></i>
                                        </Link>
                                    </ul>
                                </div>
                            )
                        })
                    }

                </div>

                <p className='px-3 py-2 bg-buttonColor text-whiteFont text-xl font-semibold text-center my-5'> Products</p>

                <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-10 items-center justify-items-center py-5'>
                    {
                        allProducts.map((product) => (
                            <div className='shadow-md w-[80%] sm:w-full p-5 rounded grid gap-5 bg-bgLight border' key={product.id}>
                                <div>
                                    <img src={product.images?.[0]} alt={product.title}
                                        className='border p-4 aspect-video object-contain sm:aspect-square md:text-[13px] lg:text-base'
                                    />
                                </div>
                                <div>
                                    <p className='text-xl font-bold py-2'>{product.title}</p>
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
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands