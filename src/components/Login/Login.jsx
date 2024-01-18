import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const {loginUser} = useContext(AuthContext)
    
    const [success,setSuccess]= useState(false)
    const [error,setError]= useState(null)

/* form thake value tola */

    const handleLogin = ( event ) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        loginUser(email,password)
           .then(result =>{
             const user = result.user;
             console.log(user);
             
           })
            .catch(error =>{
             console.log(error);
           }) 
       
        
        
    }

    return (
     <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-96  shadow-2xl  bg-base-100">

            <form onSubmit={handleLogin} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-nor font-semibold">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input  type="password" placeholder="password" name='password' className="input input-bordered " required />
                <label className="label">
                <Link to='/register' className="label-text-alt link link-hover font-semibold">Don't Have an account?<span className='hover:text-[#fa3206] font-semibold'> Please Register</span></Link>
                </label>
              </div>
              {
                <p className='text-red-500'>{error}</p>
              }

              {
                success && <p className='text-green-500'>Successfully Registration Dan</p>
              }
              <div className="form-control mt-6">
                <button type='Submit' className="btn btn-primary">Login</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
};

export default Login;