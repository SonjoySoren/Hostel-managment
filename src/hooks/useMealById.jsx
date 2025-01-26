import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMealById = (id) => {
    const axiosPublic = useAxiosPublic();
    const {data: mealById={}, isLoading, refetch} = useQuery({
        queryKey: ['MealById'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/meal/${id}`);
            return res.data;
        }
    })
    return [mealById, isLoading, refetch];
    
};

export default useMealById;