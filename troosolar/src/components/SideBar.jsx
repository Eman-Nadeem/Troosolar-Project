import React from 'react';
import dashboard from '../assets/icons/dashboard.svg';
import dashboardActive from '../assets/icons/dashboard-active.svg';
import userMgt from '../assets/icons/user-mgt.svg';
import userMgtActive from '../assets/icons/user-mgt-active.svg';
import creditScore from '../assets/icons/credit-score.svg';
import creditScoreActive from '../assets/icons/credit-score-active.svg';
import loansMgt from '../assets/icons/loans-mgt.svg';
import loansMgtActive from '../assets/icons/loans-mgt-active.svg';
import loansDisbursement from '../assets/icons/loans-disbursement.svg';
import loansDisbursementActive from '../assets/icons/loans-disbursement-active.svg';
import transactions from '../assets/icons/transactions.svg';
import transactionsActive from '../assets/icons/transactions-active.svg';
import balances from '../assets/icons/balances.svg';
import balancesActive from '../assets/icons/balances-active.svg';
import shopMgt from '../assets/icons/shop-mgt.svg';
import shopMgtActive from '../assets/icons/shop-mgt-active.svg';
import referralMgt from '../assets/icons/referral-mgt.svg';
import referralMgtActive from '../assets/icons/referral-mgt-active.svg';
import tickets from '../assets/icons/tickets.svg';
import ticketsActive from '../assets/icons/tickets-active.svg';
import analytics from '../assets/icons/analytics.svg';
import analyticsActive from '../assets/icons/analytics-active.svg';
import settings from '../assets/icons/settings.svg';
import settingsActive from '../assets/icons/settings-active.svg';
import logoutIcon from '../assets/icons/logout.svg';
import logo from '../assets/icons/troosolar-logo.svg';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavItem from './NavItem';
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const navItems = [
    { name: 'Dashboard', path: '/', icon: dashboard, active: currentPath === '/', iconActive: dashboardActive },
    { name: 'User Mgt', path: '/users-mgt', icon: userMgt, active: currentPath === '/users-mgt', iconActive: userMgtActive },
    { name: 'Credit Score', path: '/credit-score', icon: creditScore, active: currentPath === '/credit-score', iconActive: creditScoreActive },
    { name: 'Loans Mgt', path: '/loans-mgt', icon: loansMgt, active: currentPath === '/loans-mgt', iconActive: loansMgtActive },
    { name: 'Loans Disbursement', path: '/loans-disbursement', icon: loansDisbursement, active: currentPath === '/loans-disbursement', iconActive: loansDisbursementActive },
    { name: 'Transactions', path: '/transactions', icon: transactions, active: currentPath === '/transactions', iconActive: transactionsActive },
    { name: 'Balances', path: '/balances', icon: balances, active: currentPath === '/balances', iconActive: balancesActive },
    { name: 'Shop Mgt', path: '/shop-mgt', icon: shopMgt, active: currentPath === '/shop-mgt', iconActive: shopMgtActive },
    { name: 'Referral Mgt', path: '/referral-mgt', icon: referralMgt, active: currentPath === '/referral-mgt', iconActive: referralMgtActive },
    { name: 'Tickets', path: '/tickets', icon: tickets, active: currentPath === '/tickets', iconActive: ticketsActive },
    { name: 'Analytics', path: '/analytics', icon: analytics, active: currentPath === '/analytics', iconActive: analyticsActive },
    { name: 'Settings', path: '/settings', icon: settings, active: currentPath === '/settings', iconActive: settingsActive },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="w-60 bg-primary text-white flex flex-col min-h-screen h-full px-5">
      {/* Logo */}
      <div className="flex justify-center py-4">
        <img src={logo} alt="Troosolar Logo" className='w-50 h-10 object-cover'/>
      </div>

      <p className='text-xs mt-5'>General</p>
      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="flex flex-col items-center">
          {navItems.map((item) => (
            <li key={item.name} className="px-4">
                <NavItem name={item.name} path={item.path} icon={item.icon} active={item.active} iconActive={item.iconActive} />
            </li>
          ))}
        </ul>
      </nav>

      <hr className='text-white opacity-25 mt-3' />

      {/* Logout */}
      <div className="py-4 flex justify-center">
        <button
          onClick={handleLogout}
          className="cursor-pointer w-44 py-3 pl-5 flex items-center justify-start gap-2 text-white rounded-md hover:scale-105 transition-transform"
        >
          <img src={logoutIcon} alt="logout" className="w-5 h-5 object-cover" />
          <span className="font-satoshi text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;

