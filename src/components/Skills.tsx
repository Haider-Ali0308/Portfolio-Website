import React from 'react';
import { Code, Database, Globe, Palette, Award, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'PHP', 'SQL', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      skills: ['React.js', 'UI/UX Design', 'Responsive Design', 'Tailwind CSS'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: ['Node.js', 'MySQL', 'REST APIs', 'PHP'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'Tools & Technologies',
      skills: ['Git', 'VS Code', 'XAMPP', 'Version Control'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const certifications = [
    'The Complete Web Development Bootcamp - Udemy',
    'JavaScript Essentials - Sololearn',
    'React Crash Course - FreeCodeCamp'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 hover:border-blue-500 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;