import MealCard from "../../Components/MealCard/MealCard";

import UpcomingMealCardF from "../../Components/UpcomingMealCard/UpcomingMealCardF";
import useUpcomingMeals from "../../hooks/useUpcomingMeals";



const Upcoming = () => {
    const [upcomingMeals, refetch ] = useUpcomingMeals();
    return (
        <div>
            <h1 className="text-3xl mt-10 text-center">Upcoming meals:{upcomingMeals?.length}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    upcomingMeals.map(item=> <UpcomingMealCardF key={item._id} meal={item} refetch={refetch}/>)
                }

            </div>
        </div>
    );
};

export default Upcoming;