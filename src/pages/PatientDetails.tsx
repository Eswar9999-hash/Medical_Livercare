import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Patient } from './patient.type';

const PatientDetails = () => {
  const navigate = useNavigate();
  const [searchError, setSearchError] = useState(false);
  const [patientData, setPatientData] = useState<null | {
    id: string;
    name: string;
    age: number;
    Gender: string;
    Cause_of_Cirrhosis: string;
    Liver_Function_Score: number;
    Albumin_Level: number;
    Bilirubin_Level: number;
    Platelet_Count: number;
    Ascites: string;
    Hepatic_Encephalopathy: string;
    Survival_1_Year: string;
    lastAssessment: string;
    riskScore: number;
  }>(null);

  useEffect(() => {
    const patientId = sessionStorage.getItem('patientId');
    if (!patientId) {
      navigate('/login');
      return;
    }
    fetch(`http://localhost:3001/liverData?Patient_ID=${patient_Id}`)
      .then((res) => res.json())
      .then((data: Patient) => {
        console.log(data)
        setPatientData({
          id: data.id,
          name: data.Name,
          age: data.Age,
          Gender: data.Gender,
          Cause_of_Cirrhosis: data.Cause_of_Cirrhosis,
          Liver_Function_Score: data.Liver_Function_Score,
          Albumin_Level: data.Albumin_Level,
          Bilirubin_Level: data.Bilirubin_Level,
          Platelet_Count: data.Platelet_Count,
          Ascites: data.Ascites,
          Hepatic_Encephalopathy: data.Hepatic_Encephalopathy,
          Survival_1_Year: data.Survival_1_Year,
          lastAssessment:data.Report_Date,
          riskScore: 0.35,
        });
      })
      .catch((err) => console.log(err));
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

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Patient Information</h2>
          <FileText className="h-6 w-6 text-gray-500" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <InfoField label="Patient ID" value={patientData.id} />
          <InfoField label="Name" value={patientData.name} />
          <InfoField label="Age" value={patientData.age.toString()} />
          <InfoField label="Gender" value={patientData.Gender} />
          <InfoField label="Cause of Cirrhosis" value={patientData.Cause_of_Cirrhosis} />
          <InfoField label="Liver Function Score" value={String(patientData.Liver_Function_Score)} />
          <InfoField label="Albumin Level" value={String(patientData.Albumin_Level)} />
          <InfoField label="Bilirubin Level" value={String(patientData.Bilirubin_Level)} />
          <InfoField label="Platelet Count" value={String(patientData.Platelet_Count)} />
          <InfoField label="Ascites" value={patientData.Ascites} />
          <InfoField label="Hepatic Encephalopathy" value={patientData.Hepatic_Encephalopathy} />
          <InfoField label="Survival 1 Year" value={patientData.Survival_1_Year} />
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
