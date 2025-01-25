import React from 'react';
import MealCard from '../../../Components/MealCard/MealCard';
import { Link } from 'react-router-dom';

const MealTab = ({ items }) => {


    return (
        <div >
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    items.map(item => <MealCard key={item._id} meal={item}></MealCard>)
                }
            </div>
            <Link to={''}>
            <button className='btn btn-primary mt-5'> Check All Meals</button>
            </Link>
        </div>

    );
};

export default MealTab;