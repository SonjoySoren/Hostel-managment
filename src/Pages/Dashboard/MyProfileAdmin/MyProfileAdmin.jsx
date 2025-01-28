import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyProfileAdmin = () => {
    const axiosSecure = useAxiosSecure();

    const { user } = useAuth();
    const email = { email: user?.email }
    const { data: userInfo = {} } = useQuery({
        queryKey: ['userInfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;

        }
    })
    const { data: MealsAdded =[] } = useQuery({
        queryKey: ['MealsAdded'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mealAdmin/?email=${user?.email}`);
            return res.data;

        }
    })



    return (
        <div>
            <h2 className='text-2xl '>Hi {userInfo?.name}, Welcome to your Admin profile </h2>
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
                        <p>Meals added:  {MealsAdded?.length}</p>
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

export default MyProfileAdmin;