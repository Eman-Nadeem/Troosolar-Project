import React , { useState } from 'react'
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import ReferralMgtModal from './ReferralMgtModal';

const ReferralMgt = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [commissionPercentage, setCommissionPercentage] = useState('');
    const [minimumWithdrawalAmount, setMinimumWithdrawalAmount] = useState('');
    
    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const tableHeader = [
    { key: 'name', label: 'Name' },
    {
        key: 'referralCount',
        label: 'No of Referral',
    },
    {
        key: 'amountEarned',
        label: 'Amount Earned',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'dateJoined',
        label: 'Date Joined',
        render: (val) => new Date(val).toLocaleDateString(),
    },
    ];

    const tableData = [
    {
        name: "Adewale Faizah",
        referralCount: 10,
        amountEarned: 25000,
        dateJoined: "2024-01-15T09:00:00Z",
    },
    {
        name: "Shawn Simon",
        referralCount: 5,
        amountEarned: 12000,
        dateJoined: "2023-11-03T12:30:00Z",
    },
    {
        name: "Chris Dale",
        referralCount: 8,
        amountEarned: 18000,
        dateJoined: "2024-03-10T14:45:00Z",
    },
    {
        name: "Janet Obi",
        referralCount: 3,
        amountEarned: 6000,
        dateJoined: "2024-06-01T08:15:00Z",
    },
    ];

    
  return (
    <div className='font-montserrat'>
        {/* Heading and settings button  */}
        <div className='flex justify-between items-center mb-5'>
            <p className='font-semibold text-2xl'>Referral</p>
            <button 
                className='bg-primary text-white text-xxs px-4 py-3 rounded-full hover:bg-primary-dark transition-all duration-200 ease-in-out cursor-pointer'
                onClick={() => setIsModalOpen(true)}
            >
                Referral Settings
            </button>
        </div>

        {/* Search and Sort  */}
        <div className='flex justify-between mb-5'>
            <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='Sort By'/>
            <SearchBar onChange={handleInputChange} value={searchInput}/>
        </div>

        {/* Referral Table  */}
        <div className='rounded-lg shadow-md font-montserrat text-sm'>
            <table className="min-w-full table-auto border-collapse">
                <TableHeader columns={tableHeader}/>
                <tbody>
                    <TableRow columns={tableHeader} data={tableData}/>
                </tbody>
            </table>
        </div>

        <ReferralMgtModal
            isOpen={isModalOpen}
            onClose={closeModal}
            commissionPercentage={commissionPercentage}
            setCommissionPercentage={setCommissionPercentage}
            minimumWithdrawalAmount={minimumWithdrawalAmount}
            setMinimumWithdrawalAmount={setMinimumWithdrawalAmount}
        />
    </div>
  )
}

export default ReferralMgt