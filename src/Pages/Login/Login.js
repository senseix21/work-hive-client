import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../Assets/login-removebg-preview.png'
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { signInUserWithGoogle, signInUserWithEmailandPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



    const signInWithGoogle = () => {
        signInUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
            })
    }

    //
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUserWithEmailandPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(err => {
                console.error(err);
            })

    }
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={loginImg} alt="Album" /></figure>
                <div className="card-body mx-auto">
                    <form onSubmit={handleSubmit} action="">

                        <div className="form-control w-2/3 mx-auto ">
                            <h2 className="card-title">Sign Up here!</h2>

                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Email</span>
                                <input type="email" name='email' placeholder="info@site.com" className="input input-bordered" />
                            </label>


                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Password</span>
                                <input type="password" name='password' placeholder="***********" className="input input-bordered" />
                            </label>


                            <button type='submit' className='btn btn-primary my-5'>Login</button>
                            <p>or Login With</p>
                            <button onClick={signInWithGoogle} className='btn btn-outline btn-secondary'><FaGoogle className='text-3xl'></FaGoogle></button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;