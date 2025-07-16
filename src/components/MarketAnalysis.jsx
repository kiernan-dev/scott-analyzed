import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, MapPin, Users, Building, Calendar } from 'lucide-react';

const MarketAnalysis = () => {
  const marketStats = [
    { label: 'Open PM Jobs', value: '6,301', change: '+53.6%', icon: Users, color: 'text-green-400' },
    { label: 'Median Salary', value: '$220K', change: '+7.3%', icon: DollarSign, color: 'text-blue-400' },
    { label: 'KC Tech Companies', value: '4,400', change: '+16%', icon: Building, color: 'text-purple-400' },
    { label: 'Market Growth', value: '11%', change: 'YTD 2025', icon: TrendingUp, color: 'text-orange-400' }
  ];

  const salaryRanges = [
    { level: 'Entry (0-3 years)', range: '$190K - $258K', target: '$130K - $150K' },
    { level: 'Experienced (4-6 years)', range: '$220K - $300K', target: '$140K - $170K' },
    { level: 'Senior (7-10 years)', range: '$250K - $350K+', target: '$150K - $220K' }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold industrial-heading mb-4">
            💼 Job Market Analysis
          </h2>
          <p className="text-xl text-gray-400">
            Current market demand and salary benchmarking for Scott's skill set
          </p>
        </motion.div>

        {/* Market Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="metric-card p-6 rounded-lg hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Market Outlook */}
        <motion.div
          className="glass-effect p-8 rounded-lg mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-200">
              Overall Market Outlook: STRONG 📈
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Key Market Indicators</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  PM roles at 2-year high with 6,301 open positions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  53.6% increase from 2023 market bottom
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  QA background increasingly valued for technical credibility
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Cross-functional experience highly sought after
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Skills Alignment</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Technical Background</span>
                  <span className="text-green-400 font-medium">High Demand ✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Agile/Scrum Experience</span>
                  <span className="text-green-400 font-medium">Essential ✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cross-functional Leadership</span>
                  <span className="text-green-400 font-medium">Critical ✅</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Data Analysis</span>
                  <span className="text-blue-400 font-medium">Growing ✅</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Salary Benchmarking */}
        <motion.div
          className="glass-effect p-8 rounded-lg mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <DollarSign className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-200">
              Salary Benchmarking
            </h3>
          </div>
          
          <div className="space-y-4">
            {salaryRanges.map((range, index) => (
              <motion.div
                key={range.level}
                className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-2 md:mb-0">
                  <div className="font-semibold text-gray-200">{range.level}</div>
                  <div className="text-sm text-gray-400">National Average</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-200">{range.range}</div>
                  <div className="text-sm text-blue-400">Scott's Target: {range.target}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Kansas City Market */}
        <motion.div
          className="glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-200">
              Kansas City Market Advantages
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">77,000</div>
              <div className="text-gray-300">Tech Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">$150K+</div>
              <div className="text-gray-300">PM Salary Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">16%</div>
              <div className="text-gray-300">Workforce Growth</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-gray-200 mb-2">Major Employers</h4>
            <div className="flex flex-wrap gap-2">
              {['Cerner', 'Garmin', 'T-Mobile', 'PayIt', 'UnitedHealth'].map((company) => (
                <span key={company} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketAnalysis;

