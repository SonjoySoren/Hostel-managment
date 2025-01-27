import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const UserReview = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviewForUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/review/mealData/?email=${user?.email}`);
            return res.data;

        }
    })
    const handleView =(id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div>
            <h1>This is my review</h1>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Meal Title</th>
                                    <th>Likes</th>
                                    <th>Review </th>
                                    
                                    <th className="text-center">Action Button</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map((item, idx) => <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item?.title}</td>
                                        <td>{item?.likes}</td>
                                        <td>{item?.reviewText}</td>
                                        
                                        <td >
                                            <div className="flex flex-col gap-1">
                                                <button onClick={() => handleDelete(item?._id)} className="btn btn-primary btn-xs">Edit</button>
                                                <button onClick={() => handleDelete(item?._id)} className="btn btn-secondary btn-xs">Delete</button>
                                                <button onClick={() => handleView(item?._id)} className="btn btn-info btn-xs">View Meal</button>


                                            </div>

                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;