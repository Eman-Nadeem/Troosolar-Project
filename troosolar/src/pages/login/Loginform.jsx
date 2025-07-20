import React from 'react'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import eye from '../../assets/icons/Eye.svg';
import { useLocation } from 'react-router-dom'

const Loginform = () => {
  const location=useLocation();
  const isRegister = location.pathname.toLowerCase().includes('register');

  const {login}=useAuth();
  const navigate=useNavigate();
  // variables for email and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(isRegister){
        console.log("Handle Registration");
    }
    else{
        if(!formData.email){
            alert("Email is required");
            return;
        }
        if(!formData.password){
            alert("Password is required");
            return;
        }
        if(formData.password.length<6){
            alert("Password must be at least 6 characters");
            return;
        }
        login(formData.email,formData.password);
        navigate('/');
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='flex flex-col shadow-lg rounded-lg px-10 pt-2 h-full bg-white'>
        <div className='flex justify-center'><img src={logo} alt="Troosolar Logo" className='w-60 h-20 object-contain'/></div>

        <div className='flex flex-col gap-2 mb-2'>
            <p className='text-xl font-semibold text-center'>Create an Account</p>
            <p className='text-xs text-center mb-8'>Provide your personal information to help us know you better</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-3.5">
            {/* Email Input */}
            <div className=''>
                <label htmlFor="email" className="text-xs block mb-1 font-medium text-gray-700">Email</label>
                <input
                type="email"
                id="email"
                name='email'
                required
                className="text-xs w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light"
                placeholder="Input email address"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            {/* Password Input */}
            <div>
                <label htmlFor="password" className="text-xs block mb-1 font-medium text-gray-700">Password</label>
                <div className="relative">
                <input
                    id="password"
                    name='password'
                    required
                    className="text-xs w-full px-4 py-3 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-primary-light"
                    placeholder="Input password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    
                />
                <button onClick={() => setShowPassword(!showPassword)} className='cursor-pointer absolute top-1/2 right-3 transform -translate-y-1/2'>
                    <img src={eye} alt="Show password/hide password" />
                </button>
                </div>
            </div>
            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                type="submit"
                className="text-xs text-white w-full bg-primary py-3 rounded-md hover:bg-primary-dark transition cursor-pointer mt-1"
            >
                {isRegister ? 'Register' : 'Login'}
            </button>
        </form>

        <div className='mt-7 flex flex-col gap-2'>
            <p className='text-xs'>{isRegister ? 'Already have an account?' : 'Don\'t have an account?'}</p>
            <button
                onClick={() => navigate(isRegister ? '/login' : '/register')}
                className="text-xs text-white w-full bg-tertiary py-3 rounded-md hover:bg-tertiary-dark transition cursor-pointer mt-1"
            >
                {isRegister ? 'Login' : 'Register'}
            </button>
        </div>
    </div>
  )
}

export default Loginform