import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Navbar = () => {

  const  { user,logOut }  = useContext (AuthContext)

  
   const handleLogOut = () =>{
       logOut()
   }
  

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
       

    </React.Fragment>
    return (
    <div className=" bg-base-200">
    <div className='navbar container mx-auto'>
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          
          {menuItems}
        </ul>
      </div>
      <a className="btn btn-ghost text-4xl gap-0"><span className='text-red-500 text-4xl'>Rup</span>ock</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {menuItems}
      </ul>
    </div>
        <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {
              user ?<div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
            </div>: <button className='hover:text-red-500'><Link to="/login"><span className='text-red-500 font-bold'>L</span>ogin</Link></button>
            }
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                {user?.displayName}
                <span className="badge">New</span>
              </a>
            </li>
            { user && <li><a>{user?.email}</a></li>}
            { user && <li><button onClick={handleLogOut}>Logout</button></li>}
          </ul>
        </div>
      </div>
       
    </div>
  </div>
      
    );
};

export default Navbar;