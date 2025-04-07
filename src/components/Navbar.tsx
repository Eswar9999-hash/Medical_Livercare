import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Activity, Home, FileText, Info, Phone, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const patientId = sessionStorage.getItem('patientId');

  const handleLogout = () => {
    sessionStorage.removeItem('patientId');
    navigate('/');
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <Activity className="h-8 w-8 text-blue-600 group-hover:animate-float" />
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
              LiverCare AI
            </span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Home" isActive={isActive('/')} />
            <NavLink 
              to="/risk-assessment" 
              icon={<Activity className="h-5 w-5" />} 
              text="Risk Assessment" 
              isActive={isActive('/risk-assessment')}
            />
            {patientId ? (
              <>
                <NavLink 
                  to="/patient-details" 
                  icon={<FileText className="h-5 w-5" />} 
                  text="Patient Records" 
                  isActive={isActive('/patient-details')}
                />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200 nav-link"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <NavLink 
                to="/login" 
                icon={<LogIn className="h-5 w-5" />} 
                text="Login" 
                isActive={isActive('/login')}
              />
            )}
            <NavLink 
              to="/about" 
              icon={<Info className="h-5 w-5" />} 
              text="About" 
              isActive={isActive('/about')}
            />
            <NavLink 
              to="/contact" 
              icon={<Phone className="h-5 w-5" />} 
              text="Contact" 
              isActive={isActive('/contact')}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="px-4 py-2 space-y-2">
            <MobileNavLink 
              to="/" 
              icon={<Home className="h-5 w-5" />} 
              text="Home" 
              isActive={isActive('/')}
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink 
              to="/risk-assessment" 
              icon={<Activity className="h-5 w-5" />} 
              text="Risk Assessment" 
              isActive={isActive('/risk-assessment')}
              onClick={() => setIsMenuOpen(false)}
            />
            {patientId ? (
              <>
                <MobileNavLink 
                  to="/patient-details" 
                  icon={<FileText className="h-5 w-5" />} 
                  text="Patient Records" 
                  isActive={isActive('/patient-details')}
                  onClick={() => setIsMenuOpen(false)}
                />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <MobileNavLink 
                to="/login" 
                icon={<LogIn className="h-5 w-5" />} 
                text="Login" 
                isActive={isActive('/login')}
                onClick={() => setIsMenuOpen(false)}
              />
            )}
            <MobileNavLink 
              to="/about" 
              icon={<Info className="h-5 w-5" />} 
              text="About" 
              isActive={isActive('/about')}
              onClick={() => setIsMenuOpen(false)}
            />
            <MobileNavLink 
              to="/contact" 
              icon={<Phone className="h-5 w-5" />} 
              text="Contact" 
              isActive={isActive('/contact')}
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, isActive }: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 nav-link ${
      isActive 
        ? 'text-blue-600' 
        : 'text-gray-600 hover:text-blue-600'
    } transition-colors duration-200`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, text, isActive, onClick }: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
      isActive 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;