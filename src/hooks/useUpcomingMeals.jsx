
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUpcomingMeals = () => {
    const axiosPublic = useAxiosPublic();
    const { data: upcomingMeals = [], isLoading, refetch } = useQuery({
        queryKey: ['MealById'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcomingMeals`);
            return res.data;
        }
    })
    return [upcomingMeals, refetch, isLoading];
};

export default useUpcomingMeals;