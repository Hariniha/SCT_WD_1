import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "SaasFlow has transformed how we manage our tech stack. We've reduced our SaaS spending by 30% while improving team productivity.",
    author: "Sarah Johnson",
    role: "CTO, Acme Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    quote: "The analytics and reporting capabilities are exceptional. We now have visibility into all our SaaS usage and can make data-driven decisions.",
    author: "Michael Chen",
    role: "IT Director, TechCorp",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5
  },
  {
    quote: "Implementation was seamless, and the support team is incredibly responsive. SaasFlow has become an essential part of our operations.",
    author: "Emma Davis",
    role: "Operations Manager, StartupHub",
    image: "https://images.pexels.com/photos/3754208/pexels-photo-3754208.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of companies to manage and optimize their SaaS ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-2xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to optimize your SaaS management?</h3>
              <p className="text-gray-700 mb-6">Join thousands of happy customers who have transformed their SaaS ecosystem with SaasFlow.</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Start your free trial
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  Schedule a demo
                </a>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-8 rounded-md ${
                        ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-amber-500', 'bg-indigo-500', 'bg-rose-500'][i % 6]
                      } opacity-${i * 10 + 20}`}
                    ></div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-white/30 rounded-md -z-10 transform rotate-6"></div>
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-white/20 rounded-md -z-20 transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;