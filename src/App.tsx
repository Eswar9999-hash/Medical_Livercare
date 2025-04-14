import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RiskAssessment from './pages/RiskAssessment';
import PatientDetails from './pages/PatientDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import HealthReport from './pages/HealthReport';
import Login from './pages/Login';
import PageTransition from './components/ui/PageTransition';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow container-custom">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/login" element={
                <PageTransition>
                  <Login />
                </PageTransition>
              } />
              <Route path="/risk-assessment" element={
                <PageTransition>
                  <RiskAssessment />
                </PageTransition>
              } />
              <Route path="/patient-details" element={
                <PageTransition>
                  <PatientDetails />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
              <Route path="/health-report/:id" element={
                <PageTransition>
                  <HealthReport />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;