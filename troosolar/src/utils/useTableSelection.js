import { useState } from 'react';

const useTableSelection = (data, idKey = 'id') => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((item) => item[idKey]));
    }
  };

  const isAllSelected = selectedRows.length === data.length;

  const isSelected = (id) => selectedRows.includes(id);

  return {
    selectedRows,
    toggleRow,
    toggleAll,
    isAllSelected,
    isSelected,
  };
};

export default useTableSelection;
