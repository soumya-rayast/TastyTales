import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryWraper from '../components/CategoryWraper'
import axios from 'axios';
import Card from '../components/Card';

const CategoryPage = () => {
    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchedCategoryData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://tasty-tales-backend-sable.vercel.app/api/categories/${category}`)
                setItems(response.data);
            } catch (error) {
                setError(error.message || "Error loading category")
            }
        }
        fetchedCategoryData()
    },[category])

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center capitalize text-3xl py-10 font-semibold text-secondary sm:text-6xl'>
                {category}
            </h1>
            <CategoryWraper />
            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items &&  items.map((item)=>(
                        <Card key={item._id} item={item}  />
                    ))
                }
            </ul>
        </div>
    )
}

export default CategoryPage