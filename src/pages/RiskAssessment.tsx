import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const RiskAssessment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    bilirubin: '',
    albumin: '',
    plateletCount: '',
    prothrombinTime: '',
    alcoholUse: '',
    familyHistory: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send the data to our AI model
    // For now, we'll simulate a response and redirect to the health report
    const patientId = Math.random().toString(36).substr(2, 9);
    navigate(`/health-report/${patientId}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Liver Cirrhosis Risk Assessment</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <div className="flex items-center">
          <AlertCircle className="h-5 w-5 text-yellow-400 mr-2" />
          <p className="text-sm text-yellow-700">
            Please provide accurate information for the most reliable results. All data is kept confidential.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
          />

          <FormField
            label="Gender"
            name="gender"
            type="select"
            value={formData.gender}
            onChange={handleInputChange}
            options={[
              { value: '', label: 'Select gender' },
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' }
            ]}
          />

          <FormField
            label="Total Bilirubin"
            name="bilirubin"
            type="number"
            value={formData.bilirubin}
            onChange={handleInputChange}
            placeholder="mg/dL"
          />

          <FormField
            label="Serum Albumin"
            name="albumin"
            type="number"
            value={formData.albumin}
            onChange={handleInputChange}
            placeholder="g/dL"
          />

          <FormField
            label="Platelet Count"
            name="plateletCount"
            type="number"
            value={formData.plateletCount}
            onChange={handleInputChange}
            placeholder="×10³/µL"
          />

          <FormField
            label="Prothrombin Time"
            name="prothrombinTime"
            type="number"
            value={formData.prothrombinTime}
            onChange={handleInputChange}
            placeholder="seconds"
          />
        </div>

        <div className="space-y-4">
          <FormField
            label="Alcohol Consumption"
            name="alcoholUse"
            type="select"
            value={formData.alcoholUse}
            onChange={handleInputChange}
            options={[
              { value: '', label: 'Select option' },
              { value: 'none', label: 'None' },
              { value: 'occasional', label: 'Occasional' },
              { value: 'moderate', label: 'Moderate' },
              { value: 'heavy', label: 'Heavy' }
            ]}
          />

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="familyHistory"
              name="familyHistory"
              checked={formData.familyHistory}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label htmlFor="familyHistory" className="text-gray-700">
              Family history of liver disease
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          Generate Risk Assessment
        </button>
      </form>
    </div>
  );
};

const FormField = ({ label, name, type, value, onChange, placeholder, options }: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {type === 'select' ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options?.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    )}
  </div>
);

export default RiskAssessment;