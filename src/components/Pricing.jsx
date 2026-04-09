import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-darker">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pricing & Charges
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent pricing for freelance services
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* One-Time Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-4 text-white">One-Time Projects</h3>
            <div className="space-y-2 mb-4">
              <p className="text-lg"><span className="font-bold">Starter:</span> ₹3,000 – ₹5,000</p>
              <p className="text-lg"><span className="font-bold">Standard:</span> ₹5,000 – ₹12,000</p>
              <p className="text-lg"><span className="font-bold">Advanced:</span> ₹12,000 – ₹25,000+</p>
            </div>
            <p className="text-gray-400 text-sm">
              Pricing depends on features and complexity.
            </p>
          </motion.div>

          {/* Hourly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-xl border-2 border-primary rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Hourly Rate</h3>
            <h2 className="text-4xl font-black bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4">
              ₹299/hr
            </h2>
            <p className="text-gray-200">
              Ideal for small tasks, fixes, and ongoing work.
            </p>
          </motion.div>

          {/* Monthly */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gray-900/50 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Monthly Retainer</h3>
            <p className="text-2xl font-bold mb-4">₹5,000 – ₹15,000 / month</p>
            <p className="text-gray-400 text-sm">
              Best for maintenance, updates, and long-term support.
            </p>
          </motion.div>
        </div>

        {/* Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
            📄 Pricing & Work Policy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">1</span>
                <p className="text-gray-300 text-sm">All project costs depend on scope, features, and complexity.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">2</span>
                <p className="text-gray-300 text-sm">Final pricing is discussed and agreed before starting the project.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">3</span>
                <p className="text-gray-300 text-sm">50% advance payment is required to begin work.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">4</span>
                <p className="text-gray-300 text-sm">Remaining payment must be cleared before final delivery.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">5</span>
                <p className="text-gray-300 text-sm">2–3 minor revisions are included. Additional changes may be chargeable.</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">6</span>
                <p className="text-gray-300 text-sm">Timelines may vary based on requirements and client response.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">7</span>
                <p className="text-gray-300 text-sm">Full ownership is transferred after complete payment.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">8</span>
                <p className="text-gray-300 text-sm">Projects may be showcased in portfolio unless agreed otherwise.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-xl">
                <span className="text-primary text-lg mt-1 flex-shrink-0">9</span>
                <p className="text-gray-300 text-sm">Third-party costs (domain, hosting, APIs) are not included.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;