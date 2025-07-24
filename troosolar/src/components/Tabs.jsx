import React, { useState } from 'react';

const Tabs = ({ options = [], onChange, active }) => {
  return (
    <div className="flex border border-gray-300 p-1 rounded-full gap-1.5">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`text-xxs px-3.5 py-2 rounded-full transition-all duration-200 cursor-pointer
            ${
              active === option
                ? 'bg-primary text-white hover:bg-primary-dark transition-all duration-200 ease-in-out'
                : 'bg-transparent hover:bg-gray-200 transition-all duration-200 ease-in-out'
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
