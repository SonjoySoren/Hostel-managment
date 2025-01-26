import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReview = () => {
    const axiosPublic = useAxiosPublic();
    const {data: review=[], isLoading, refetch} = useQuery({
        queryKey: ['Review'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/review`);
            return res.data;
        }
    })
    return[review, isLoading, refetch];
    
};

export default useReview;