import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Update = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { id: mealId } = useParams()
    const [review, setReview] = useState('')
    console.log(mealId);
    useEffect(() => {
        async function fetch() {
            const res = await axiosPublic.get(`/reviewByEmail?email=${user?.email}&mealId=${mealId}`)
            setReview(res.data?.reviewText)
            console.log(res.data);
        }
        fetch();
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newReviewText = e.target.newReview.value;

        const newReview = {
            oldReviewText: review,
            reviewText: newReviewText
        }
        const res = await axiosSecure.patch(`/review?email=${user?.email}&mealId=${mealId}`, newReview);
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
            Swal.fire({
                title: "Success",
                text: "Your Review has been updated successfully",
                icon: "success"
            })
            navigate(-1)
        }

    }
    return (
        <div>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Your Next Review:</legend>
                        <textarea name='newReview' defaultValue={review} className="textarea textarea-sm"></textarea>


                    </fieldset>
                    <button className='btn btn-primary btn-sm'>update</button>
                </form>

            </div>
        </div>
    );
};

export default Update;