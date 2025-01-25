import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMeal from '../../../hooks/useMeal';
import MealTab from '../MealTab/MealTab';
import MealCard from '../../../Components/MealCard/MealCard';

const MealSection = () => {
    const [meals] = useMeal();
    const breakfast = meals.filter(item=> item.category === 'Breakfast');
    const popularBreakfast = breakfast.sort((a,b)=> b.rating - a.rating).slice(0,6);
    const lunch = meals.filter(item=> item.category === 'Lunch');
    const popularLunch = lunch.sort((a,b)=> b.rating - a.rating).slice(0,6);

    const dinner = meals.filter(item=> item.category === 'Dinner');
    const popularDinner = dinner.sort((a,b)=> b.rating - a.rating).slice(0,6);

    const allMeals = meals.sort((a,b)=>b.rating - a.rating).slice(0,6);
    return (
        <div>
            <h1 className='text-4xl text-center'>Check out Our Popular Meals</h1>
            <Tabs>
                <TabList >
                    <Tab>BreakFast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                    <Tab>All Meals</Tab>
                   
                </TabList>
                <TabPanel>
                    <MealTab items={popularBreakfast}></MealTab>
                </TabPanel>
                <TabPanel>
                    <MealTab items={popularLunch}></MealTab>
                </TabPanel>
                <TabPanel>
                    <MealTab items={popularDinner}></MealTab>
                </TabPanel>
                <TabPanel>
                    <MealTab items={allMeals}></MealTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealSection;