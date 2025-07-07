import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, GraduationCap, Code, Brain, Palette, Coffee } from 'lucide-react'

const Team = () => {
  const [expandedMember, setExpandedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: 'Sai Vivek Vardhan',
      role: 'AI/ML Engineer & Full Stack Developer',
      university: 'NIT Mizoram',
      avatar: 'SV',
      gradient: 'from-cyan-400 to-blue-500',
      location: 'Mizoram, India',
      email: 'saivivek@promptarchi.com',
      github: 'https://github.com/saivivek',
      linkedin: 'https://linkedin.com/in/saivivek',
      bio: 'Passionate AI/ML engineer with expertise in building intelligent systems that solve real-world problems. Experienced in full-stack development with a focus on creating seamless user experiences.',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'PyTorch', level: 85 },
        { name: 'OpenAI API', level: 95 }
      ],
      specializations: [
        'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Full Stack Development',
        'API Development',
        'System Architecture'
      ],
      achievements: [
        'Led 20+ AI/ML projects',
        'Published research in NLP',
        'Open source contributor',
        'AI hackathon winner',
        'Mentored 50+ students'
      ],
      funFacts: [
        '🌙 Codes best at 3 AM',
        '☕ Coffee addict (5 cups/day)',
        '🎮 Gaming enthusiast',
        '📚 Reads 50+ tech blogs weekly'
      ],
      currentProjects: [
        'AI Resume Screener',
        'Intelligent Chatbot Platform',
        'Computer Vision for Healthcare'
      ]
    },
    {
      id: 2,
      name: 'Anand Sai',
      role: 'Frontend Developer & UI/UX Designer',
      university: 'GITAM University',
      avatar: 'AS',
      gradient: 'from-purple-500 to-pink-500',
      location: 'Hyderabad, India',
      email: 'anandsai@promptarchi.com',
      github: 'https://github.com/anandsai',
      linkedin: 'https://linkedin.com/in/anandsai',
      bio: 'Creative frontend developer and UI/UX designer who believes in crafting beautiful, intuitive user experiences. Specialized in modern web technologies and motion design.',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'UI/UX Design', level: 95 },
        { name: 'Figma', level: 90 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Three.js', level: 75 }
      ],
      specializations: [
        'Frontend Development',
        'UI/UX Design',
        'Motion Graphics',
        'Responsive Design',
        'Design Systems',
        'User Research'
      ],
      achievements: [
        'Designed 30+ user interfaces',
        'UI/UX certification',
        'Design award winner',
        'Frontend mentor',
        'Design system creator'
      ],
      funFacts: [
        '🎨 Designs with music on',
        '🍕 Pizza for breakfast',
        '🏃‍♂️ Marathon runner',
        '📱 Has 200+ design apps'
      ],
      currentProjects: [
        'Interactive Portfolio Builder',
        'E-commerce Dashboard',
        'Mobile Banking App'
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 pb-20 px-4 relative"
    >
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold mb-6">
              <span className="text-white">Meet the</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Architects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two passionate developers from premier institutions, united by a vision to create extraordinary digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="cyber-card rounded-xl overflow-hidden group"
              >
                {/* Member Header */}
                <div className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white font-orbitron font-bold text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <GraduationCap size={14} />
                          <span>{member.university}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{member.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex space-x-4 mb-6">
                    <a href={member.github} className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={member.linkedin} className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} className="p-2 bg-gray-800/50 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedMember(expandedMember === member.id ? null : member.id)}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${member.gradient} text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300`}
                  >
                    {expandedMember === member.id ? 'Show Less' : 'Learn More'}
                  </button>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedMember === member.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700/50 overflow-hidden"
                    >
                      <div className="p-8 space-y-8">
                        {/* Skills */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <Code className="w-5 h-5 mr-2 text-cyan-400" />
                            Technical Skills
                          </h4>
                          <div className="grid grid-cols-2 gap-4">
                            {member.skills.map((skill, skillIndex) => (
                              <div key={skillIndex}>
                                <div className="flex justify-between mb-2">
                                  <span className="text-gray-300 text-sm">{skill.name}</span>
                                  <span className="text-cyan-400 text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-2">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ delay: skillIndex * 0.1, duration: 1 }}
                                    className={`h-full bg-gradient-to-r ${member.gradient} rounded-full`}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Specializations */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                            Specializations
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {member.specializations.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-center text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                                {spec}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <Palette className="w-5 h-5 mr-2 text-cyan-400" />
                            Achievements
                          </h4>
                          <div className="space-y-2">
                            {member.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-center text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Fun Facts */}
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <Coffee className="w-5 h-5 mr-2 text-cyan-400" />
                            Fun Facts
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {member.funFacts.map((fact, factIndex) => (
                              <div key={factIndex} className="text-gray-300 text-sm">
                                {fact}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Current Projects */}
                        <div>
                          <h4 className="text-white font-semibold mb-4">Current Projects</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.currentProjects.map((project, projIndex) => (
                              <span key={projIndex} className={`px-3 py-1 bg-gradient-to-r ${member.gradient} bg-opacity-20 text-white text-sm rounded-full border border-opacity-30`}>
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Impact
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '25+', label: 'Technologies Mastered' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="cyber-card rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card rounded-2xl p-12 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Collaborate?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your ideas into extraordinary digital experiences. We're excited to work with you!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
            >
              Start Your Project
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Team