import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import brand from '../../../images/logos/logo.png';
import { signOut } from '../../Login/loginManager';

const Navbar = () => {
    const { user } = useContext(userContext);
    const [loggedinUser, setLoggedinUser] = user;

    const handleLogOut = () => {
        setLoggedinUser({});
        signOut();
        sessionStorage.setItem('user', JSON.stringify({}));
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
            <div>
                <img className="navbar-brand img-fluid" src={brand} style={{ width: "30%" }} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#">Out Portfolio</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#">Our Team</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link text-brand" href="#">Contact us</a>
                    </li>
                    <li className="nav-item mr-4">
                        {
                        loggedinUser.isLoggedIn === true ?
                        <button className="btn-brand" onClick={handleLogOut}>Log Out</button> :
                            <Link to="/login">
                                <button className="btn-brand">Log In</button>
                            </Link>
                            
                        }
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;