import React from 'react';
import useUpcomingMeals from '../../hooks/useUpcomingMeals';

const Upcoming = () => {
    const [upcomingMeals] = useUpcomingMeals();
    return (
        <div>
            <h2 className='text-3xl text-center'>Upcoming Meals: {upcomingMeals}</h2>
            <div>
                
            </div>
        </div>
    );
};

export default Upcoming;