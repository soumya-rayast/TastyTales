import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProducts = () => {
    const item = useLoaderData()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const extractNumber = (timeString) => {
        let timeArray = timeString.split(' ');
        return parseInt(timeArray[0])
    }
    let prepTimeMinutes = extractNumber(item?.more?.[0].prep_time);
    let cookTimeMinutes = extractNumber(item?.more?.[0].cook_time);
    const TotalTimes = prepTimeMinutes + cookTimeMinutes;
    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <article>
                <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                    <picture>
                        <img src={item.thumbnail_image}
                            alt=""
                            className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto'
                        />
                    </picture>
                    <div className='px-8'>
                        <h1 className='text-4xl mt-12 text-secondary'>
                            {item.name}
                        </h1>
                        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facere maiores atque voluptates cupiditate veniam quod, corrupti quibusdam officia molestiae.</p>
                        <div className='ml-5 mt-5'>
                            <h3 className='text-xl font-semibold'>Tags</h3>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                {item?.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                            <h3 className='text-xl font-semibold'>Preparation time</h3>
                            <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                                <li className='pl-3'>
                                    <p>Total: <span>{TotalTimes} minutes</span></p>
                                </li>
                                <li className='pl-3 mt-3'>
                                    <p>Preparation: <span>{item?.more?.[0].prep_time}</span></p>
                                </li>
                                <li className='pl-3 mt-3'>
                                    <p>Cooking: <span>{item?.more?.[0].cook_time}</span></p>
                                </li>
                            </ul>
                        </article>
                        <div className='ml-5 mt-5'>
                            <h3 className='text-xl font-semibold'>Ingredients</h3>
                            <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                                {item?.ingredients.map((ingredient, index) => (
                                    <li key={index} className='pl-4 mt-2'>
                                        <span>{ingredient?.name}:</span>
                                        <span> {ingredient?.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='ml-5 mt-5'>
                            <h3 className='text-xl font-semibold'>Instructions</h3>
                            <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                                {item?.instructions
                                    ?.split(/\d\.\s+/g)
                                    .filter(step => step.trim() !== '')
                                    .map((instruct, index) => (
                                        <li key={index} className='pl-4 mt-2'>
                                            {instruct.trim()}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className='ml-5 mt-5'>
                            <h3 className='text-xl font-semibold'>Comments</h3>
                            <div className='mt-4 space-y-4'>
                                {item?.comments.map((comment, index) => (
                                    <div
                                        key={index}
                                        className='p-4 border rounded-lg bg-gray-50 shadow-sm'
                                    >
                                        <p className='text-sm text-gray-600'>
                                            <span className='font-semibold text-gray-800'>{comment.user}:</span> {comment.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </section>
    )
}

export default SingleProducts
