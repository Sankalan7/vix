'use client';

export default function UpgradePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans text-gray-900">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
        <div className="flex justify-center mb-4">
          <span className="text-4xl">🐛</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Debugger Pro</h1>
        <p className="text-gray-600 mb-8">
          Unlimited AI error explanations, directly in your browser. Save hours of debugging every week.
        </p>
        <div className="text-4xl font-bold mb-8">
          $3 <span className="text-lg text-gray-500 font-normal">/ month</span>
        </div>
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          onClick={() => alert('Stripe Checkout Redirect (Mock)')}
        >
          Subscribe Now
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Cancel anytime. Fast, secure checkout via Stripe.
        </p>
      </div>
    </div>
  );
}
