import React from 'react'

const TableRow = ({ data = [], columns = [] }) => {
  return (
    <>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="even:bg-gray-100">
          <td className="p-4">{rowIndex + 1}</td>
          {columns.map((col, colIndex) => (
            <td key={colIndex} className="p-4">
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}

export default TableRow
