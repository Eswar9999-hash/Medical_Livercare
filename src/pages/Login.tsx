import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle, Mail, UserPlus, LogIn } from 'lucide-react';
import { Patient } from './patient.type';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    patientId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        // Handle login
        if (formData.patientId && formData.password) {
          
          fetch(`http://localhost:3001/liverData/${formData.patientId}`)
          .then((res)=>res.json())
          .then((data:Patient)=>{
            if(String(data.password)===formData.password){
              navigate('/patient-details');
              sessionStorage.setItem('patientId',data.id);    
            }
          })
          .catch((err)=>console.log(err))

          
        } else {
          setError('Please fill in all fields');
        }
      } else {
        // Handle signup
        if (!formData.patientId || !formData.email || !formData.password || !formData.confirmPassword) {
          setError('Please fill in all fields');
          return;
        }
        
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }

        // Here you would typically create a new user account
        // For now, we'll simulate a successful signup
        sessionStorage.setItem('patientId', formData.patientId);
        navigate('/patient-details');
      }
    } catch (error) {
      setError(isLogin ? 'Invalid credentials' : 'Failed to create account');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      patientId: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Patient Login' : 'Create Account'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isLogin 
              ? 'Access your health records and assessments'
              : 'Join LiverCare AI to track your health'
            }
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID
            </label>
            <div className="relative">
              <input
                type="text"
                id="patientId"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your patient ID"
                required
              />
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {isLogin ? (
              <>
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </>
            ) : (
              <>
                <UserPlus className="h-5 w-5" />
                <span>Create Account</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={toggleForm}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        {isLogin && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              New to LiverCare AI?{' '}
              <button
                onClick={() => navigate('/risk-assessment')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Start Assessment
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;