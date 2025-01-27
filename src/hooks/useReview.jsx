import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReview = (email='') => {
    const axiosPublic = useAxiosPublic();
    const {data: review=[], isLoading, refetch} = useQuery({
        queryKey: ['Review'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/review?email=${email}`);
            return res.data;
        }
    })
    return[review, isLoading, refetch];
    
};

export default useReview;