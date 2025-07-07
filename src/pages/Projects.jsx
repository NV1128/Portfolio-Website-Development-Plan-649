import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Zap, Globe, Brain, Smartphone } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'featured', name: 'Featured', icon: Zap },
  ]

  const projects = [
    {
      id: 1,
      title: 'AI Resume Screener',
      description: 'Intelligent resume screening system using NLP and machine learning to match candidates with job requirements.',
      category: 'ai',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'FastAPI'],
      github: 'https://github.com/promptarchi/ai-resume-screener',
      demo: 'https://ai-resume-screener.vercel.app',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'Interactive Portfolio Builder',
      description: 'AI-powered portfolio generator that creates stunning, interactive portfolios based on user input and preferences.',
      category: 'web',
      featured: true,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Three.js', 'OpenAI', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/promptarchi/portfolio-builder',
      demo: 'https://portfolio-builder.promptarchi.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Smart Fitness Tracker',
      description: 'Mobile app with AI-powered workout recommendations, nutrition tracking, and progress analytics.',
      category: 'mobile',
      featured: false,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'TensorFlow Lite', 'Firebase', 'Python', 'ML Kit'],
      github: 'https://github.com/promptarchi/smart-fitness',
      demo: 'https://play.google.com/store/apps/details?id=com.promptarchi.fitness',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      title: 'E-commerce Analytics Dashboard',
      description: 'Real-time analytics dashboard for e-commerce businesses with AI-powered insights and predictions.',
      category: 'web',
      featured: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Python'],
      github: 'https://github.com/promptarchi/ecommerce-analytics',
      demo: 'https://analytics.promptarchi.com',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'Chatbot Studio',
      description: 'No-code platform for creating intelligent chatbots with natural language processing capabilities.',
      category: 'ai',
      featured: false,
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Python', 'OpenAI', 'WebSocket', 'PostgreSQL'],
      github: 'https://github.com/promptarchi/chatbot-studio',
      demo: 'https://chatbot.promptarchi.com',
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      id: 6,
      title: 'Crypto Trading Bot',
      description: 'Automated cryptocurrency trading bot with machine learning algorithms for market prediction.',
      category: 'ai',
      featured: false,
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
      technologies: ['Python', 'TensorFlow', 'Binance API', 'Redis', 'Docker'],
      github: 'https://github.com/promptarchi/crypto-bot',
      demo: 'https://crypto-bot.promptarchi.com',
      gradient: 'from-yellow-400 to-orange-500'
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter)

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Project
              </span>{' '}
              <span className="text-white">Showcase</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of innovative projects that push the boundaries of technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`
                    flex items-center space-x-2 px-6 py-3 rounded-full font-medium 
                    transition-all duration-300 hover:scale-105
                    ${activeFilter === category.id
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/50'
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{category.name}</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cyber-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                      <div className="flex space-x-4">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2 px-4 bg-gradient-to-r ${project.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-4 bg-gray-800/50 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 text-center border border-gray-600/50"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card rounded-2xl p-12 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/20"
          >
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-6">
              Have an Idea?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Let's Build It
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to turn your vision into reality? Let's collaborate and create something extraordinary together.
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

export default Projects