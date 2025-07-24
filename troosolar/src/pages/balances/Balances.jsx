import React from 'react'
import BalanceCards from '../../components/BalanceCards'
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';

const Balances = () => {
    const [searchInput, setSearchInput] = React.useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
        console.log('Search Input:', e.target.value);
    };

    const tableHeader = [
    { key: 'name', label: 'Name' },
    {
        key: 'loanBalance',
        label: 'Loan Balance',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'mainBalance',
        label: 'Main Balance',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'totalTopup',
        label: 'Total Topup',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    {
        key: 'totalWithdrawal',
        label: 'Total Withdrawal',
        render: (val) => `₦${val.toLocaleString()}`,
    },
    ];

    const tableData = [
    {
        name: "Adewale Faizah",
        loanBalance: 50000,
        mainBalance: 150000,
        totalTopup: 200000,
        totalWithdrawal: 50000,
    },
    {
        name: "Chris Dale",
        loanBalance: 120000,
        mainBalance: 80000,
        totalTopup: 250000,
        totalWithdrawal: 170000,
    },
    {
        name: "Shawn Simon",
        loanBalance: 0,
        mainBalance: 220000,
        totalTopup: 300000,
        totalWithdrawal: 80000,
    },
    {
        name: "Anita Shawn",
        loanBalance: 45000,
        mainBalance: 50000,
        totalTopup: 120000,
        totalWithdrawal: 70000,
    },
    ];



  return (
    <div className='font-montserrat'>
        <p className='mb-5 font-semibold text-2xl'>Credit Score</p>
        <BalanceCards/>

        <div className='my-5 '>
            <p className='text-lg mb-5'>Balance Summary</p>
            <div className='flex justify-between'>
                <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='More Actions'/>
                <SearchBar onChange={handleInputChange} value={searchInput}/>
            </div>
        </div>

        <div className='rounded-lg shadow-md font-montserrat text-sm'>
            <table className="min-w-full table-auto border-collapse">
                <TableHeader columns={tableHeader}/>
                <tbody>
                    <TableRow columns={tableHeader} data={tableData}/>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Balances