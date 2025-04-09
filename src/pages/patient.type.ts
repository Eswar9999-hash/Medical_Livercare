export interface Patient {
    id: string;
    Age: number;
    Gender: "Male" | "Female";
    Cause_of_Cirrhosis: string;
    Liver_Function_Score: string; 
    Albumin_Level: number;
    Bilirubin_Level: number;
    Platelet_Count: number;
    Ascites: "Yes" | "No";
    Hepatic_Encephalopathy: "Yes" | "No";
    Survival_1_Year: "Yes" | "No";
    password: number;
  }
  