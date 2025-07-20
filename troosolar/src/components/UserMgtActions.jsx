import React, { useState, useRef, useEffect } from 'react';
import dots from '../assets/icons/dots.svg';

const UserMgtActions = ({ onAction, data }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    console.log(`${option} for user`, data);
    setOpen(false);
  };

  const options = ['View Loans', 'View Transactions', 'View Orders'];

  return (
    <div className="relative flex items-center gap-2" ref={menuRef}>
      {/* View Button */}
      <button
        className="bg-primary text-white text-xs px-4 py-1.5 rounded-full"
        onClick={() => onAction(data)}
      >
        View Details
      </button>

      {/* 3 Dots Toggle */}
      <button
        className="cursor-pointer w-9 h-9 border border-gray-200 rounded-lg flex justify-center items-center"
        onClick={() => setOpen(!open)}
      >
        <img src={dots} alt="More Options" className="w-5 h-5 object-cover" />
      </button>

      {/* Inline Dropdown Menu */}
      {open && (
        <div className="absolute top-12 right-0 w-40 bg-white border border-gray-200 shadow-md rounded-md z-20">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserMgtActions;
