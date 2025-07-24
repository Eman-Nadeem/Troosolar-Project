import React , { useState, useRef, useEffect } from 'react'
import closeButton from '../../assets/icons/close-button.svg'
import percentage from '../../assets/icons/percentage.svg'
const ReferralMgtModal = ({ isOpen, onClose, commissionPercentage, minimumWithdrawalAmount, setCommissionPercentage, setMinimumWithdrawalAmount }) => {
  if (!isOpen) return null

  return (
    <div className="font-montserrat fixed inset-0 pr-5 pt-5 z-50 bg-black/50 flex items-start justify-end">
      <div className="bg-white w-full max-w-lg pt-3 pb-5 rounded-lg shadow-lg relative">
        <div className='flex justify-between items-center px-6 mb-3'>
            <p className="text-lg">
              Settings
            </p>
            
            <button onClick={onClose} className="cursor-pointer">
              <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
            </button>
        </div>

        <hr className='text-gray-400 mb-4'/>

        <div className="flex flex-col gap-2 px-6 text-xs">
          <div className='flex flex-col gap-2'>
            <label>Set Commission Percentage</label>
            <div className='relative'>
                <input
                  type="number"
                  value={commissionPercentage}
                  onChange={(e) => setCommissionPercentage(e.target.value)}
                  placeholder="Enter a number"
                  className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light no-spinners"
                />
                <div className='absolute top-3 right-3'><img src={percentage} alt="percentage" className='w-4 h-4 object-cover'/></div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label>Minimum Withdrawal Amount</label>
            <input
              type="number"
              value={minimumWithdrawalAmount}
              onChange={(e) => setMinimumWithdrawalAmount(e.target.value)}
              placeholder="Enter an amount"
              className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
          </div>
        </div>

        <div className='px-6 mt-5'>
            <button 
                onClick={onClose}
                className='w-full bg-primary text-white text-xs px-4 py-3 rounded-full hover:bg-primary-dark transition-all duration-200 ease-in-out cursor-pointer mt-5'
            >
                Save
            </button>
        </div>
      </div>
    </div>
  )
}

export default ReferralMgtModal
