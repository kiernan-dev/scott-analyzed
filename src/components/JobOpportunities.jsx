import { motion } from 'framer-motion';
import { Target, Star, MapPin, DollarSign, Clock, ExternalLink, Zap } from 'lucide-react';

const JobOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      company: 'The Athletic',
      role: 'Product Manager (Remote)',
      match: 95,
      priority: 'IMMEDIATE',
      salary: '$110K - $130K',
      location: 'Remote (United States)',
      deadline: 'July 20, 2025',
      highlights: [
        'Sports media company (aligns with baseball passion)',
        'Remote work available',
        'Cross-functional leadership required',
        'Data-driven decision making emphasis',
        '2+ years PM experience requirement'
      ],
      url: 'https://sportstechjobs.com/product-manager-(remote)-the-athletic/686f6b5a1dabe93a02ff44fd',
      color: 'from-green-500 to-green-600',
      urgency: 'high'
    },
    {
      id: 2,
      company: 'PayIt',
      role: 'Lead Product Manager',
      match: 88,
      priority: 'HIGH',
      salary: 'Competitive',
      location: 'Kansas City, MO',
      deadline: 'July 25, 2025',
      highlights: [
        'Local Kansas City company',
        'Government/civic tech (process improvement focus)',
        'Remote work consideration for qualified candidates',
        'Lead role matches senior experience level'
      ],
      url: '#',
      color: 'from-blue-500 to-blue-600',
      urgency: 'medium'
    },
    {
      id: 3,
      company: 'UnitedHealth Group',
      role: 'Sr Product Manager (Remote)',
      match: 85,
      priority: 'HIGH',
      salary: '$106K - $194K',
      location: 'Remote (KC preference)',
      deadline: 'July 30, 2025',
      highlights: [
        'Healthcare technology (regulated industry experience)',
        'Senior level role',
        'Strong compensation package',
        'Remote work established'
      ],
      url: '#',
      color: 'from-purple-500 to-purple-600',
      urgency: 'medium'
    },
    {
      id: 4,
      company: 'Relativity',
      role: 'Product Manager, ML Operations',
      match: 82,
      priority: 'MEDIUM',
      salary: 'Competitive',
      location: 'Kansas City, MO',
      deadline: 'August 15, 2025',
      highlights: [
        'AI/ML focus (growing market segment)',
        'Local Kansas City opportunity',
        'Technical product management',
        'Operations focus aligns with QA background'
      ],
      url: '#',
      color: 'from-orange-500 to-orange-600',
      urgency: 'low'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'IMMEDIATE': return 'bg-red-500 text-white';
      case 'HIGH': return 'bg-orange-500 text-white';
      case 'MEDIUM': return 'bg-yellow-500 text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'high': return <Zap className="w-4 h-4" />;
      case 'medium': return <Clock className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
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
            🎯 Targeted Job Search
          </h2>
          <p className="text-xl text-gray-400">
            High-priority opportunities matching Scott's profile and geographic criteria
          </p>
        </motion.div>

        {/* Geographic Criteria */}
        <motion.div
          className="glass-effect p-6 rounded-lg mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-400" />
              <span className="font-medium">Geographic Criteria: ✅ CONFIRMED</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-600"></div>
            <div className="text-center">
              <span className="font-medium">100% remote positions OR within 30-mile radius of Kansas City, MO/KS</span>
            </div>
          </div>
        </motion.div>

        {/* Job Opportunities */}
        <div className="space-y-6">
          {opportunities.map((job, index) => (
            <motion.div
              key={job.id}
              className="glass-effect p-8 rounded-lg hover-lift border border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-200">
                      {job.company}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(job.priority)}`}>
                      {job.priority}
                    </span>
                    {job.urgency === 'high' && (
                      <div className="flex items-center space-x-1 text-red-400">
                        {getUrgencyIcon(job.urgency)}
                        <span className="text-xs font-medium">URGENT</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-xl text-gray-300 mb-4">{job.role}</div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Apply by {job.deadline}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-200 mb-1">
                      {job.match}%
                    </div>
                    <div className="text-sm text-gray-400">Match Score</div>
                  </div>
                  
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-gray-700"
                      />
                      <motion.path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${job.match}, 100`}
                        className="text-green-400"
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${job.match}, 100` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400" />
                  Why This is a Great Fit
                </h4>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              {job.url !== '#' && (
                <div className="flex justify-end">
                  <motion.a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${job.color} text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Job Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Application Priority Summary */}
        <motion.div
          className="mt-12 glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-blue-400" />
            Application Priority Ranking
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-red-400 mb-3">IMMEDIATE (Apply This Week)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>1. The Athletic - Product Manager (Remote)</li>
                <li>2. PayIt - Lead Product Manager</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-orange-400 mb-3">HIGH PRIORITY (Apply Within 2 Weeks)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>3. UnitedHealth Group - Sr Product Manager</li>
                <li>4. Relativity - Product Manager, ML Operations</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-400 mb-3">MONITORING (Set Job Alerts)</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Rapsodo product management roles</li>
                <li>• Remote sports technology PM positions</li>
                <li>• Kansas City area senior PM opportunities</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpportunities;

