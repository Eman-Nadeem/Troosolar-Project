import React from 'react'
import DropDown from '../../components/DropDown'
import SearchBar from '../../components/SearchBar'
import TableHeader from '../../components/Table/TableHeader'
import TableRow from '../../components/Table/TableRow'
import CreditScoreModal from './CreditScoreModal'
import { useState } from 'react'

const CreditScore = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (user) => {
   setSelectedUser(user)
   setIsModalOpen(true)
  }

  const closeModal = () => {
   setIsModalOpen(false)
   setSelectedUser(null)
  }

  const tableHeader = [
    { key: 'name', label: 'Name' },
    { key: 'creditScore', label: 'Credit Score', render: (val) => <p className={`font-bold text-base ${val < 50 ? 'text-red-600' : 'text-green-600'}`}>{val}%</p> },
    { key: 'loanLimit', label: 'Loan Limit', render: (val) => `₦${val.toLocaleString()}` },
    { key: 'date', label: 'Date', render: (val) => new Date(val).toLocaleDateString() },
    {
      key: 'action',
      label: 'Action',
      render: (_, row) => (
        <div className='flex justify-center'>
            <button
              className="cursor-pointer bg-primary text-white px-5 py-3 rounded-full text-xxs"
              onClick={() => handleViewDetails(row)}
            >
              View Details
            </button>
        </div>
      ),
    },
  ]

  const tableData = [
    {
      name: "Adewale Faizah",
      creditScore: 95,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "John Adam",
      creditScore: 45,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Chris Banner",
      creditScore: 95,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Adam Waa",
      creditScore: 23,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Adam Waa",
      creditScore: 50,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Anita Shawn",
      creditScore: 10,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Faiz Kalil",
      creditScore: 95,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Wande Moca",
      creditScore: 35,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
    {
      name: "Zainab Zee",
      creditScore: 95,
      loanLimit: 4000000,
      date: "2035-07-21T07:22:00",
    },
  ];
  
  return (
    <div className='font-montserrat'>
        {/* Heading  */}
        <p className='mb-5 font-semibold text-2xl'>Credit Score</p>

        {/* Sorting and Searching  */}
        <div className='flex justify-between mb-5'>
            <div className='flex gap-4'>
                <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='Sort By'/>
                <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='Date'/>
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>

        {/* Table  */}
        <div className='rounded-lg shadow-md font-montserrat text-sm'>
            <table className="min-w-full table-auto border-collapse">
                <TableHeader columns={tableHeader}/>
                <tbody>
                    <TableRow columns={tableHeader} data={tableData}/>
                </tbody>
            </table>
        </div>

        <CreditScoreModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
        />
    </div>
  )
}

export default CreditScore