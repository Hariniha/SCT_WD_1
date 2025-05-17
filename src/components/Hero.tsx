import React from 'react';
import { ArrowRight,  Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1 text-amber-300" />
                <span>New feature: AI-powered analytics</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Streamline Your SaaS 
              <span className="relative">
                <span className="relative z-10"> Management</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-purple-500/30 rounded-sm -z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
              Centralize your SaaS subscriptions, optimize costs, and boost team productivity with our all-in-one management platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#"
                className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Start your free trial
              </a>
              <a 
                href="#"
                className="px-6 py-3 rounded-lg bg-blue-700 text-white font-medium border border-blue-500 hover:bg-blue-800 transition-colors duration-200 inline-flex items-center"
              >
                See how it works
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="mt-8 text-white/70 text-sm">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>

          <div className="relative md:ml-auto">
            <div className="relative mx-auto max-w-md">
              <div className="rounded-xl bg-white/10 backdrop-blur-sm p-2 shadow-2xl">
                <div className="rounded-lg overflow-hidden bg-white">
                  <div className="bg-gray-800 py-3 px-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-white/80 text-xs">SaasFlow Dashboard</div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">Your SaaS Portfolio</h3>
                      <span className="text-sm text-blue-600 font-medium">April 2025</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { color: 'bg-blue-500', name: 'Productivity', percent: '35%', width: 'w-[35%]' },
                        { color: 'bg-purple-500', name: 'Marketing', percent: '28%', width: 'w-[28%]' },
                        { color: 'bg-green-500', name: 'Development', percent: '22%', width: 'w-[22%]' },
                        { color: 'bg-amber-500', name: 'Design', percent: '15%', width: 'w-[15%]' },
                      ].map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{item.name}</span>
                            <span className="text-sm font-medium">{item.percent}</span>
                          </div>
                          <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className={`${item.color} h-2.5 rounded-full ${item.width}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Shield className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm font-medium text-gray-700">Security Status</span>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Protected
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-600/10 backdrop-blur-sm rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;