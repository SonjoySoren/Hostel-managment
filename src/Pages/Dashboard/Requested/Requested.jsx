import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useRequest from "../../../hooks/useRequest";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Requested = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth(); ''
    const [requests = [], ,refetch] = useRequest(user?.email);
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
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/request?userEmail=${user?.email}&mealId=${id}`)
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
            <h2>This is requested page</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal Title</th>
                                <th>Likes</th>
                                <th>Review Count</th>
                                <th>Status</th>
                                <th>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map((item, idx) => <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.likes}</td>
                                    <td>{item?.reviewsCount}</td>
                                    <td>{item?.status}</td>
                                    <td><button onClick={() => handleDelete(item?._id)} className="btn btn-primary">Delete</button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Requested;