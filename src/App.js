import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardPage from './pages/DashboardPage';
import DedicatedMentorPage from './pages/DedicatedMentorPage';
import HomePage from './pages/HomePage';
import InterviewsHistoryPage from './pages/InterviewsHistoryPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import { BookingProvider } from './context/BookingContext';
import { UserProvider } from './context/UserContext';

export default function App() {

  return (
    <>
      <UserProvider>
        <BookingProvider>
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/signup' element={<SignUpPage />} />
              <Route path='/login' element={<LogInPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/history' element={<InterviewsHistoryPage />} />
              <Route path='/mentor' element={<DedicatedMentorPage />} />
            </Routes>
          </BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            closeButton={false}
            limit={1}
          />
        </BookingProvider>
      </UserProvider>
    </>
  );
}
