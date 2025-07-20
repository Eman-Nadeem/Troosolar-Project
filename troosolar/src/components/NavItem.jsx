import React from 'react';
import { useNavigate } from 'react-router-dom';
import activeLine from '../assets/icons/active-button.svg';

const NavItem = ({ name, path, icon, active, iconActive }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className={`cursor-pointer w-48 py-3 pl-5 pr-0.5 flex items-center justify-between rounded-md transition-all hover:scale-105 duration-300 ease-in-out
        ${active
          ? 'bg-white text-primary'
          : 'text-white opacity-70'
        }`}
    >
      <div className='flex gap-2'>
        <img
          src={active ? iconActive : icon}
          alt={`${name} icon`}
          className='w-5 h-5 object-cover'
        />
        <span className="text-sm">{name}</span>
      </div>
      
      {active && <img src={activeLine} alt="active line"/>}
    </button>
  );
};

export default NavItem;
