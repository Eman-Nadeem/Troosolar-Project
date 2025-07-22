import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../assets/icons/down-arrow.svg';


const DropDown = ({ options=[], onSelect=() => {}, title='Select', value }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value ||title);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="border border-gray-400 gap-2 text-xs bg-white px-4 py-2 rounded-md flex items-center justify-between cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
      >
        {selected}
        <img src={downArrow} alt="Down Arrow" className='w-3 h-3 object-contain'/>
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md z-10 ">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => handleSelect(opt)}
              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
