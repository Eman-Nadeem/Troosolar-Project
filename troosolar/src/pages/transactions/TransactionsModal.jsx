import React , { useState, useRef, useEffect } from 'react'
import closeButton from '../../assets/icons/close-button.svg'
import tick from '../../assets/icons/tick.svg'

const TransactionsModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null

  return (
    <div className="font-montserrat fixed inset-0 pr-5 pt-5 z-50 bg-black/50 flex items-start justify-end">
      <div className="bg-white w-full max-w-lg pt-3 pb-5 rounded-lg shadow-lg relative">
        <div className='flex justify-between items-center px-6 mb-3'>
            <p className="text-lg">
              Transaction History
            </p>
            
            <button onClick={onClose} className="cursor-pointer">
              <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
            </button>
        </div>

        <hr className='text-gray-400 mb-4'/>

        {/* Account Info */}
        <div className="flex flex-col items-center justify-center px-4">
            <div className='bg-green-700 w-28 h-28 rounded-full flex items-center justify-center mb-3'>
                <img src={tick} alt="Tick" className='w-12 h-12 object-cover'/>
            </div>
            
            <p className='text-md mb-3 font-bold'>{user.transactionType} Successful</p>

            <div className='border border-gray-300 rounded-lg p-4 w-full text-xs'>
                <div className='flex justify-between items-center mb-2.5'>
                    <p className='text-gray-500'>Amount</p>
                    <p className='text-blue-900'>N{user.amount}</p>
                </div>

                <hr className='text-gray-300 mb-2.5'/>

                <div className='flex justify-between items-center mb-2'>
                    <p className='text-gray-500'>Payment Type</p>
                    <p className=''>
                        {user.transactionType === 'Deposit' && 'Wallet Deposit'}
                        {user.transactionType === 'Withdrawal' && (user.paymentType || '—')}
                    </p>
                </div>

                <hr className='text-gray-300 mb-2.5'/>

                <div className='flex justify-between items-center mb-2'>
                    <p className='text-gray-500'>Transaction ID</p>
                    <p className=''>{user.txId}</p>
                </div>

                <hr className='text-gray-300 mb-2.5'/>

                <div className='flex justify-between items-center'>
                    <p className='text-gray-500'>Date</p>
                    <p className=''>{user.date}</p>
                </div>

            </div>

            {user.paymentType==='Referral Bonus' && 
                <div className='border border-gray-300 rounded-lg p-4 w-full text-xs mt-2.5'>
                    <div className='flex justify-between items-center mb-2.5'>
                        <p className='text-gray-500'>Account Name</p>
                        <p className=''>{user.referralAccountName}</p>
                    </div>

                    <hr className='text-gray-300 mb-2.5'/>

                    <div className='flex justify-between items-center mb-2'>
                        <p className='text-gray-500'>Account Number</p>
                        <p className=''>{user.referralAccountNumber}</p>
                    </div>

                    <hr className='text-gray-300 mb-2.5'/>

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Bank Name</p>
                        <p className=''>{user.bankName}</p>
                    </div>
                </div>
            }
        </div>
      </div>
    </div>
  )
}

export default TransactionsModal
