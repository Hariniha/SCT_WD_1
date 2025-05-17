import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const caseStudies = [
  {
    title: "How TechCorp Reduced SaaS Spending by 40%",
    company: "TechCorp",
    industry: "Technology",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Learn how TechCorp used SaasFlow to optimize their SaaS portfolio and achieve significant cost savings while improving productivity.",
    results: [
      "40% reduction in SaaS spending",
      "25% increase in software utilization",
      "2 hours saved per week per employee"
    ]
  },
  {
    title: "Streamlining SaaS Management at Global Finance",
    company: "Global Finance",
    industry: "Financial Services",
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Discover how Global Finance consolidated their SaaS tools and improved security compliance using SaasFlow's platform.",
    results: [
      "100% compliance achievement",
      "30% reduction in onboarding time",
      "$200,000 annual savings"
    ]
  },
  {
    title: "Healthcare Provider Enhances Security with SaasFlow",
    company: "MedCare Plus",
    industry: "Healthcare",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "See how MedCare Plus improved their security posture and maintained HIPAA compliance across all their SaaS applications.",
    results: [
      "Zero security incidents",
      "45% faster access management",
      "99.9% uptime maintained"
    ]
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover how leading companies are transforming their SaaS management with SaasFlow.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300
                  ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`grid ${index === 0 ? 'md:grid-cols-2' : ''} h-full`}>
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="text-gray-600">{study.company}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h2>
                    <p className="text-gray-600 mb-6">{study.summary}</p>
                    <div className="space-y-3 mb-8">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read full case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;