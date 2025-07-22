import React from 'react'

const TableHeader = ({ columns = [] }) => {
  return (
    <thead className="bg-gray-200 text-left text-sm">
      <tr>
        <th className="p-4 rounded-tl-lg">#</th>
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
  )
}

export default TableHeader
