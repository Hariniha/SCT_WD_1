import React from 'react';
import { BarChart2, CreditCard, Shield, Zap, Users, Layers, Smartphone, Gauge } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    title: 'Usage Analytics',
    description: 'Get detailed insights into how your team is using each SaaS application with custom metrics and reports.'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    title: 'Cost Management',
    description: 'Track expenses, identify redundant subscriptions, and optimize your SaaS spending with smart recommendations.'
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: 'Security Compliance',
    description: 'Ensure all your SaaS tools meet security standards with automated compliance checking and alerts.'
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: 'User Management',
    description: 'Centralize user provisioning, access control, and role management across all your applications.'
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: 'Integration Hub',
    description: 'Connect all your tools with our extensive integration library and custom API capabilities.'
  },
  {
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    title: 'Mobile Access',
    description: 'Manage your SaaS portfolio on the go with our fully-featured mobile application.'
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: 'Automation',
    description: 'Set up workflows and automate repetitive tasks across your SaaS ecosystem.'
  },
  {
    icon: <Gauge className="w-6 h-6 text-blue-600" />,
    title: 'Performance Monitoring',
    description: 'Monitor the performance and uptime of all your critical SaaS applications in real-time.'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Manage Your SaaS Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform helps you centralize, optimize, and secure your entire SaaS ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            View all features
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;