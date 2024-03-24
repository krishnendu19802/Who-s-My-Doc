import React from 'react';
import logo from '../assets/logo1.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { toast } from "react-hot-toast";
import { useAuth } from '../context/auth';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let SetloggedIn = props.SetloggedIn;
  const [auth, setAuth] = useAuth();
  //log out handler
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem('auth');
    toast.success("Logged Out successfully")
  }
  return (
    <div className='navbar'>
    {/* // <div className='flex justify-evenly'> */}
      <Link to='/'>
        <img src={logo} alt="Logo" loading='lazy' />
      </Link>

      <nav className='nav-links'>
      {/* <nav> */}
        <ul className="flex gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
 

      <div className="auth-buttons">
<<<<<<< HEAD

        { !isLoggedIn &&
            <Link to ="/login">
                <button className='auth-button'>
                    Login
                </button>
            </Link>           
        }

         { !isLoggedIn &&
            <Link to ="/signup">
                <button className='auth-button'>
                    Signup
                </button>
            </Link>           
        }
          { isLoggedIn &&
            <Link to ="/">
                <button  className='auth-button' onClick={()=>{
                    SetloggedIn(false);
                    toast.success("Logged Out");
                }}>
                    LogOut
                </button>
            </Link>           
        }
          { isLoggedIn &&
            <Link to ="/dashboard">
                <button className='auth-button'>
                    Dashboard
                </button>
            </Link>           
=======
        {!auth.user &&
          <Link to="/login">
            <button>
              Login
            </button>
          </Link>
        }

        {!auth.user &&
          <Link to="/signup">
            <button>
              Signup
            </button>
          </Link>
        }
        {auth.user &&
          <Link to="/">
            <button onClick={handleLogout}>
              LogOut
            </button>
          </Link>
        }
        {auth.user &&
          <Link to="/dashboard">
            <button>
              Dashboard
            </button>
          </Link>
>>>>>>> aac81f1db42a063d3cf9d6b99101f1f52f53f27d
        }
      </div>
      </nav>
    </div>


  );
}

export default Navbar;