import React, { useState, useRef, useEffect } from 'react';
import downArrow from '../../assets/icons/down-arrow.svg';
import uploadDocument from '../../assets/icons/upload-document.svg';

const documentTypes = ['ID Card', 'Utility Bill', 'Bank Statement'];

const DocumentsTab = ({ formData, setFormData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFormData(prev => ({ ...prev, documentFile: uploadedFile }));
  };

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFormData(prev => ({ ...prev, documentFile: uploadedFile }));
  };

  return (
    <div className="font-montserrat flex flex-col gap-6 text-sm text-gray-800">
      {/* Select Document Type */}
      <div className="flex flex-col gap-2" ref={dropdownRef}>
        <label className="text-xs font-medium">Select Document</label>
        <div className="relative">
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="text-xs w-full text-left border border-gray-300 py-3 px-4 rounded-md flex items-center justify-between text-gray-500"
          >
            {formData.documentType || 'Select Document'}
            <img src={downArrow} alt="Down arrow" className="w-3 h-3 object-contain" />
          </button>

          {showOptions && (
            <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 shadow rounded z-10">
              {documentTypes.map((doc) => (
                <div
                  key={doc}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, documentType: doc }));
                    setShowOptions(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs"
                >
                  {doc}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upload Document */}
      <div className="flex flex-col gap-2 mb-5">
        <label className="text-xs font-medium">Upload Document</label>
        <div
          className="relative w-full h-48 border border-gray-300 rounded-md flex flex-col justify-center items-center text-gray-400 cursor-pointer"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {formData.documentFile ? (
            <p className="text-sm text-gray-700">{formData.documentFile.name}</p>
          ) : (
            <>
              <img src={uploadDocument} alt="Upload Document" className="w-12 h-12 mb-2" />
              <p className="text-xs text-center">Select a clear copy of your document to upload</p>
            </>
          )}

          <input
            type="file"
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
