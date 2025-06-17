import { Code, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const hobbies = [
    { icon: Code, title: 'Building Projects', description: 'Personal web projects' },
    { icon: Lightbulb, title: 'AI & Tech Stacks', description: 'Exploring new technologies' },
    { icon: Heart, title: 'UI/UX Design', description: 'Design mockups' },
    { icon: Users, title: 'Open Source', description: 'Contributing to community' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Motivated mern-stack developer skilled in JavaScript, React.js, Node.js, PHP and MySQL. 
                Strong fundamentals in full-stack development and eager to work on AI/ML based solutions.
              </p>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
              <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
                <h4 className="text-lg font-semibold text-blue-400">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-300">Mirpur University of Science & Technology (MUST)</p>
                <p className="text-gray-400">2021 – 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-200 group">
                    <hobby.icon className="text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-200" size={24} />
                    <h4 className="font-semibold text-white mb-1">{hobby.title}</h4>
                    <p className="text-gray-400 text-sm">{hobby.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;