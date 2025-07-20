import React , { useState } from 'react'
import totalUsers from '../../assets/icons/card-total-users.svg';
import StatCard from '../../components/StatCard'
import DropDown from '../../components/DropDown';
import SearchBar from '../../components/SearchBar';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';
import userData from '../../assets/data/userData';
import useTableSelection from '../../utils/useTableSelection';
import { useNavigate } from 'react-router-dom';

const statCard=[
    {
        title:'Total Users',
        icon:totalUsers,
        value:100,
    },
    {
        title:'New Users',
        icon:totalUsers,
        value:100,
    },
    {
        title:'Users with loans',
        icon:totalUsers,
        value:20,
    },
];

const userColumns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'phone',
    label: 'Phone',
  },
  {
    key: 'bvn',
    label: 'BVN',
  },
  {
    key: 'dateRegistered',
    label: 'Date Registered',
  },
  {
    label: 'Actions',
  },
];

const UserMgt = () => {
  const navigate=useNavigate();
  const [searchInput, setSearchInput] = useState('');
  
  const {
    selectedRows,
    toggleRow,
    toggleAll,
    isAllSelected,
    isSelected,
  } = useTableSelection(userData);


  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className='font-montserrat'>
      {/* stat card section  */}
      <div className='mb-5'>
          <p className='mb-5 font-semibold text-2xl'>Users</p>
          <div className='grid grid-cols-3 gap-5'>
            {statCard.map((stat, index)=>(<StatCard key={index} title={stat.title} icon={stat.icon} value={stat.value} color={stat.color}/>))}
          </div>
      </div>

      {/* users filtering section  */}
      <div className='mb-5'>
        <p className='text-lg mb-5'>Users</p>
        <div className='flex justify-between'>
          <div className='flex gap-5'>
            <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='More Actions'/>
            <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='Sort By'/>
          </div>

          <div className='flex gap-5 mb-3.5'>
            <button className='bg-primary text-white px-4 py-2 rounded-full text-xs'>Add new user</button>
            <SearchBar onChange={handleInputChange} value={searchInput}/>
          </div>
        </div>
      </div>

      {/* users table section  */}
    <div className='rounded-lg shadow-md'>
      <table className="min-w-full table-auto border-collapse">
        <TableHeader columns={userColumns} allSelected={isAllSelected} onToggleAll={toggleAll} className='rounded-t-lg'/>
        <tbody>
          {userData.map((user) => (
            <TableRow
              key={user.id}
              data={user}
              columns={userColumns}
              isSelected={isSelected(user.id)}
              onToggleSelect={toggleRow}
              onAction={() => console.log('View: ', user)}
              onClick={navigate(`/users/${user.id}`)}
            />
          ))}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default UserMgt