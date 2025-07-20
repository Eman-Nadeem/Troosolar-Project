import React from 'react'
import StatCard from '../../components/StatCard'

const Dashboard = ({statCard}) => {
  return (
    <div className='font-montserrat'>
        {/* stat cards section */}
        <div className='mb-5'>
            <p className='mb-5 font-semibold text-2xl'>Dashboard</p>
            <div className='grid grid-cols-4 gap-5'>
                {statCard.map((stat, index)=>(<StatCard key={index} title={stat.title} icon={stat.icon} value={stat.value} color={stat.color}/>))}
            </div>
        </div>

        {/* charts and latest orders section */}
        <div className='mb-20'>charts and latest orders section - TODO</div>

        {/* Lastest Users section */}
        <div>lastest users section - TODO</div>
    </div>
  )
}

export default Dashboard