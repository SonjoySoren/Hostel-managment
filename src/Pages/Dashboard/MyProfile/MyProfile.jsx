import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const email = {email: user?.email}
    const { data: userInfo = {} } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;

        }
    })
    console.log(userInfo)
    return (
        <div>
            <h2 className='text-2xl '>Hi {userInfo?.name}, Welcome to your profile </h2>
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={user?.photoURL}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {user?.displayName}</h2>
                        <p>Email: {user?.email}</p>
                        <div className="badge badge-info gap-2">
                            Badge: {userInfo?.badge}
                        </div>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;