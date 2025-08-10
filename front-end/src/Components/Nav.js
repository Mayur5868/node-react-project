import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup')
        // console.warn("inspire")
    }

    return (
        <>
            {/* <div>
                <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update</Link></li>
                 <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/Signup">SignUp</Link></li>
            </ul>
                 <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                    <li>{auth?<Link onClick={logout} to="/signup">Logout</Link></li>:<li><Link to="/Signup">SignUp</Link></li>}

                    <li><Link to="/login">Login</Link></li>
                    
                    
                </ul>
                <ul className='nav-ul'>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                    {
                    auth? <li><Link onClick={logout} to="/signup">Logout</Link></li>
                    :
                    <>
                    <li><Link to="/Signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </>
                    }
                </ul>
            </div> */}
            <div>
            {/* <img src="https://www.surat-training-course.com/assets/img/inspire-training-course-surat.webp" alt="logo" /> */}

                
                {
                    auth ? <ul className='nav-ul'>

                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={logout} to="/signup">Logout {JSON.parse(auth).name}</Link></li>
                    </ul>
                        :

                        <ul className='nav-ul nav-right'>
                            <li><Link to="/Signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                }

            </div>
        </>
    )
}
export default Nav