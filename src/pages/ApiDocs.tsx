import React from 'react';
import {  Copy, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ApiDocs: React.FC = () => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      id: 'authentication',
      title: 'Authentication',
      method: 'POST',
      endpoint: '/api/v1/auth/token',
      description: 'Get an access token for API requests',
      code: `curl -X POST https://api.saasflow.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}'`
    },
    {
      id: 'list-apps',
      title: 'List Applications',
      method: 'GET',
      endpoint: '/api/v1/applications',
      description: 'Retrieve a list of all SaaS applications',
      code: `curl https://api.saasflow.com/v1/applications \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"`
    },
    {
      id: 'usage-metrics',
      title: 'Usage Metrics',
      method: 'GET',
      endpoint: '/api/v1/metrics',
      description: 'Get usage metrics for specified applications',
      code: `curl https://api.saasflow.com/v1/metrics \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -d '{"app_ids": ["app_123", "app_456"], "start_date": "2025-01-01"}'`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 py-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Integrate SaasFlow's powerful features into your applications with our comprehensive API.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <nav className="space-y-1">
                  {endpoints.map((endpoint) => (
                    <a
                      key={endpoint.id}
                      href={`#${endpoint.id}`}
                      className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                    >
                      {endpoint.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="md:col-span-3 space-y-12">
              {endpoints.map((endpoint) => (
                <section key={endpoint.id} id={endpoint.id} className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{endpoint.title}</h2>
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium
                          ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {endpoint.method}
                        </span>
                        <code className="px-3 py-1 bg-gray-100 rounded-md font-mono text-sm">
                          {endpoint.endpoint}
                        </code>
                      </div>
                      <p className="text-gray-600 mb-6">{endpoint.description}</p>
                      <div className="relative">
                        <div className="absolute right-4 top-4">
                          <button
                            onClick={() => copyToClipboard(endpoint.code, endpoint.id)}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                          >
                            {copiedCode === endpoint.id ? (
                              <Check className="w-5 h-5 text-green-500" />
                            ) : (
                              <Copy className="w-5 h-5 text-gray-500" />
                            )}
                          </button>
                        </div>
                        <pre className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                          <code className="text-gray-100 font-mono text-sm">{endpoint.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ApiDocs;