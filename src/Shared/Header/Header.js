import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa'
import { AuthContext } from '../../Context/UserContext';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const logOut = () => {
        signOutUser()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const navLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </>

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">WorkHive</Link>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                </div>


                {/* Profile and cart section */}


                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        user?.email ? <div className="dropdown dropdown-end mx-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    !user?.email ? <FaUserAlt className='h-10 text-2xl'></FaUserAlt>
                                        :
                                        <>
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} alt="" />
                                            </div>
                                        </>

                                }

                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link>Settings</Link></li>
                                <li><Link onClick={logOut}>Logout</Link></li>
                            </ul>
                        </div> : null
                    }
                    {
                        !user?.uid ? <><Link to={'/login'} className="btn btn-outline btn-primary">Login</Link>
                            <Link to={'/signup'} className="btn btn-primary mx-2">Sign Up</Link></> : null
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;