import React, { useState, useEffect, useRef } from 'react';
import downArrow from '../../assets/icons/down-arrow.svg';

const repaymentDurationOptions = [
  '1 Month',
  '3 Months',
  '6 Months',
  '9 Months',
  '12 Months',
  '18 Months',
  '24 Months',
  '36 Months',
];

const LoanDetailsTab = ({ formData, setFormData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-4 text-xs mb-6">
      {/* Loan Amount */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Loan Amount</label>
        <input
          type="text"
          value={formData.loanAmount || ''}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, loanAmount: e.target.value }))
          }
          placeholder="Enter loan amount"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>

      {/* Repayment Duration Dropdown */}
      <div className="flex flex-col gap-2" ref={dropdownRef}>
        <label className="text-xs font-medium">Repayment Duration</label>
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-xs w-full text-left border border-gray-300 py-3 px-4 rounded-md flex items-center justify-between text-gray-500"
          >
            {formData.repaymentDuration || 'Select Duration'}
            <img src={downArrow} alt="Down arrow" className="w-3 h-3 object-contain" />
          </button>

          {showOptions && (
            <div className="absolute top-full mt-1 w-full h-40 overflow-y-auto bg-white border border-gray-300 shadow rounded z-10">
              {repaymentDurationOptions.map((duration) => (
                <div
                  key={duration}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, repaymentDuration: duration }));
                    setShowOptions(false);
                  }}
                  className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                >
                  {duration}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsTab;
