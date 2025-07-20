import React from 'react'
import notifications from '../assets/icons/notifications.svg'
import admin from '../assets/images/admin.jpg'

const Header = () => {
  return (
    <header className='w-[calc(100%-15rem)] py-3 px-4 bg-white flex justify-end items-center absolute left-60 border border-b-gray-200 border-t-0 border-l-0 border-r-0'>
        <div className='flex items-center gap-4'>
            <button className='cursor-pointer w-9 h-9 shadow-sm border border-gray-200 rounded-lg flex justify-center items-center'>
                <img src={notifications} alt="notification icon" className='w-5 h-5 object-cover' />
            </button>
            <div>
                <img src={admin} alt="Admin Profile Picture" className='w-10 h-10 object-cover rounded-full'/>
            </div>
            <p className='font-montserrat text-base'>Hi, <span className='font-bold'>Admin</span></p>
        </div>
    </header>
  )
}

export default Header