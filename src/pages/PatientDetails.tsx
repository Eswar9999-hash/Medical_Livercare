import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, AlertCircle } from 'lucide-react';

const PatientDetails = () => {
  const navigate = useNavigate();
  const [searchError, setSearchError] = useState(false);
  const [patientData, setPatientData] = useState<null | {
    id: string;
    name: string;
    age: number;
    lastAssessment: string;
    riskScore: number;
  }>(null);

  useEffect(() => {
    const patientId = sessionStorage.getItem('patientId');
    if (!patientId) {
      navigate('/login');
      return;
    }

    // Simulate fetching patient data
    setPatientData({
      id: patientId,
      name: "John Doe",
      age: 45,
      lastAssessment: "2024-03-15",
      riskScore: 0.35
    });
  }, [navigate]);

  if (!patientData) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Patient Records</h1>

      {/* Patient Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Patient Information</h2>
          <FileText className="h-6 w-6 text-gray-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoField label="Patient ID" value={patientData.id} />
          <InfoField label="Name" value={patientData.name} />
          <InfoField label="Age" value={patientData.age.toString()} />
          <InfoField label="Last Assessment" value={patientData.lastAssessment} />
          <InfoField
            label="Risk Score"
            value={`${(patientData.riskScore * 100).toFixed(1)}%`}
            className={
              patientData.riskScore > 0.7
                ? 'text-red-600'
                : patientData.riskScore > 0.4
                ? 'text-yellow-600'
                : 'text-green-600'
            }
          />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate(`/health-report/${patientData.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

const InfoField = ({ label, value, className = '' }: { label: string; value: string; className?: string }) => (
  <div>
    <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
    <p className={`text-lg font-medium ${className}`}>{value}</p>
  </div>
);

export default PatientDetails;