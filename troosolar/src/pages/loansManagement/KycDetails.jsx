import React , { useState } from 'react'
import Tabs from '../../components/Tabs';
import DocumentsTab from './DocumentsTab';
import BeneficiaryTab from './BeneficiaryTab';
import LoanDetailsTab from './LoanDetailsTab';

const KycDetails = ({formData, setFormData}) => {
    const [selectedTab, setSelectedTab] = useState('Documents');
  return (
    <div className='font-montserrat'>
      <div className='px-6 mb-4 w-fit'>
        <Tabs options={['Documents', 'Beneficiary', 'Loan Details']} onChange={setSelectedTab} active={selectedTab}/>
      </div>

      <div className='px-6'>
        {selectedTab === 'Documents' && <DocumentsTab formData={formData} setFormData={setFormData}/>}
        {selectedTab === 'Beneficiary' && <BeneficiaryTab formData={formData} setFormData={setFormData}/>}
        {selectedTab === 'Loan Details' && <LoanDetailsTab formData={formData} setFormData={setFormData}/>}
      </div>
    </div>
  )
}

export default KycDetails