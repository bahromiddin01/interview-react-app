import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'
import DashboardPage from './pages/DashboardPage'
import InterviewsHistoryPage from './pages/InterviewsHistoryPage'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/home' element={<DashboardPage />} />
        <Route path='/history' element={<InterviewsHistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}
