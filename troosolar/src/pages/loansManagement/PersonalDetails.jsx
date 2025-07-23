import React from 'react'

const PersonalDetails = ({formData, setFormData}) => {
  return (
    <div className="flex flex-col gap-4 px-6 text-xs">
        <div className='flex flex-col gap-2'>
        <label className='text-xs'>First Name</label>
        <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
            placeholder='Enter your first name'
            className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
        </div>

        <div className='flex flex-col gap-2'>
        <label className='text-xs'>Surname</label>
        <input
            type="text"
            value={formData.surname}
            onChange={(e) => setFormData(prev => ({ ...prev, surname: e.target.value }))}
            placeholder='Enter your surname'
            className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
        </div>

        <div className='flex flex-col gap-2'>
        <label className='text-xs'>Email Address</label>
        <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder='Enter your email address'
            className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
        </div>

        <div className='flex flex-col gap-2'>
        <label className='text-xs'>Phone Number</label>
        <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
            placeholder='Enter your phone number'
            className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
        </div>

        <div className='flex flex-col gap-2'>
        <label className='text-xs'>BVN</label>
        <input
            type="text"
            value={formData.bvn}
            onChange={(e) => setFormData(prev => ({ ...prev, bvn: e.target.value }))}
            placeholder='BVN Number'
            className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
        </div>
    </div>
  )
}

export default PersonalDetails