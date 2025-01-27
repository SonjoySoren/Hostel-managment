import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const useUpcomingMealById = (id) => {
    const axiosPublic = useAxiosPublic();
    const {data: mealById={}, isLoading, refetch} = useQuery({
        queryKey: ['upcomingMealById'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/upcomingMealById/${id}`);
            return res.data;
        }
    })
    return [mealById, isLoading, refetch];
};

export default useUpcomingMealById;