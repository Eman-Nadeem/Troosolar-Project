import React from 'react'
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';

const tableHeader = [
  {
    key: 'activity',
    label: 'Activity',
  },
  {
    key: 'date',
    label: 'Date',
    render: (val) =>
      new Date(val).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).replace(',', ' -'),
  },
];


const ActivityTab = ({selectedAdmin}) => {
    if (!selectedAdmin || !selectedAdmin.activity) return <p className='text-center text-sm text-gray-500'>No activity data available.</p>;

  return (
    <div className='rounded-lg shadow-md font-montserrat text-sm'>
        <table className="min-w-full table-auto border-collapse">
            <TableHeader columns={tableHeader}/>
            <tbody>
                <TableRow columns={tableHeader} data={selectedAdmin.activity}/>
            </tbody>
        </table>
    </div>
)
}

export default ActivityTab