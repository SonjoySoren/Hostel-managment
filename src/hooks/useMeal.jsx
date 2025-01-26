
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMeal = (search='', category='', minPrice='', maxPrice='') => {
    const axiosPublic = useAxiosPublic();
    const { data: meals = [], refetch, isPending } = useQuery({
        queryKey: ['Meals'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meal?search=${search}&category=${category}&min=${minPrice}&max=${maxPrice}`);
            return res.data;
        }
    })
    return [meals, refetch, isPending];
};

export default useMeal;