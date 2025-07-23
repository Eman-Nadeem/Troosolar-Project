import React , { useState } from 'react'
import totalUsers from '../../assets/icons/card-total-users.svg';
import StatCard from '../../components/StatCard'
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import LoansMgtModal from './LoansMgtModal';

const statCard=[
    {
        title:'Total Loans',
        icon:totalUsers,
        value:30,
    },
    {
        title:'Loans Sent',
        icon:totalUsers,
        value:20,
    },
    {
        title:'Loans Approved',
        icon:totalUsers,
        value:15,
    },
];

const LoansMgt = () => {
    const [searchInput, setSearchInput] = useState('');
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

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
    {
        key: 'Amount',
        label: 'Amount',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'date',
        label: 'Date',
        render: (val) => new Date(val).toLocaleDateString(),
    },
    {
        key: 'sendStatus',
        label: 'Send Status',
        render: (val) => (
        <span
            className={`px-2 py-1 rounded-full text-xxs font-medium ${
            val ? 'bg-green-100 text-green-600 border border-green-600' : 'bg-amber-100 text-amber-500 border border-amber-500'
            }`}
        >
            <span className={`inline-block w-2 h-2 rounded-full mr-1 ${val ? 'bg-green-600' : 'bg-amber-500'}`}></span>
            {val ? 'Completed' : 'Pending'}
        </span>
        ),
    },
    {
        key: 'approval',
        label: 'Approval',
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
            Rejected: {
                bg: 'bg-red-100',
                text: 'text-red-600',
                dot: 'bg-red-600',
            },
            };

            const status = statusStyles[val] || {};
        return (
            <span className={`px-2 py-1 rounded-full text-xxs font-medium inline-flex items-center gap-1 border ${status.text} ${status.bg} border-current`}>
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
        <div className="flex justify-center">
            <button
            className="cursor-pointer bg-primary text-white px-5 py-3 rounded-full text-xxs"
            onClick={() => handleViewDetails(row)}
            >
            View Details
            </button>
        </div>
        ),
    },
    ];


    const tableData = [
        {
            name: "Adewale Faizah",
            Amount: 200000,
            date: "2025-07-22T07:22:00",
            sendStatus: false,
            approval: 'Pending',
        },
        {
            name: "John Adam",
            Amount: 150000,
            date: "2025-07-22T07:22:00",
            sendStatus: true,
            approval: 'Completed',
        },
        {
            name: "Chris Banner",
            Amount: 300000,
            date: "2025-07-22T07:22:00",
            sendStatus: false,
            approval: 'Rejected',
        },
        {
            name: "Adam Waa",
            Amount: 250000,
            date: "2025-07-22T07:22:00",
            sendStatus: true,
            approval: 'Pending',
        },
        {
            name: "Anita Shawn",
            Amount: 250000,
            date: "2025-07-22T07:22:00",
            sendStatus: true,
            approval: 'Pending',
        },
        {
            name: "Faiz Kalil",
            Amount: 300000,
            date: "2025-07-22T07:22:00",
            sendStatus: false,
            approval: 'Completed',
        },
    ];

    const handleSave = (user, data) => {
        console.log('Saving data for user:', user.name);
        console.log('Form data:', data);

        // TODO: Send to backend API or update global state
        // e.g., axios.post('/api/loans/update', { userId: user.id, ...data })

        // Close modal after saving
        closeModal();
    };


  return (
    <div className='font-montserrat'>
        <div className='mb-5'>
            <p className='mb-5 font-semibold text-2xl'>Loans Management</p>
            <div className='grid grid-cols-3 gap-5'>
            {statCard.map((stat, index)=>(<StatCard key={index} title={stat.title} icon={stat.icon} value={stat.value} color={stat.color}/>))}
            </div>
        </div>

        {/* Searching and Sorting section  */}
        <div className='mb-5'>
            <p className='text-lg mb-5'>Loans Summary</p>
            <div className='flex justify-between'>
            <div className='flex gap-5'>
                <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='More Actions'/>
                <DropDown options={['Pending', 'Completed']} onSelect={(opt) => console.log('Sort By:', opt)} title='Sort By'/>
                <DropDown options={['Pending', 'Completed', 'Rejected']} onSelect={(opt) => console.log('Sort By:', opt)} title='Approval Status'/>
            </div>

            <div className='flex gap-5 mb-3.5'>
                <SearchBar onChange={handleInputChange} value={searchInput}/>
            </div>
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

        <LoansMgtModal
            isOpen={isModalOpen}
            onClose={closeModal}
            user={selectedUser}
            onSave={handleSave}
        />

    </div>
  )
}

export default LoansMgt