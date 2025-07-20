import React from 'react';
import Checkbox from '../components/CheckBox';

const TableHeader = ({ columns = [], allSelected = false, onToggleAll }) => {
  return (
    <thead className="bg-gray-200 text-left text-sm">
      <tr className=''>
        <th className="p-4 rounded-tl-lg">
          <Checkbox id="select-all" checked={allSelected} onChange={onToggleAll} />
        </th>
        {columns.map((col, idx) => (
          <th  
            key={idx}
            className={`p-4 font-medium ${
              idx === columns.length - 1 ? 'rounded-tr-lg' : ''
            }`}
          >
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
