import React , { useState, useEffect } from 'react'
import AdminProfileCard from '../../components/AdminProfileCard';
import Tabs from '../../components/Tabs';
import DropDown from '../../components/DropDown';
import ActivityTab from './ActivityTab';
import AllAdminTab from './AllAdminTab';
import SearchBar from '../../components/SearchBar';

const AdminTab = ({selectedAdmin, setSelectedAdmin, setViewDetail}) => {
    const [activeTab, setActiveTab] = useState('Activity');
    const [searchInput, setSearchInput] = useState('');

    const tableData = [
    {
        firstName: 'Adewale',
        lastName: 'Faizah',
        email: 'faizah.adewale@example.com',
        password: '************',
        role: 'Admin',
        bvn: '22345678901',
        dateJoined: '2025-07-05T07:22:00Z',
        activity: [
            { activity: 'User logged in', date: '2025-07-05T07:22:00Z' },
            { activity: 'Changed password', date: '2025-07-04T08:30:00Z' },
        ],
    },
    {
        firstName: 'Tunde',
        lastName: 'Bako',
        email: 'tunde.bako@example.com',
        password: '************',
        role: 'Support',
        bvn: '12345678901',
        dateJoined: '2025-06-15T09:45:00Z',
        activity: [
            { activity: 'Added new user', date: '2025-06-15T09:50:00Z' },
            { activity: 'Updated profile', date: '2025-06-14T10:15:00Z' },
        ],
    },
    {
        firstName: 'Chika',
        lastName: 'Okafor',
        email: 'chika.okafor@example.com',
        password: '************',
        role: 'Moderator',
        bvn: '32345678901',
        dateJoined: '2025-05-10T13:30:00Z',
        activity: [
            { activity: 'User logged out', date: '2025-05-11T18:00:00Z' },
            { activity: 'Reviewed KYC', date: '2025-05-10T14:00:00Z' },
        ],
    },
    {
        firstName: 'Joseph',
        lastName: 'Akande',
        email: 'joseph.akande@example.com',
        password: '************',
        role: 'Admin',
        bvn: '42345678901',
        dateJoined: '2025-07-01T11:15:00Z',
        activity: [
            { activity: 'Generated report', date: '2025-07-02T16:22:00Z' },
            { activity: 'Reset user password', date: '2025-07-01T12:10:00Z' },
        ],
    },
    ];

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    useEffect(() => {
    if (!selectedAdmin && tableData.length > 0) {
        setSelectedAdmin(tableData[0]);
    }
    }, []);


  return (
    <div>
        <AdminProfileCard user={selectedAdmin}/>

        <div className='flex flex-col gap-2.5 my-5'>
            <div className='w-fit'>
                <Tabs options={['Activity', 'All Admins']} active={activeTab} onChange={setActiveTab}/>
            </div>
            <div className='flex items-center justify-between'>
                <DropDown options={['Alphabetically', 'Date Registered', 'Active Users']} onSelect={(opt) => console.log('Sort By:', opt)} title='More Actions'/>
                {activeTab === 'All Admins' && <SearchBar onChange={handleInputChange} value={searchInput}/>}
            </div>
        </div>

        {activeTab === 'Activity' && <ActivityTab selectedAdmin={selectedAdmin}/>}
        {activeTab === 'All Admins' && <AllAdminTab data={tableData} onSelectAdmin={(admin)=>{setSelectedAdmin(admin); setActiveTab('Activity'); setViewDetail(true);}}/>}
    </div>
  )
}

export default AdminTab