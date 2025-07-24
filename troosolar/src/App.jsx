import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Layout from './Layout'
import Login from './pages/login/Login'
import UserMgt from './pages/userMgt/UserMgt'
import Dashboard from './pages/dashboard/Dashboard'
import statCard from './assets/data/statCardData'
import UserDetail from './pages/userMgt/UserDetail'
import CreditScore from './pages/creditScore/CreditScore'
import LoansMgt from './pages/loansManagement/LoansMgt'
import Transactions from './pages/transactions/Transactions'
import Balances from './pages/balances/Balances'
import ReferralMgt from './pages/referralMgt/ReferralMgt'
import Tickets from './pages/tickets/Tickets'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Login/>} />
        <Route element={<PrivateRoutes/>}>
          <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard statCard={statCard}/>} />
            <Route path="/users-mgt" element={<UserMgt/>} />
            <Route path="/credit-score" element={<CreditScore/>} />
            <Route path="/loans-mgt" element={<LoansMgt/>} />
            <Route path="/loans-disbursement" element={<h1>Loans Disbursement</h1>} />
            <Route path="/transactions" element={<Transactions/>} />
            <Route path="/balances" element={<Balances/>} />
            <Route path="/shop-mgt" element={<h1>Shop Mgt</h1>} />
            <Route path="/referral-mgt" element={<ReferralMgt/>} />
            <Route path="/tickets" element={<Tickets/>} />
            <Route path="/analytics" element={<h1>Analytics</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App