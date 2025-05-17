import React from 'react';
import { Check, X } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams getting started with SaaS management.',
    price: 29,
    period: 'per month',
    highlight: false,
    features: [
      { text: 'Up to 10 SaaS applications', included: true },
      { text: 'Basic usage analytics', included: true },
      { text: 'Cost tracking', included: true },
      { text: 'User provisioning', included: true },
      { text: 'Email support', included: true },
      { text: 'API access', included: false },
      { text: 'Custom integrations', included: false },
      { text: 'SOC 2 compliance reports', included: false },
    ],
    buttonText: 'Get started',
  },
  {
    name: 'Professional',
    description: 'For growing companies with expanding SaaS requirements.',
    price: 79,
    period: 'per month',
    highlight: true,
    features: [
      { text: 'Up to 30 SaaS applications', included: true },
      { text: 'Advanced usage analytics', included: true },
      { text: 'Cost optimization', included: true },
      { text: 'SSO and user management', included: true },
      { text: 'Priority support', included: true },
      { text: 'API access', included: true },
      { text: '5 custom integrations', included: true },
      { text: 'SOC 2 compliance reports', included: false },
    ],
    buttonText: 'Get started',
  },
  {
    name: 'Enterprise',
    description: 'For organizations with complex SaaS ecosystems and security needs.',
    price: 199,
    period: 'per month',
    highlight: false,
    features: [
      { text: 'Unlimited SaaS applications', included: true },
      { text: 'Enterprise analytics', included: true },
      { text: 'Advanced cost optimization', included: true },
      { text: 'Advanced identity management', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Advanced API access', included: true },
      { text: 'Unlimited custom integrations', included: true },
      { text: 'SOC 2 compliance reports', included: true },
    ],
    buttonText: 'Contact sales',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your team's SaaS management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl overflow-hidden ${
                plan.highlight 
                  ? 'border-2 border-blue-500 relative transform md:-translate-y-4 shadow-xl' 
                  : 'border border-gray-200 shadow-sm'
              } bg-white`}
            >
              {plan.highlight && (
                <div className="bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <a 
                  href="#" 
                  className={`block w-full py-3 px-6 rounded-lg text-center font-medium transition-colors duration-200 ${
                    plan.highlight 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            View full plan comparison →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;