export interface Patient {
  Patient_ID: number;
  Name: string;
  Age: number;
  Gender: 'Male' | 'Female' | 'Other';
  Cause_of_Cirrhosis: string;
  Liver_Function_Score: 'Child-Pugh A' | 'Child-Pugh B' | 'Child-Pugh C';
  Albumin_Level: number;
  Bilirubin_Level: number;
  Platelet_Count: number;
  Ascites: 'Yes' | 'No';
  Hepatic_Encephalopathy: 'Yes' | 'No';
  Survival_1_Year: 'Yes' | 'No';
  password: number | string;
  Report_Date: string; 
  riskScore:number;
  id: string;
}
