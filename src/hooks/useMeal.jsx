
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMeal = () => {
    const axiosPublic = useAxiosPublic();
    const {data: meals=[], refetch, isPending} = useQuery({
        queryKey: ['Meals'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/meal');
            return res.data;
        }
    })
    return [meals, refetch, isPending];
};

export default useMeal;