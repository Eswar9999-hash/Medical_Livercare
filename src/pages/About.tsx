import React from 'react';
import { Brain, Shield, Database, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About LiverCare AI</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Revolutionizing liver health assessment through advanced artificial intelligence and medical expertise.
        </p>
      </section>

      {/* AI Model Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Brain className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Our AI Technology</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Our AI model is built on extensive medical research and trained on diverse, high-quality datasets. 
          It employs advanced machine learning algorithms to analyze multiple health parameters and predict 
          liver cirrhosis risk with high accuracy.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Model Accuracy</h3>
            <p className="text-gray-600">95% accuracy in risk prediction based on clinical validation studies</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Data Points</h3>
            <p className="text-gray-600">Analyzes 50+ health parameters for comprehensive assessment</p>
          </div>
        </div>
      </section>

      {/* Data Privacy Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Data Privacy & Security</h2>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            We prioritize the security and confidentiality of your health data. Our platform implements:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>End-to-end encryption for all data transmission</li>
            <li>Secure data storage compliant with healthcare standards</li>
            <li>Regular security audits and updates</li>
            <li>Strict access controls and user authentication</li>
          </ul>
        </div>
      </section>

      {/* Research & Validation Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-4 mb-6">
            <Database className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Research Base</h2>
          </div>
          <p className="text-gray-600">
            Our model is built on extensive research data from leading medical institutions 
            and validated through rigorous clinical trials.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          </div>
          <p className="text-gray-600">
            Approved by leading healthcare authorities and compliant with international 
            medical device standards.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          LiverCare AI is developed by a multidisciplinary team of medical professionals, 
          AI researchers, and healthcare technology experts committed to improving liver 
          health outcomes worldwide.
        </p>
      </section>
    </div>
  );
};

export default About;