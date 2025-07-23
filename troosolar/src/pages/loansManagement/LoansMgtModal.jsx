import React , { useState, useRef, useEffect } from 'react'
import closeButton from '../../assets/icons/close-button.svg'
import Meter from '../../components/Meter'
import rightArrow from '../../assets/icons/right-arrow.svg'
import KycTabs from '../../components/KycTabs'
import PersonalDetails from './PersonalDetails'
import CreditCheck from './CreditCheck'
import KycDetails from './KycDetails'

const bankOptions = ['Access Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Fidelity Bank']
const partnerOptions = [
  'Carbon Microfinance',
  'Renmoney',
  'FairMoney',
  'Branch International',
  'Aella Credit',
  'Lidya',
  'Page Financials',
  'Migo',
  'Credit Direct',
  'Zedvance',
];
const LoansMgtModal = ({ isOpen, onClose, user, onSave }) => {
    if (!isOpen || !user) return null
    const [activeTab, setActiveTab] = useState('Personal Details');

    const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    bvn: '',

    accountNumber: '',
    accountName: '',
    bankName: '',

    documentType: '',
    documentFile: null,

    beneficiaryName: '',
    relationship: '',
    beneficiaryEmail: '',
    beneficiaryPhone: '',

    loanAmount: '',
    repaymentDuration: '',

    partner: '',
  });

  const [showPartnerOptions, setShowPartnerOptions] = useState(false);
  const [sendToPartner, setSendToPartner] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setShowPartnerOptions(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  
  return (
    <div className="font-montserrat fixed inset-0 pr-5 pt-1.5 z-50 bg-black/50 flex items-start justify-end">
      <div className={`flex flex-col justify-between bg-white w-full max-w-lg ${sendToPartner ? 'h-[230px]' : 'h-[580px]'} pt-3 pb-5 rounded-lg shadow-lg relative`}>
        <div>
          <div className='flex justify-between items-center px-6 mb-3'>
              <p className="text-lg">
                {sendToPartner? 'Send to Partner' : 'User Details'}
              </p>
          
              <div className='flex items-center gap-2'>
                  <button onClick={() => setSendToPartner(!sendToPartner)} className='cursor-pointer bg-primary text-white px-4 py-2 rounded-full text-xxs'>Send to Partner</button>
                  <button onClick={onClose} className="cursor-pointer">
                    <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
                  </button>
              </div>
          </div>
          <hr className='text-gray-400 mb-4'/>
          {/* Tabs */}
          {sendToPartner ? 
            (<div className='px-6'>
              <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                  <label className='text-xs'>Select Partner</label>
                  <button
                    onClick={() => setShowPartnerOptions(prev => !prev)}
                    className="cursor-pointer relative border border-gray-300 gap-2 text-xs bg-white px-4 py-3 rounded-md flex items-center justify-between"
                  >
                    {formData.partner || 'Select Partner'}
                    <img src={rightArrow} alt="Right arrow" className="w-3 h-3 object-contain" />
                  </button>
          
                  {showPartnerOptions && (
                    <div className="absolute top-full mt-1 w-full h-20 overflow-y-auto bg-white border border-gray-300 shadow rounded z-20">
                      {partnerOptions.map((partner) => (
                        <div
                          key={partner}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, partner: partner }));
                            setShowPartnerOptions(false);
                          }}
                          className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 text-xs cursor-pointer"
                        >
                          {partner}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            </div>)
            :
            (<div>
              <div className="px-4 mb-5">
                <KycTabs tabs={['Personal Details', 'Credit Check', 'KYC Details']} activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              {/* User info detail input */}
              {activeTab === 'Personal Details' && (<PersonalDetails formData={formData} setFormData={setFormData}/>)}
              {activeTab === 'Credit Check' && (<CreditCheck formData={formData} setFormData={setFormData}/>)}
              {activeTab === 'KYC Details' && (<KycDetails formData={formData} setFormData={setFormData}/>)}
            </div>)
            }
       </div>

        <div className='px-6 flex justify-center'>
            <button 
                className='w-full cursor-pointer bg-primary text-white px-4 py-2 rounded-full text-xs'
                onClick={() => {
                  if (user && onSave) {
                    onSave(user, formData);
                  }
                  onClose(); // close modal after saving
                }}
            >
                Save
            </button>
        </div>

      </div>
    </div>
  )
}

export default LoansMgtModal
