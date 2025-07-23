import React , { useState, useRef, useEffect } from 'react'
import closeButton from '../../assets/icons/close-button.svg'
import Meter from '../../components/Meter'
import rightArrow from '../../assets/icons/right-arrow.svg'

const bankOptions = ['Access Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Fidelity Bank']
const CreditScoreModal = ({ isOpen, onClose, user }) => {
  const [selectedBank, setSelectedBank] = useState(user?.bankName || 'Access Bank')
  const [showBankOptions, setShowBankOptions] = useState(false)

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowBankOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen || !user) return null

  return (
    <div className="font-montserrat fixed inset-0 pr-5 z-50 bg-black/50 flex items-center justify-end">
      <div className="bg-white w-full max-w-lg pt-3 pb-5 rounded-lg shadow-lg relative">
        <div className='flex justify-between items-center px-6 mb-3'>
            <p className="text-lg">
              Credit Check - {user.name}
            </p>
            
            <button onClick={onClose} className="cursor-pointer">
              <img src={closeButton} alt="Close Button" className="w-6 h-6 object-cover" />
            </button>
        </div>

        <hr className='text-gray-400 mb-4'/>

        {/* Credit score meter (static image for now) */}
        <div className="w-full flex justify-center mb-4 px-6">
          <Meter/>
        </div>

        {/* Account Info */}
        <div className="flex flex-col gap-2 px-6 text-xs">
          <div className='flex flex-col gap-2'>
            <label>Account Number</label>
            <input
              type="text"
              value="002334593934"
              disabled
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
            <label>Bank Name</label>
            <button
              onClick={() => setShowBankOptions(prev => !prev)}
              className="cursor-pointer relative border border-gray-300 gap-2 text-xs bg-white px-4 py-3 rounded-md flex items-center justify-between "
            >
              {selectedBank}
              <img src={rightArrow} alt="Right arrow" className="w-3 h-3 object-contain" />
            </button>

            {/* ✅ Inline Options */}
            {showBankOptions && (
              <div className="absolute top-full mt-1 w-full h-20 overflow-y-auto bg-white border border-gray-300 shadow rounded z-20">
                {bankOptions.map((bank) => (
                  <div
                    key={bank}
                    onClick={() => {
                      setSelectedBank(bank)
                      setShowBankOptions(false)
                    }}
                    className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 text-xs cursor-pointer"
                  >
                    {bank}
                  </div>
                ))}
              </div>
            )}
          </div>


          <div className='flex flex-col gap-2'>
            <label>Account Name</label>
            <input
              type="text"
              value={user.name}
              disabled
              className="w-full border px-3 py-3 rounded border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditScoreModal
