import React, { useState, useEffect, useRef } from 'react';
import downArrow from '../../assets/icons/down-arrow.svg';

const relationshipOptions = [
  'Parent',
  'Sibling',
  'Spouse',
  'Child',
  'Relative',
  'Friend',
  'Partner',
  'Guardian',
  'Colleague',
  'Other',
];

const BeneficiaryTab = ({ formData, setFormData }) => {
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
      {/* Beneficiary Name */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Beneficiary Name</label>
        <input
          type="text"
          value={formData.beneficiaryName || ''}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, beneficiaryName: e.target.value }))
          }
          placeholder="Enter beneficiary name"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>

      {/* Relationship Dropdown */}
      <div className="flex flex-col gap-2" ref={dropdownRef}>
        <label className="text-xs font-medium">Select Relationship</label>
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-xs w-full text-left border border-gray-300 py-3 px-4 rounded-md flex items-center justify-between text-gray-500"
          >
            {formData.relationship || 'Select Relationship'}
            <img src={downArrow} alt="Down arrow" className="w-3 h-3 object-contain" />
          </button>

          {showOptions && (
            <div className="absolute top-full mt-1 w-full h-40 overflow-y-auto bg-white border border-gray-300 shadow rounded z-10">
              {relationshipOptions.map((relation) => (
                <div
                  key={relation}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, relationship: relation }));
                    setShowOptions(false);
                  }}
                  className="border-b border-gray-300 px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                >
                  {relation}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Beneficiary Email</label>
        <input
          type="email"
          value={formData.beneficiaryEmail || ''}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, beneficiaryEmail: e.target.value }))
          }
          placeholder="Enter beneficiary email"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-2">
        <label className="text-xs">Beneficiary Phone Number</label>
        <input
          type="text"
          value={formData.beneficiaryPhone || ''}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, beneficiaryPhone: e.target.value }))
          }
          placeholder="Enter beneficiary phone number"
          className="w-full border px-3 py-3 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light text-xs"
        />
      </div>
    </div>
  );
};

export default BeneficiaryTab;
