import { motion } from 'framer-motion';
import { TrendingUp, Award, Target, Star } from 'lucide-react';

const ScoreCard = () => {
  const scores = [
    { label: 'Overall Score', value: 78, max: 100, icon: Award, color: 'from-blue-500 to-blue-600' },
    { label: 'Content Quality', value: 82, max: 100, icon: Star, color: 'from-green-500 to-green-600' },
    { label: 'Skills Alignment', value: 85, max: 100, icon: Target, color: 'from-purple-500 to-purple-600' },
    { label: 'Market Relevance', value: 70, max: 100, icon: TrendingUp, color: 'from-orange-500 to-orange-600' }
  ];

  const getGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    return 'B-';
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold industrial-heading mb-4">
            📋 Resume Evaluation
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive scoring across key evaluation criteria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scores.map((score, index) => {
            const IconComponent = score.icon;
            const percentage = (score.value / score.max) * 100;
            
            return (
              <motion.div
                key={score.label}
                className="metric-card p-6 rounded-lg hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${score.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-200">
                      {getGrade(score.value)}
                    </div>
                    <div className="text-sm text-gray-400">
                      {score.value}/{score.max}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-200 mb-3">
                  {score.label}
                </h3>
                
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="progress-bar h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-400">
                    {percentage.toFixed(0)}% Complete
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-12 p-8 glass-effect rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Top 5 Strengths
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Strong Cross-Functional Leadership Experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Excellent Technical Foundation
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Data-Driven Mindset
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Industry Transition Positioning
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive Product Lifecycle Understanding
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-400" />
                Top 5 Improvement Areas
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lack of Quantified Achievements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insufficient Product Management Keywords
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Weak Professional Summary
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Missing Modern PM Skills
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Geographic and Remote Work Clarity
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScoreCard;

