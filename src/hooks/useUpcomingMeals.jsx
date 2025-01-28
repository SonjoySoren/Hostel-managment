
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUpcomingMeals = (sort='') => {

    const axiosPublic = useAxiosPublic();
    const { data: upcomingMeals = [], isLoading, refetch, isSuccess } = useQuery({
        queryKey: ['MealById'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcomingMeals?sort=${sort}`);
            return res.data;
        }
    })
    return [upcomingMeals, refetch, isLoading, isSuccess];
};

export default useUpcomingMeals;