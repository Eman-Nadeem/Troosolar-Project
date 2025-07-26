import React from 'react'
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';

const AllAdminTab = ({data, onSelectAdmin, setViewDetails}) => {

    const tableHeader = [
    {
        key: 'name',
        label: 'Name',
        render: (_, row) => `${row.firstName} ${row.lastName}`,
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'role',
        label: 'Role',
    },
    {
        key: 'bvn',
        label: 'BVN',
    },
    {
        key: 'dateJoined',
        label: 'Date Joined',
        render: (val) =>
        new Date(val).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        }).replace(',', ' /'),
    },
    {
        key: 'action',
        label: 'Action',
        render: (_, row) => (
        <div className="flex justify-center">
            <button
            className="cursor-pointer bg-primary text-white px-5 py-3 rounded-full text-xxs"
            onClick={() => {
                onSelectAdmin(row);
                setViewDetails(true);
            }}
            >
            View Details
            </button>
        </div>
        ),
    },
    ];

    const handleViewDetails = (row) => {
        onSelectAdmin(row);
        
    };

  return (
    <div className='rounded-lg shadow-md font-montserrat text-sm'>
        <table className="min-w-full table-auto border-collapse">
            <TableHeader columns={tableHeader}/>
            <tbody>
                <TableRow columns={tableHeader} data={data}/>
            </tbody>
        </table>
    </div>
  )
}

export default AllAdminTab