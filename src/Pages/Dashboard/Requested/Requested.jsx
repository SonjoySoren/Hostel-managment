import useAuth from "../../../hooks/useAuth";
import useRequest from "../../../hooks/useRequest";


const Requested = () => {
    const{user} = useAuth();''
    const [requests=[]] = useRequest(user?.email);
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
                                requests.map((item, idx)=> <tr key={item._id}>
                                    <th>{idx+1}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.likes}</td>
                                    <td>{item?.reviewsCount}</td>
                                    <td>{item?.status}</td>
                                    <td></td>
                                    
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