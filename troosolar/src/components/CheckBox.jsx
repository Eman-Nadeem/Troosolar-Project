import React from 'react';

const Checkbox = ({ id, checked, onChange }) => {
  return (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3 h-3 accent-primary border-gray-300 rounded"
      />
    </label>
  );
};

export default Checkbox;
