
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import SocialLogin from "../../Components/NavBar/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import loginAnimation from '../../assets/LottieFiles/Login-animation.json';
import Lottie from "lottie-react";


const Login = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();
    const [disabled, setDisabled] = useState(true);
    const from = location.state?.from?.pathname || "/";
    
    const handleLogin =(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password).then(result=> {
            const user = result.user;
            
            Swal.fire({
                title: "Login Successful",
                text: "Click ok to continue",
                icon: "success"
              }).then(result=>{
                if (result.isConfirmed) {
                    navigate(from);
                }
              })
        })
        .catch(error=>{
            console.log(error.code);
            Swal.fire({
                title: `${error.code}`,
                text: "Please check your Email and password",
                icon: "error"
              })

        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                    <Lottie animationData={loginAnimation}></Lottie>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        
                        <div className="form-control mt-6">
                            <input  className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center text-amber-600'>New here? <span className='font-bold'><Link to={'/signUp'}>Sign Up</Link></span></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;