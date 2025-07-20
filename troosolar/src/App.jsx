import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Layout from './Layout'
import Login from './pages/login/Login'
import UserMgt from './pages/userMgt/UserMgt'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Login/>} />
        <Route element={<PrivateRoutes/>}>
          <Route element={<Layout/>}>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/users-mgt" element={<UserMgt/>} />
            <Route path="/credit-score" element={<h1>Credit Score</h1>} />
            <Route path="/loans-mgt" element={<h1>Loans Mgt</h1>} />
            <Route path="/loans-disbursement" element={<h1>Loans Disbursement</h1>} />
            <Route path="/transactions" element={<h1>transactions</h1>} />
            <Route path="/balances" element={<h1>Balance</h1>} />
            <Route path="/shop-mgt" element={<h1>Shop Mgt</h1>} />
            <Route path="/referral-mgt" element={<h1>Referral Mgt</h1>} />
            <Route path="/tickets" element={<h1>Tickets</h1>} />
            <Route path="/analytics" element={<h1>Analytics</h1>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App