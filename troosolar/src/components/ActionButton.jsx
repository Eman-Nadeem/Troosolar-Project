import React, { useState, useRef, useEffect } from 'react';
import dots from '../assets/icons/dots.svg';

const ActionsButton = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const options = [
    'View transaction details',
    'View order details',
    'View customer details',
    'View loan details',
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button onClick={() => setOpen(!open)} className="cursor-pointer p-2 border border-gray-300 rounded-md">
        <img src={dots} alt="actions" className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-300 shadow-lg rounded-lg z-[60]">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setOpen(false);
                onSelect(option);
              }}
              className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionsButton;