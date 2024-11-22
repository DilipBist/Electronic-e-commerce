import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Category() {

    const { cid } = useParams()
    const [productlist, setProductlist] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productUrl = `https://dummyjson.com/products/category/${cid}`;
                const response = await axios.get(productUrl);
                // console.log(response.data.products)
                setProductlist(response.data.products);
            } catch (error) {
                setError(error)
            }
        }

        fetchProduct();
    }, [cid])

    if (error) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Error: {error}</p>


    return (
        <div>
            <h1 className='container px-10 text-whiteFont font-semibold py-2 mt-2 rounded-full m-auto text-3xl capitalize text-center bg-bgOrange w-max'>{cid}</h1>
            <div className='container px-4 py-5 m-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    productlist.map((product) => {
                        return (
                            <div className='shadow-md w-[80%] sm:w-full p-5 rounded grid gap-5 bg-bgLight' key={product.id}>
                                <div>
                                    <img src={product.images[0]} alt={product.title}
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
                                    <div className='flex items-center justify-between gap-4'>
                                        <Link to={`/detail/${product.id}`} className='px-3 py-2 bg-bgOrange rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105 mx-auto'>Buy Now</Link>

                                        {/* <button className='px-3 py-2 bg-buttonColor rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105'>Add to Cart</button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category