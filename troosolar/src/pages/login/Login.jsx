import React, { useEffect } from 'react'
import loginImg from '../../assets/images/login-img.jpg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import instagram from '../../assets/icons/instagram.svg'
import twitter from '../../assets/icons/twitter.svg'
import youtube from '../../assets/icons/youtube.svg'
import LoginForm from './LoginForm'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const navigate=useNavigate();
    const {isAuthenticated}=useAuth();

    useEffect(() => {
      if (isAuthenticated) {
        navigate('/', { replace: true });
      }
    }, [isAuthenticated, navigate]);
  
  return (
    <div className='grid grid-cols-2 h-screen font-montserrat'>
        {/* left section of login page */}
        <div className='relative'>
            <img src={loginImg} alt="Login page image" className='w-full h-full object-cover'/>
            <div className='absolute bottom-10 left-9'>
                <div className='w-[540px] flex flex-col gap-8'>
                    <p className='text-white text-2xl'>Providing affordable, sustainable and reliable solar energy solutions for millions of Nigerians</p>
                    <div className='flex gap-2.5'>
                        <a href='#'>
                            <img src={whatsapp} alt="Whatsapp Link" className='w-10 h-10 object-cover'/>
                        </a>
                        <a href='#'>
                            <img src={instagram} alt="Instagram Link" className='w-10 h-10 object-cover'/>
                        </a>
                        <a href='#'>
                            <img src={twitter} alt="Twitter Link" className='w-10 h-10 object-cover'/>
                        </a>
                        <a href='#'>
                            <img src={youtube} alt="Youtube Link" className='w-10 h-10 object-cover'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        {/* right section of login page */}
        <div className='p-10 bg-secondary'>
            <LoginForm/>
        </div>
    </div>
  )
}

export default Login