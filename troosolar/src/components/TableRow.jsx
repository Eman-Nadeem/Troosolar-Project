import React from 'react';
import Checkbox from '../components/CheckBox';
import UserMgtActions from './UserMgtActions';

const TableRow = ({ data, columns, isSelected, onToggleSelect, onAction }) => {
  return (
    <tr className="odd:bg-gray-100 text-sm">
      <td className="p-4">
        <Checkbox
          id={`select-${data.id}`}
          checked={isSelected}
          onChange={() => onToggleSelect(data.id)}
        />
      </td>

      {columns.filter((col) => col.key).map((col, idx) => (
        <td key={idx} className="p-4">
          {data[col.key]}
        </td>
      ))}

      <td className="p-4 flex items-center gap-2">
        <UserMgtActions onAction={onAction} data={data} />
      </td>
    </tr>
  );
};

export default TableRow;
