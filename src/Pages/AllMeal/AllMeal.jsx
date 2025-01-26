import React, { useEffect, useState } from 'react';
import useMeal from '../../hooks/useMeal';
import MealCard from '../../Components/MealCard/MealCard';

const AllMeal = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(99254740);
    const [meals, refetch, isPending] = useMeal(searchQuery, category, minPrice, maxPrice);
    console.log(minPrice, maxPrice);


    useEffect(() => {
        refetch();
    }, [searchQuery, category, maxPrice, minPrice])


    return (
        <div className='mt-5'>
            <div className='h-10 md:h-15 lg:h-20 border-2 border-gray-200 mb-2 flex items-center justify-between'>

                {/* search input field */}

                <div>
                    <label className="input ml-5">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input onKeyUp={(e) => setSearchQuery(e.target.value)} type="text" className="grow" placeholder="Search" />

                    </label>
                </div>
                {/* filter by category */}
                <div>
                    <select className="select select-ghost w-full max-w-xs bg-gray-400 ml-10"
                        onChange={(e) => setCategory(e.target.value)}>
                        <option disabled selected>Filter by Category</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="">All meals</option>
                    </select>
                </div>
                {/* filter by price  */}
                <div className='flex gap-5'>
                    <h3 >
                        Filter by Price:

                    </h3>
                    <input
                        className='input input-bordered input-sm  max-w-[150px]'
                        type="number"
                        placeholder="Min Price"
                        
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                    />

                    <input
                        className='input input-bordered input-sm  max-w-[150px]'
                        type="number"
                        placeholder="Max Price"
                        
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                </div>

            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    meals.map(item => <MealCard key={item._id} meal={item}></MealCard>)
                }
            </div>
        </div>
    );
};

export default AllMeal;