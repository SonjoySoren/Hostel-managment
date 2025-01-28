
import { Link, useNavigate } from 'react-router-dom';
import useMeal from '../../../hooks/useMeal';
import { FaEdit } from 'react-icons/fa';
import { ImBin } from 'react-icons/im';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllMealAdmin = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const [searchQuery, setSearchQuery] = useState('');
    const [allMeal, refetch] = useMeal(searchQuery);
    useEffect(() => {
        refetch();
    }, [searchQuery])

    const handleView = (id) => {
        navigate(`/details/${id}`)
    }
    const handleDelete = async (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/meal/${id}`)
                console.log(res.data);
                if (res.data?.deletedCount > 0) {

                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });

    }
    return (
        <div>
            <h1 className="text-2xl text-center">Manage Items: {allMeal?.length}</h1>

            <div className='h-10 mt-4 md:h-15 lg:h-20 border-2 border-gray-200 mb-2 flex items-center justify-between'>

                {/* search input field */}

                <div>
                    <label className="input ml-5">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input onKeyUp={(e) => setSearchQuery(e.target.value)} type="text" className="grow" placeholder="Search" />

                    </label>
                </div>


            </div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Likes</th>

                            <th>Review Count</th>
                            <th>Distributor Name</th>
                            <th className='text-center'>Action Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allMeal.map((item, idx) => <tr key={item._id}>
                                <th>{idx + 1}</th>
                                <td>
                                    {item?.title}
                                </td>
                                <td>{item?.likes}</td>
                                <td>{item?.reviewsCount}</td>
                                <td>{item?.distributorName}</td>

                                
                                <td>
                                    <div className="flex flex-col gap-1">
                                        <button onClick={() => handleUpdate(item?._id)} className="btn btn-primary btn-xs">Update</button>
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
    );
};

export default AllMealAdmin;