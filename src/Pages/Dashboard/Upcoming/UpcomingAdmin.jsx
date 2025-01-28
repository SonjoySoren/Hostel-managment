import { useState } from 'react';
import useUpcomingMeals from '../../../hooks/useUpcomingMeals';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const UpcomingAdmin = () => {
    const axiosPublic = useAxiosPublic();
    const [sort, setSort] = useState('1')

    const [requests, refetch] = useUpcomingMeals(sort);
    const handleSort = (d) => {
        setSort(d);
        refetch();
    }
    const handlePublish = async (item) => {
        
        const { _id, ...newItem } = item;

        const res = await axiosPublic.post(`/upcomingPublish/${_id}`, newItem);
        console.log(res.data);
        refetch();
        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Meal has been published",
                showConfirmButton: false,
                timer: 1500
              });
        }

    }
    return (
        <div>
            <h1>Serve</h1>
            <div>
                <div className='h-10 md:h-15 lg:h-20 border-2 border-gray-200 mb-2 flex items-center justify-between'>


                    {/* filter by category */}
                    <div>
                        <select className="select select-ghost w-full max-w-xs bg-gray-400 ml-10"
                            onChange={(e) => handleSort(e.target.value)}>
                            <option disabled selected>Sort By Likes</option>
                            <option value="-1">Ascending</option>
                            <option value="1">Descending</option>

                        </select>
                    </div>


                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Meal Title</th>

                                    <th>Added By: </th>
                                    <th>Likes: </th>

                                    <th className="text-center">Action Button</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    requests.map((item, idx) => <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item?.title}</td>
                                        <td>{item?.distributorEmail}</td>
                                        <td>{item?.likes}</td>


                                        <td >
                                            <div className="flex flex-col gap-1">
                                                <button onClick={()=>handlePublish(item)} className="btn btn-secondary btn-xs">Publish</button>


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

export default UpcomingAdmin;