import React from 'react';
import { useLocation } from 'react-router-dom';

// Map titles to color names
const titleColorMap = {
  'Total Users': 'blue',
  'Total Loans': 'red',
  'Total Orders': 'purple',
  'Loans': 'green',
};

const colorMap = {
  blue: {
    bg: 'bg-blue-200',
    text: 'text-blue-600',
  },
  red: {
    bg: 'bg-red-200',
    text: 'text-red-600',
  },
  green: {
    bg: 'bg-green-200',
    text: 'text-green-600',
  },
  purple: {
    bg: 'bg-purple-200',
    text: 'text-purple-600',
  },
};

const StatCard = ({ title, icon, value }) => {
  //reusable stat card component has multi-color stat cards on the dashboard and blue color stat cards on all the other pages
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  const color = titleColorMap[title];
  const bgColor = isDashboard && colorMap[color]?.bg ? colorMap[color].bg : 'bg-blue-200';
  const textColor = isDashboard && colorMap[color]?.text ? colorMap[color].text : 'text-blue-600';

  return (
    <div className="flex gap-4 items-center bg-white px-5 py-4 shadow-md rounded-lg">
      <div className={`flex justify-center items-center w-16 h-16 rounded-full ${bgColor}`}>
        <img src={icon} alt={title} className="w-8 h-8 object-contain" />
      </div>
      <div>
        <p className={`text-sm ${textColor}`}>{title}</p>
        <p className={`text-lg font-semibold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
