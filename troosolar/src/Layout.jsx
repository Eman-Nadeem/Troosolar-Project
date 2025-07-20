import React from 'react'
import SideBar from './components/SideBar'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <Header/>
      <main className='bg-secondary w-full pt-24 pb-8 px-6'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout