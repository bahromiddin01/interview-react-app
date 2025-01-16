import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookingProvider } from './context/BookingContext';
import { UserProvider } from './context/UserContext';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import MentorPage from './pages/MentorPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {

  return (
    <>
      <BookingProvider>
        <UserProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/login' element={<LogInPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/history' element={<HistoryPage />} />
              <Route path='/mentor' element={<MentorPage />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            closeButton={false}
            limit={1}
          />
        </UserProvider>
      </BookingProvider>
    </>
  );
}
