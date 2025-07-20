import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavItem = ({ name, path, icon, active, iconActive }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`cursor-pointer w-44 py-3 pl-5 flex items-center justify-start gap-2 rounded-md transition-all hover:scale-105 duration-300 ease-in-out
        ${active
          ? 'bg-white text-primary'
          : 'text-white opacity-70'
        }`}
    >
      <img
        src={active ? iconActive : icon}
        alt={`${name} icon`}
        className='w-5 h-5 object-cover'
      />
      <span className="text-sm">{name}</span>
    </button>
  );
};

export default NavItem;
