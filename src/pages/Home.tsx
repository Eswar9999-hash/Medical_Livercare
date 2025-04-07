import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, Shield, Users, Brain, ChevronRight, Award, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Hepatologist",
      quote: "LiverCare AI has revolutionized how we assess liver health. It's incredibly accurate and user-friendly.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "James Wilson",
      role: "Patient",
      quote: "The early detection through LiverCare AI literally saved my life. I'm grateful for this amazing technology.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Dr. Michael Chen",
      role: "Research Director",
      quote: "The accuracy and reliability of LiverCare AI's predictions are truly impressive. A game-changer in healthcare.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ];

  const stats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "50K+", label: "Patients Assessed" },
    { value: "24/7", label: "Support Available" },
    { value: "100+", label: "Healthcare Partners" }
  ];

  return (
    <div className={`space-y-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Advanced AI-Powered
            <br />
            <span className="text-blue-200">Liver Health Assessment</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get accurate predictions and personalized insights about your liver health using our state-of-the-art AI technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate('/risk-assessment')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center group"
            >
              Start Assessment
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/about')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Brain className="h-8 w-8 text-blue-600" />}
          title="AI-Powered Analysis"
          description="Advanced machine learning algorithms provide accurate risk predictions based on comprehensive health data analysis."
        />
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-blue-600" />}
          title="Secure & Private"
          description="Your health data is protected with enterprise-grade encryption and security measures."
        />
        <FeatureCard
          icon={<HeartPulse className="h-8 w-8 text-blue-600" />}
          title="Real-time Results"
          description="Get instant assessment results and personalized health recommendations."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-blue-600" />}
          title="Expert Support"
          description="Access to healthcare professionals for guidance and consultation."
        />
        <FeatureCard
          icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
          title="Clinical Validation"
          description="Our AI model is validated through extensive clinical trials and research."
        />
        <FeatureCard
          icon={<Award className="h-8 w-8 text-blue-600" />}
          title="Industry Leading"
          description="Recognized as a pioneer in AI-powered healthcare diagnostics."
        />
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="1"
            title="Input Health Data"
            description="Provide your basic health information and liver test results"
          />
          <StepCard
            number="2"
            title="AI Analysis"
            description="Our advanced AI analyzes your data using proven medical algorithms"
          />
          <StepCard
            number="3"
            title="Get Results"
            description="Receive detailed insights and recommendations for your liver health"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What People Say</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-24 h-24 rounded-full mb-6 object-cover"
              />
              <p className="text-xl text-gray-600 italic mb-6 max-w-2xl">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <h3 className="text-lg font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h3>
              <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Take Control of Your Liver Health?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already benefited from our AI-powered health assessments.
        </p>
        <button
          onClick={() => navigate('/risk-assessment')}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center mx-auto group"
        >
          Start Your Assessment Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md relative">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
      {number}
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Home;