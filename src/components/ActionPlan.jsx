import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Target, TrendingUp, Users, BookOpen } from 'lucide-react';

const ActionPlan = () => {
  const phases = [
    {
      id: 1,
      title: 'FOUNDATION PHASE',
      period: 'Days 1-30 (July 15 - August 15, 2025)',
      color: 'from-blue-500 to-blue-600',
      icon: Target,
      tasks: [
        {
          week: 'Week 1-2',
          title: 'Resume and Profile Optimization',
          items: [
            'Implement all resume improvements outlined above',
            'Create 3 versions: General PM, Sports Tech PM, Technical PM',
            'Update LinkedIn profile with PM-focused headline and summary',
            'Add Product Management skills and endorsements to LinkedIn',
            'Create portfolio showcasing QA-to-PM transition projects'
          ]
        },
        {
          week: 'Week 3-4',
          title: 'Application Preparation',
          items: [
            'Apply to The Athletic Product Manager role (PRIORITY #1)',
            'Apply to PayIt Lead Product Manager role',
            'Set up job alerts for target companies and keywords',
            'Research hiring managers at target companies',
            'Prepare customized cover letters for each application'
          ]
        }
      ],
      milestones: [
        'Optimized resume and LinkedIn profile',
        '2-3 high-priority applications submitted',
        'Job search tracking system established',
        'Initial networking outreach completed'
      ]
    },
    {
      id: 2,
      title: 'ACCELERATION PHASE',
      period: 'Days 31-60 (August 15 - September 15, 2025)',
      color: 'from-green-500 to-green-600',
      icon: TrendingUp,
      tasks: [
        {
          week: 'Week 5-6',
          title: 'Skill Development and Networking',
          items: [
            'Complete Google Product Management Certificate (if not already done)',
            'Attend virtual Product Management meetups and conferences',
            'Connect with 10-15 Product Managers on LinkedIn weekly',
            'Join Product Management communities (ProductHunt, Mind the Product)',
            'Start following PM thought leaders and engaging with content'
          ]
        },
        {
          week: 'Week 7-8',
          title: 'Expanded Applications and Interview Prep',
          items: [
            'Apply to UnitedHealth Group Sr Product Manager role',
            'Apply to Relativity ML Operations PM role',
            'Prepare for behavioral interviews using STAR method',
            'Practice product case study interviews',
            'Develop 3-5 compelling stories showcasing PM-relevant experience'
          ]
        }
      ],
      milestones: [
        '5-7 applications submitted to target roles',
        'Active networking and community engagement',
        'Interview preparation completed',
        'Skills development in progress'
      ]
    },
    {
      id: 3,
      title: 'EXECUTION PHASE',
      period: 'Days 61-90 (September 15 - October 15, 2025)',
      color: 'from-purple-500 to-purple-600',
      icon: CheckCircle,
      tasks: [
        {
          week: 'Week 9-10',
          title: 'Interview Execution',
          items: [
            'Complete first-round interviews for early applications',
            'Gather feedback and iterate on interview approach',
            'Continue applying to 2-3 new roles weekly',
            'Conduct informational interviews with current PMs',
            'Refine value proposition based on market feedback'
          ]
        },
        {
          week: 'Week 11-12',
          title: 'Offer Negotiation and Decision',
          items: [
            'Navigate offer negotiations using market research data',
            'Compare opportunities against career goals and values',
            'Make final decision and accept optimal offer',
            'Plan transition timeline with current employer',
            'Begin onboarding preparation for new role'
          ]
        }
      ],
      milestones: [
        'Multiple interview rounds completed',
        '1-2 job offers received',
        'Successful negotiation and role acceptance',
        'Transition plan established'
      ]
    }
  ];

  const skillPriorities = [
    {
      title: 'Product Management Fundamentals',
      resource: 'Google Product Management Certificate',
      timeline: '4-6 weeks',
      cost: '$49/month',
      priority: 'IMMEDIATE'
    },
    {
      title: 'Data Analytics for PMs',
      resource: 'Google Analytics Academy + Tableau Public Training',
      timeline: '2-3 weeks',
      cost: 'Free',
      priority: 'IMMEDIATE'
    },
    {
      title: 'Customer Research Methods',
      resource: 'IDEO Design Thinking Course + UserInterviews.com resources',
      timeline: '2 weeks',
      cost: '$200-300',
      priority: 'IMMEDIATE'
    },
    {
      title: 'Product Strategy and Roadmapping',
      resource: 'ProductPlan Academy + Roadmunk Training',
      timeline: '3-4 weeks',
      cost: '$100-200',
      priority: 'MEDIUM-TERM'
    }
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
            📈 Strategic Action Plan
          </h2>
          <p className="text-xl text-gray-400">
            30/60/90-Day Career Transition Roadmap
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <motion.div
                  key={phase.id}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${phase.color} rounded-full border-4 border-gray-900`}></div>
                  
                  <div className="ml-20">
                    <div className="glass-effect p-8 rounded-lg">
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${phase.color} mr-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-200">
                            {phase.title}
                          </h3>
                          <p className="text-gray-400">{phase.period}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {phase.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-200 flex items-center">
                              <Clock className="w-5 h-5 mr-2 text-blue-400" />
                              {task.week}: {task.title}
                            </h4>
                            <ul className="space-y-2">
                              {task.items.map((item, itemIndex) => (
                                <motion.li
                                  key={itemIndex}
                                  className="flex items-start text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-gray-700 pt-6">
                        <h4 className="text-lg font-semibold text-gray-200 mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-green-400" />
                          {phase.title.split(' ')[0]} Milestone Goals
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {phase.milestones.map((milestone, milestoneIndex) => (
                            <div key={milestoneIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                              {milestone}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Skill Development Priorities */}
        <motion.div
          className="mt-16 glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-gray-200">
              Skill Development Priorities and Resources
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillPriorities.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800/50 rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-200">{skill.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    skill.priority === 'IMMEDIATE' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {skill.priority}
                  </span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div><strong>Resource:</strong> {skill.resource}</div>
                  <div><strong>Timeline:</strong> {skill.timeline}</div>
                  <div><strong>Cost:</strong> {skill.cost}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Probability */}
        <motion.div
          className="mt-12 text-center glass-effect p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-3xl font-bold text-gray-200">
              Success Probability: High (80%+)
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">Market Conditions</div>
              <div>PM roles at 2-year high</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">Skill Alignment</div>
              <div>QA background valued</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">Strategic Approach</div>
              <div>Targeted and systematic</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="text-lg font-semibold text-gray-200 mb-2">Recommended Timeline</div>
            <div className="text-gray-300">
              <strong>Target Start Date:</strong> November 2025 - January 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionPlan;

