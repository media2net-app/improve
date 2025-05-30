'use client';
import React from 'react';
import Navbar from '@/components/Navbar';

const pricingPlans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Basic POS features',
      'Up to 2 devices',
      'Email support',
      'Basic reporting',
      'Digital menu',
      'Basic inventory management'
    ],
    buttonText: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Ideal for growing businesses',
    features: [
      'All Starter features',
      'Up to 5 devices',
      'Priority support',
      'Advanced reporting',
      'Reservation system',
      'Staff management',
      'Inventory tracking',
      'Customer loyalty program'
    ],
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large businesses with complex needs',
    features: [
      'All Professional features',
      'Unlimited devices',
      '24/7 dedicated support',
      'Custom reporting',
      'API access',
      'Multi-location support',
      'Advanced analytics',
      'Custom integrations',
      'Training sessions'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              Choose the plan that's right for your business
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center">
                  {plan.name}
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-xl font-medium text-gray-500 self-end mb-1 ml-1">/month</span>
                </div>
                <p className="mt-4 text-gray-500 text-center">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    className={`w-full py-3 px-4 rounded-md text-center font-medium ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Can I change plans later?</h3>
              <p className="mt-2 text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Is there a free trial?</h3>
              <p className="mt-2 text-gray-600">Yes, all plans come with a 14-day free trial. No credit card required to start.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
              <p className="mt-2 text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Do you offer discounts for annual plans?</h3>
              <p className="mt-2 text-gray-600">Yes, we offer a 20% discount when you choose annual billing instead of monthly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage; 