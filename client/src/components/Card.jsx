import React from 'react'
import { Link } from 'react-router-dom'
import { LuClock3 } from "react-icons/lu";
const Card = ({ item }) => {
    const categoriesStyles = {
        Entrees: {
            backgroundColor: '#f0f5c4', color: '#59871f'
        },
        Breakfast: {
            backgroundColor: "#efedfa", color: "#3c3a8f"
        },
        Lunch: {
            backgroundColor: "#e5f7f3", color: "#1f8787"
        },
        Desserts: {
            backgroundColor: "#feefc9", color: "#d16400"
        },
        sides: {
            backgroundColor: "#e8f5fa", color: "#397a9e"
        },
        Drinks: {
            backgroundColor: "#ffeae3", color: "#f0403e"
        },
        default: {
            backgroundColor: "#fff", color: "#000"
        }
    }
    const getCategoryStyle = (category) => {
        return categoriesStyles[category] || categoriesStyles.default;
    }
    const categoryStyle = getCategoryStyle(item?.category)
    return (
        <div className='container mx-auto justify-center md:justify-start'>
            <div className='max-w-sm'>
                <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg'>
                    <img src={item?.thumbnail_image} alt={'thumbnail_image'}
                        className='rounded-t-lg'
                    />
                    <div className='py-3 px-5 rounded-lg bg-white'>
                        <Link to={`/items/${item._id}`}>
                            <h1 className='text-gray-700 fon-bold text-2xl mb-8 hover:text-gray-900'>{item?.name}</h1>
                        </Link>
                        <div className="flex items-center justify-between flex-wrap">
                            <button className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                                style={{
                                    backgroundColor: categoryStyle.backgroundColor,
                                    color: categoryStyle.color,
                                }}>
                                {item?.category}
                            </button>
                            <div className=' flex items-center py-2 mt-6'>
                                <LuClock3 />
                                <span className='ml-1'>{item?.more?.[0]?.prep_time || 'N/A'}</span>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-2 right-2 py-2 px-4 bg-white rounded-lg '>
                        <span className='font-medium'>
                            {item?.more?.[0]?.difficulty || 'N/A'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
