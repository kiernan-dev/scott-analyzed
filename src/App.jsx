import { motion } from 'framer-motion';
import './App.css';

// Components
import Navigation from './components/Navigation';
import Header from './components/Header';
import ScoreCard from './components/ScoreCard';
import MarketAnalysis from './components/MarketAnalysis';
import JobOpportunities from './components/JobOpportunities';
import ActionPlan from './components/ActionPlan';
import Sources from './components/Sources';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Header Section */}
      <section id="header">
        <Header />
      </section>

      {/* Score Card Section */}
      <section id="score">
        <ScoreCard />
      </section>

      {/* Market Analysis Section */}
      <section id="market">
        <MarketAnalysis />
      </section>

      {/* Job Opportunities Section */}
      <section id="jobs">
        <JobOpportunities />
      </section>

      {/* Action Plan Section */}
      <section id="action">
        <ActionPlan />
      </section>

      {/* Sources Section */}
      <section id="sources">
        <Sources />
      </section>

      {/* Footer */}
      <motion.footer
        className="py-12 px-6 bg-gradient-to-br from-gray-900 to-black border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold industrial-heading mb-2">
              Executive Summary
            </h3>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">
              This comprehensive resume analysis for Scott D. Allen provides a data-driven assessment 
              of his transition from Quality Assurance to Product Management. Based on current market 
              research from July 2025, the analysis shows strong market timing with PM jobs at a 2-year 
              high, excellent positioning for sports technology roles, and a realistic target salary 
              range of $140,000-$170,000.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">78/100</div>
              <div className="text-gray-400 text-sm">Overall Resume Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">95%</div>
              <div className="text-gray-400 text-sm">The Athletic Match</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">80%+</div>
              <div className="text-gray-400 text-sm">Success Probability</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">90 Days</div>
              <div className="text-gray-400 text-sm">Target Timeline</div>
            </div>
          </div>
          
          <div className="section-divider mb-8"></div>
          
          <div className="text-gray-500 text-sm">
            <div className="mb-2">
              <strong>Report compiled on July 13, 2025</strong>
            </div>
            <div>
              All data verified and sourced • Recommended review and update quarterly for market changes
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;

