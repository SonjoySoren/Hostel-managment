import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useRequest = (email='') => {
    const axiosSecure = useAxiosSecure();
    const { data: requests = [], isLoading, refetch } = useQuery({
        queryKey: ['RequestByUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/request?email=${email}`);
            return res.data;
        }
    })
    return [requests, isLoading, refetch];

};

export default useRequest;