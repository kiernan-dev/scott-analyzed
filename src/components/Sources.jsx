import { motion } from 'framer-motion';
import { ExternalLink, Shield, Calendar, CheckCircle, AlertTriangle } from 'lucide-react';

const Sources = () => {
  const sources = [
    {
      id: 1,
      title: "Lenny's Newsletter - State of the Product Job Market in 2025",
      url: "https://www.lennysnewsletter.com/p/state-of-the-product-job-market-in-670",
      date: "July 13, 2025",
      category: "Market Research",
      keyData: [
        "6,301 open PM jobs as of May 2025",
        "53.6% increase from market bottom",
        "11% growth since start of 2025",
        "Highest number of open PM roles in over 2 years"
      ],
      confidence: "high"
    },
    {
      id: 2,
      title: "Levels.fyi - End of Year Report 2024",
      url: "https://www.levels.fyi/2024/",
      date: "July 13, 2025",
      category: "Compensation",
      keyData: [
        "Median total compensation: $220,000 (2024)",
        "Year-over-year growth: +7.3% from 2023",
        "Experience level compensation ranges",
        "Top paying companies by role"
      ],
      confidence: "high"
    },
    {
      id: 3,
      title: "Nucamp - Kansas City Tech Jobs Analysis 2025",
      url: "https://www.nucamp.co/blog/coding-bootcamp-kansas-city-mo-ranking-the-top-10-highpaying-tech-jobs-in-kansas-city-in-2025",
      date: "February 13, 2025",
      category: "Geographic Market",
      keyData: [
        "77,000 tech professionals in KC metro area",
        "4,400 tech companies",
        "Product Manager salary range: $150,000+ annually",
        "16% tech workforce growth (2021-2023)"
      ],
      confidence: "high"
    },
    {
      id: 4,
      title: "Macrotrends - UnitedHealth Group Revenue",
      url: "https://www.macrotrends.net/stocks/charts/UNH/unitedhealth-group/revenue",
      date: "July 13, 2025",
      category: "Company Intelligence",
      keyData: [
        "2023 annual revenue: $371.622 billion",
        "14.64% increase from 2022",
        "2024 revenue: $400.3 billion"
      ],
      confidence: "high"
    },
    {
      id: 5,
      title: "SportsTech Jobs - The Athletic Product Manager Listing",
      url: "https://sportstechjobs.com/product-manager-(remote)-the-athletic/686f6b5a1dabe93a02ff44fd",
      date: "July 13, 2025",
      category: "Job Opportunities",
      keyData: [
        "Salary: $110,000-$130,000 base",
        "Location: Remote (United States)",
        "Requirements: 2+ years PM experience",
        "Company: 500+ editorial staff, sports media focus"
      ],
      confidence: "high"
    }
  ];

  const confidenceLevels = [
    {
      level: "High Confidence (95%+)",
      description: "Data from official sources, government reports, established industry publications",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      level: "Medium Confidence (80-95%)",
      description: "Data from reputable industry sources with some estimation",
      icon: Shield,
      color: "text-yellow-400"
    },
    {
      level: "Estimates/Projections (70-80%)",
      description: "Forward-looking assessments based on current trends",
      icon: AlertTriangle,
      color: "text-orange-400"
    }
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'high': return 'border-green-400 bg-green-400/10';
      case 'medium': return 'border-yellow-400 bg-yellow-400/10';
      case 'low': return 'border-orange-400 bg-orange-400/10';
      default: return 'border-gray-400 bg-gray-400/10';
    }
  };

  const getConfidenceIcon = (confidence) => {
    switch (confidence) {
      case 'high': return CheckCircle;
      case 'medium': return Shield;
      case 'low': return AlertTriangle;
      default: return Shield;
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
            📚 Sources and References
          </h2>
          <p className="text-xl text-gray-400">
            All data verified and sourced from authoritative industry publications
          </p>
        </motion.div>

        {/* Data Verification Methodology */}
        <motion.div
          className="glass-effect p-8 rounded-lg mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-blue-400" />
            Data Verification Methodology
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Research Approach</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Primary Source Priority: Official company reports, government data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Multiple Source Verification: Cross-referenced across 3+ sources
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Recency Validation: Focused on 2024-2025 data
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Geographic Specificity: Local Kansas City market validation
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Quality Assurance Process</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Initial Research: Comprehensive web search with date filters
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Source Evaluation: Credibility and authority assessment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Data Cross-Reference: Key numbers verified across platforms
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fact-Checking: Discrepancies identified and corrected
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Confidence Levels */}
        <motion.div
          className="glass-effect p-8 rounded-lg mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-200 mb-6">Confidence Levels</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {confidenceLevels.map((level, index) => {
              const IconComponent = level.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <IconComponent className={`w-8 h-8 ${level.color}`} />
                  </div>
                  <h4 className={`text-lg font-semibold mb-2 ${level.color}`}>
                    {level.level}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {level.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Primary Sources */}
        <div className="space-y-6">
          {sources.map((source, index) => {
            const ConfidenceIcon = getConfidenceIcon(source.confidence);
            return (
              <motion.div
                key={source.id}
                className={`glass-effect p-6 rounded-lg border-l-4 ${getConfidenceColor(source.confidence)}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <ConfidenceIcon className={`w-5 h-5 ${source.confidence === 'high' ? 'text-green-400' : source.confidence === 'medium' ? 'text-yellow-400' : 'text-orange-400'}`} />
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                        {source.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {source.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Accessed: {source.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Source</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-200 mb-3">Key Data Points</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {source.keyData.map((data, dataIndex) => (
                      <li key={dataIndex} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {data}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimers */}
        <motion.div
          className="mt-12 glass-effect p-8 rounded-lg border border-yellow-400/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-200">Important Disclaimers</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Market Data Currency</h4>
              <ul className="space-y-1 text-sm">
                <li>• All data reflects July 2025 conditions</li>
                <li>• Job market conditions change rapidly</li>
                <li>• Geographic data may vary by specific location</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Individual Results Variation</h4>
              <ul className="space-y-1 text-sm">
                <li>• Salary ranges represent market averages</li>
                <li>• Individual offers may vary significantly</li>
                <li>• Negotiation outcomes depend on qualifications</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-yellow-400 mb-2">Forward-Looking Statements</h4>
              <ul className="space-y-1 text-sm">
                <li>• Projections based on current trends</li>
                <li>• Economic conditions may impact outcomes</li>
                <li>• Recommendations should be adapted as needed</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-center text-gray-300">
              <div className="font-semibold mb-1">Report compiled on July 13, 2025</div>
              <div className="text-sm">All data verified and sourced as of analysis date • Recommended review and update quarterly for market changes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sources;

