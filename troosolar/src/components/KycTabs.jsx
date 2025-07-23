import React, { useState } from 'react';

const KycTabs = ({tabs, activeTab, setActiveTab}) => {


  return (
    <div className="font-montserrat border-b border-gray-300">
      <div className="flex space-x-6 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer relative pb-2 text-xs font-medium ${
              activeTab === tab
                ? 'text-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            {tab}

            {activeTab === tab && (
              <span className="absolute -bottom-[2px] left-0 h-1 w-full bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KycTabs;
