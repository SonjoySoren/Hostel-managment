
import useUpcomingMeals from '../../hooks/useUpcomingMeals';
import UpcomingMealCard from '../../Components/UpcomingMealCard/UpcomingMealCard';

const Upcoming = () => {
    const [upcomingMeals = []] = useUpcomingMeals();
    console.log(upcomingMeals);
    return (
        <div>
            <h2 className='text-3xl text-center mt-10'>Upcoming Meals: {upcomingMeals.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {upcomingMeals.map(item => <UpcomingMealCard key={item._id} meal={item}></UpcomingMealCard>)}
            </div>
        </div>
    );
};

export default Upcoming;