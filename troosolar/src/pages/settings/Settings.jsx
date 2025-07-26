import React , { useState } from 'react'
import KycTabs from '../../components/KycTabs';
import AdminTab from './AdminTab';
import ToolsTab from './ToolsTabs';
import ProductTab from './ProductTab';
import NotificationsTab from './NotificationsTab';
import FinancingPartnerTab from './FinancingPartnerTab';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Admin');
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    const handleGoBack = () => {
        setActiveTab('Admin');
        setViewDetail(false);
    };

    const [viewDetail, setViewDetail] = useState(false);

  return (
    <div className='font-montserrat'>
        <div className='mb-5'>
            <p className={`${!viewDetail? 'mb-5': 'mb-1.5'} font-semibold text-2xl`}>{viewDetail ? `${selectedAdmin?.firstName} ${selectedAdmin?.lastName}` : 'Settings'}</p>
            {viewDetail && (<button onClick={handleGoBack} className='cursor-pointer underline text-primary text-xs mb-1.5'>Go Back</button>)}
            {!viewDetail && <KycTabs tabs={['Admin', 'Tools', 'Product', 'Financing Partner', 'Notifications']} activeTab={activeTab} setActiveTab={setActiveTab}/>}
        </div>

        {activeTab === 'Admin' && <AdminTab selectedAdmin={selectedAdmin} setSelectedAdmin={setSelectedAdmin} setViewDetail={setViewDetail}/>}
        {activeTab === 'Tools' && <ToolsTab/>}
        {activeTab === 'Product' && <ProductTab/>}
        {activeTab === 'Financing Partner' && <FinancingPartnerTab/>}
        {activeTab === 'Notifications' && <NotificationsTab/>}

        
    </div>
  )
}

export default Settings