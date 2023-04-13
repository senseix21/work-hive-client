import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import signUpImg from '../../Assets/20824341_6368592-removebg-preview.png'

const SignUp = () => {
    const { signUpWithEmailandPassword } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        signUpWithEmailandPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={signUpImg} alt="Album" /></figure>
                <div className="card-body mx-auto">
                    <form onSubmit={handleSubmit} action="">
                        <div className="form-control w-2/3 mx-auto ">
                            <h2 className="card-title">Sign Up here!</h2>
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <span>Username</span>
                                <input type="text" name='name' placeholder="hasin12X32" className="input input-bordered" />
                            </label>
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
                            <button type='submit' className='btn btn-primary my-5'>Sign Up</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;