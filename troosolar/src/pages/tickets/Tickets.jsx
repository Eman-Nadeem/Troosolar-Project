import React , { useState } from 'react'
import totalUsers from '../../assets/icons/card-total-users.svg';
import StatCard from '../../components/StatCard'
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import Tabs from '../../components/Tabs';
import TicketsModal from './TicketsModal';

const statCard=[
    {
        title:'Total Tickets',
        icon:totalUsers,
        value:30,
    },
    {
        title:'Pending',
        icon:totalUsers,
        value:5,
    },
    {
        title:'Unanswered',
        icon:totalUsers,
        value:28,
    },
];

const Tickets = () => {
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
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'ticketId',
        label: 'Ticket ID',
        render: (val) => `ID-${val}`,
    },
    {
        key: 'subject',
        label: 'Subject',
    },
    {
        key: 'date',
        label: 'Date',
        render: (val) => new Date(val).toLocaleDateString(),
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
            Answered: {
            bg: 'bg-green-100',
            text: 'text-green-600',
            dot: 'bg-green-600',
            },
            Closed: {
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
            <span className={`inline-block w-2 h-2 rounded-full mr-1 ${status.dot}`} />
            {val}
            </span>
        );
        },
    },
    {
        key: 'action',
        label: 'Action',
        render: (_, row) => (
        <button
            className="cursor-pointer bg-primary text-white px-4 py-2 rounded-full text-xxs"
            onClick={() => handleViewDetails(row)}
        >
            View Details
        </button>
        ),
    },
    ];

    const [tableData, setTableData] = useState([
    {
        name: "Amina Yusuf",
        ticketId: 123,
        subject: "Loan Issues",
        date: "2025-07-20T08:00:00Z",
        status: "Pending",
    },
    {
        name: "Tunde Bako",
        ticketId: 235,
        subject: "Account Locked",
        date: "2025-07-18T14:30:00Z",
        status: "Answered",
    },
    {
        name: "Chika Okafor",
        ticketId: 236,
        subject: "Withdrawal Delay",
        date: "2025-07-19T10:15:00Z",
        status: "Closed",
    },
    {
        name: "Joseph Akande",
        ticketId: 237,
        subject: "KYC Verification",
        date: "2025-07-17T11:45:00Z",
        status: "Pending",
    },
    ]);


    const handleStatusChange = (ticketId, newStatus) => {
    setTableData(prev =>
        prev.map(ticket =>
        ticket.ticketId === ticketId ? { ...ticket, status: newStatus } : ticket
        )
    );
    };

    const [activeTab, setActiveTab] = useState('All');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


  return (
    <div className='font-montserrat'>
        <div className='mb-5'>
            <p className='mb-5 font-semibold text-2xl'>Tickets</p>
            <div className='grid grid-cols-3 gap-5'>
            {statCard.map((stat, index)=>(<StatCard key={index} title={stat.title} icon={stat.icon} value={stat.value} color={stat.color}/>))}
            </div>
        </div>

        {/* Searching and Sorting section  */}
        <div className='mb-5'>
            <p className='text-lg mb-5'>Tickets Summary</p>
            <div className='flex justify-between'>
            <div className='flex gap-5'>
                <Tabs options={['All', 'Pending', 'Answered', 'Closed']} onChange={handleTabChange} active={activeTab}/>
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

        {/* Modal for viewing ticket details */}
        <TicketsModal
            isOpen={isModalOpen}
            onClose={closeModal}
            user={selectedUser}
            onStatusChange={handleStatusChange}
        />
    </div>
  )
}

export default Tickets