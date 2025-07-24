import React from 'react'

const balanceCard=[
    {
        title:'Total Loan Balance',
        amount:'₦50,000,000',
        color: 'bg-primary'
    },
    {
        title:'Total Shopping Balance',
        amount:'₦50,000,000',
        color: 'bg-tertiary'
    }
]

const BalanceCards = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
        {balanceCard.map((card, index) => (
            <div 
                key={index} className={`rounded-lg ${card.color} text-white p-5`}>
                <p className='text-xs mb-8'>{card.title}</p>
                <p className='text-2xl font-bold'>{card.amount}</p>
                {index === 0 && (
                    <div className='flex flex-col items-end'>
                        <button className='bg-white text-primary text-xs mt-2 font-light px-3 py-2 rounded-full cursor-pointer'>
                            Fund Wallet
                        </button>
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}

export default BalanceCards