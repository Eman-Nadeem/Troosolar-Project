import React , { useState } from 'react'
import StatCard from '../../components/StatCard';
import totalUsers from '../../assets/icons/card-total-users.svg';
import Tabs from '../../components/Tabs';
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import ActionsButton from '../../components/ActionButton';
import TransactionsModal from './TransactionsModal';

const statCard=[
    {
        title:'Total Loans',
        icon:totalUsers,
        value:30,
    },
    {
        title:'Total Transactions',
        icon:totalUsers,
        value:5,
    },
    {
        title:'Transactions',
        icon:totalUsers,
        value: 'N2,000,000',
    },
];

const Transactions = () => {
    const [searchInput, setSearchInput] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (user, option) => {
        if(option === 'View transaction details') {
            setSelectedUser(user)
            setIsModalOpen(true)
        }
        if(option === 'View order details') {
            // Handle view order details logic
            console.log('View order details for:', user);
        }
        if(option === 'View customer details') {
            // Handle view customer details logic
            console.log('View customer details for:', user);
        }
        if(option === 'View loan details') {
            // Handle view loan details logic
            console.log('View loan details for:', user);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedUser(null)
    }

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const tableHeader = [
    { key: 'name', label: 'Name' },
    {
        key: 'amount',
        label: 'Amount',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'date',
        label: 'Date',
        render: (val) => new Date(val).toLocaleDateString(),
    },
    {
        key: 'transactionType',
        label: 'Type',
    },
    {
        key: 'txId',
        label: 'Tx ID',
    },
    {
        key: 'status',
        label: 'Status',
        render: (val) => {
        const statusStyles = {
            Pending: {
            bg: 'bg-amber-100',
            text: 'text-amber-500',
            dot: 'bg-amber-500',
            },
            Completed: {
            bg: 'bg-green-100',
            text: 'text-green-600',
            dot: 'bg-green-600',
            },
            Failed: {
            bg: 'bg-red-100',
            text: 'text-red-600',
            dot: 'bg-red-600',
            },
        };

        const status = statusStyles[val] || {};
        return (
            <span
            className={`px-2 py-1 rounded-full text-xxs font-medium inline-flex items-center gap-1 border ${status.text} ${status.bg} border-current`}
            >
            <span className={`inline-block w-2 h-2 rounded-full mr-1 ${status.dot}`}></span>
            {val}
            </span>
        );
        },
    },
    {
        key: 'action',
        label: 'Action',
        render: (_, row) => (
          <ActionsButton onSelect={(action) => handleAction(action, row,)}/>
        ),
    },
    ];


    const tableData = [
        {
            name: "Adewale Faizah",
            accountNumber: '1294933959',
            amount: 200000,
            date: "2025-07-22T07:22:00",
            bankName: 'Access Bank',
            transactionType: 'Deposit',
            txId: 'TX123456',
            status: 'Completed',
        },
        {
            name: "Shawn Simon",
            referralAccountName: "Qamardeen Malik",
            accountNumber: '1294933959',
            referralAccountNumber: '1294933959',
            amount: 200000,
            date: "2025-07-22T07:22:00",
            bankName: 'Access Bank',
            transactionType: 'Withdrawal',
            paymentType: 'Referral Bonus',
            txId: 'TX123456',
            status: 'Completed',
        },
        {
            name: "Chris Dale",
            accountNumber: '1294933959',
            amount: 200000,
            date: "2025-07-22T07:22:00",
            bankName: 'Access Bank',
            transactionType: 'Withdrawal',
            paymentType: 'Order (Part Payment)',
            txId: 'TX123456',
            status: 'Failed',
        },
        {
            name: "Chris Dale",
            accountNumber: '1294933959',
            amount: 200000,
            date: "2025-07-22T07:22:00",
            bankName: 'Access Bank',
            transactionType: 'Withdrawal',
            paymentType: 'Order (Part Payment)',
            txId: 'TX123456',
            status: 'Pending',
        },
    ];

    const handleAction = (action, row) => {
    switch (action) {
        case 'View transaction details':
        setSelectedUser(row);
        setIsModalOpen(true);
        break;
        case 'View order details':
        console.log('Viewing order details for:', row);
        break;
        case 'View customer details':
        console.log('Viewing customer details for:', row);
        break;
        case 'View loan details':
        console.log('Viewing loan details for:', row);
        break;
        default:
        break;
    }
    };


  return (
    <div className='font-montserrat'>
        {/* stat cards section  */}
        <div className='mb-5'>
            <p className='mb-5 font-semibold text-2xl'>Loans Management</p>
            <div className='grid grid-cols-3 gap-5'>
            {statCard.map((stat, index)=>(<StatCard key={index} title={stat.title} icon={stat.icon} value={stat.value} color={stat.color}/>))}
            </div>
        </div>

        {/* searching and sorting section  */}
        <div className='mb-5'>
            <p className='text-lg mb-5'>Transactions Summary</p>
            <div className='flex justify-between'>
            <div className='flex items-center gap-5'>
                <Tabs options={['All', 'Deposit', 'Withdrawals']} onChange={setActiveTab} active={activeTab}/>
                <DropDown options={['Pending', 'Completed', 'Rejected']} onSelect={(opt) => console.log('Sort By:', opt)} title='Approval Status'/>
            </div>

            <div className='flex gap-5 mb-3.5'>
                <SearchBar onChange={handleInputChange} value={searchInput}/>
            </div>
            </div>
        </div>

        {/* table section  */}
        <div className='rounded-lg shadow-md font-montserrat text-sm'>
            <table className="min-w-full table-auto border-collapse">
                <TableHeader columns={tableHeader}/>
                <tbody>
                    <TableRow columns={tableHeader} data={tableData}/>
                </tbody>
            </table>
        </div>

        <TransactionsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            user={selectedUser}
        />
    </div>
  )
}

export default Transactions