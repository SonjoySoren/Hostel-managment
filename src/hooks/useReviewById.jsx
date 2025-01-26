import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviewById = (id) => {
    const axiosPublic = useAxiosPublic();
    const {data: reviewById=[], isLoading, refetch} = useQuery({
        queryKey: ['reviewById'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/review/${id}`);
            return res.data;
        }
    })
    return [reviewById, isLoading, refetch];
    
};

export default useReviewById;