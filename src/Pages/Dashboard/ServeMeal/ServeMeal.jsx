import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ServeMeal = () => {
    
    const axiosSecure = useAxiosSecure();
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requestByAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requestByAdmin`);
            return res.data;

        }
    })
    const handleServe = async(id)=>{
        console.log(id);
        const res = await axiosSecure.patch(`/requestServe/${id}`);
        console.log(res.data)
        refetch()
        if(res.data?.modifiedCount>0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Status has been updated",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }

    return (
        <div>
            <h1>Serve</h1>
            <div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Meal Title</th>
                                    <th>User Email:</th>
                                    <th>Name: </th>
                                    <th>Status: </th>

                                    <th className="text-center">Action Button</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    requests.map((item, idx) => <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item?.meal?.title}</td>
                                        <td>{item?.requestedBy}</td>
                                        <td>{item?.user?.name}</td>
                                        <td>{item?.status}</td>

                                        <td >
                                            <div className="flex flex-col gap-1">
                                                <button onClick={()=>handleServe(item._id)} className="btn btn-secondary btn-xs">Serve</button>


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

export default ServeMeal;