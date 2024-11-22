import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { bestSeller, newArrival } from '../../assets/sliderImage';

function Detail() {
    let { id } = useParams();
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const localProduct =  newArrival.find((item) => item.id === Number(id)) ||  bestSeller.find((item) => item.id === Number(id));
            if(localProduct)
            {
                setProduct(localProduct);
               setIsLoading(false);
               return
            }
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                const foundProduct = response.data;
                // const foundProduct = productitem.find((item) => item.id === Number(id));

             if (foundProduct) {
                    setProduct(foundProduct);
                }
            } catch (error) {
                setError('Failed to fetch product details');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    // const product = data.find((item) => item.id === Number(id));

    if (isLoading) return  <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Loading...</p>;

    if (error) return <p className='text-3xl font-semibold container px-4 flex flex-col items-center justify-center py-10 text-blackFont'>Error: {error}</p>;


    return (
        <div>
            <div className="container px-5 m-auto py-5 grid justify-items-center">
                {product ? (
                    <div className='shadow-md sm:w-full p-5 rounded grid justify-items-center sm:grid-cols-5 gap-5 bg-bgLight'>
                        <div className='col-span-3 sm:col-span-2  grid justify-items-center'>
                            <img src={product.images?.[0] || product.image} alt={product.title || product.name}
                                className=' w-full p-4 aspect-video object-contain sm:aspect-square md:text-[13px] lg:text-base'
                            />
                        </div>
                        <div className='col-span-2 sm:col-span-3'>
                            <p className='text-base sm:text-3xl md:text-4xl pt-5 border-b-2 mb-5 font-bold py-2'>{product.title || product.name}</p>
                            <p className='text-xs sm:text-base'>{product.description}</p>
                            <small className=''>{product.warrantyInformation}</small>
                          
                            <div className='flex flex-col items-start justify-center py-3 text-xl font-semibold px-1 gap-4'>
                                <p className='text-bgOrange text-3xl md:text-5xl font-bold'>$ {product.price}</p>
                                <div className='flex gap-5 items-center justify-center'>
                                    <p className='text-bgOrange text-[15px] sm:text-base'><i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star' ></i>
                                        <i className='bx bxs-star-half' ></i></p>
                                    <p className='text-bgOrange text-[15px] sm:text-base'> Rating: {product.rating}</p>
                                </div>
                                <p className='text-bgOrange text-[15px] sm:text-base'>{product.returnPolicy}</p>
                                <p className='text-footer text-[15px] sm:text-base bg-whiteFont py-2 px-4 shadow-md border'>Shiping: {product.shippingInformation}</p>
                            </div>
                            <div className='pt-2 flex flex-wrap gap-10'>
                                <p className='flex items-center gap-2'>
                                    <label htmlFor="input" className='font-semibold text-xl'>Quantity: </label>
                                    <input type="number" name="" id="input" className='border-2 border-brandBG px-2 w-[100px] py-2 rounded outline-brandBG' placeholder='1' />
                                </p>
                                <button className='px-5 py-2 bg-buttonColor rounded-md text-whiteFont cursor-pointer md:text-[13px] lg:text-base transition-transform duration-200 hover:shadow-lg hover:scale-105'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='font-semibold text-4xl text-bgOrange'>Opps! product not found</p>
                )}
            </div>

        </div>
    );
}

export default Detail;
