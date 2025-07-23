import React, { useState, useRef, useEffect } from 'react';
import rightArrow from '../../assets/icons/right-arrow.svg';

const bankOptions = ['Access Bank', 'GTBank', 'Zenith Bank', 'UBA', 'Fidelity Bank'];

const CreditCheck = ({ formData, setFormData }) => {
  const [showBankOptions, setShowBankOptions] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowBankOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-4 px-6 text-xs mb-6">
      {/* Account Number */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Account Number</label>
        <input
          type="text"
          value={formData.accountNumber}
          onChange={(e) => setFormData(prev => ({ ...prev, accountNumber: e.target.value }))}
          placeholder="Enter your account number"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>

      {/* Bank Name Dropdown */}
      <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
        <label>Bank Name</label>
        <button
          onClick={() => setShowBankOptions(prev => !prev)}
          className="cursor-pointer relative border border-gray-300 gap-2 text-xs bg-white px-4 py-3 rounded-md flex items-center justify-between"
        >
          {formData.bankName || 'Select Bank'}
          <img src={rightArrow} alt="Right arrow" className="w-3 h-3 object-contain" />
        </button>

        {showBankOptions && (
          <div className="absolute top-full mt-1 w-full h-20 overflow-y-auto bg-white border border-gray-300 shadow rounded z-20">
            {bankOptions.map((bank) => (
              <div
                key={bank}
                onClick={() => {
                  setFormData(prev => ({ ...prev, bankName: bank }));
                  setShowBankOptions(false);
                }}
                className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 text-xs cursor-pointer"
              >
                {bank}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Account Name */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Account Name</label>
        <input
          type="text"
          value={formData.accountName}
          onChange={(e) => setFormData(prev => ({ ...prev, accountName: e.target.value }))}
          placeholder="Enter your account name"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>
    </div>
  );
};

export default CreditCheck;
