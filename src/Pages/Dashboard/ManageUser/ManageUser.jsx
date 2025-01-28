
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { HiMiniUserGroup } from 'react-icons/hi2';

import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })

    const handleMakeAdmin = (user) => {
        Swal.fire({
            title: `Are you sure you want to make ${user.name} admin?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data?.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Success",
                                text: `${user.name} is Admin now`,
                                icon: "success"


                            });
                        }
                    })
            }
        })

    }

    


    return (
        <div >
            <div className="flex justify-evenly">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role =="admin" ?
                                            'Admin'
                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost">
                                                <HiMiniUserGroup className="text-2xl" />
                                            </button>
                                    }

                                </td>
                                <td>
                                   {user?.badge}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;