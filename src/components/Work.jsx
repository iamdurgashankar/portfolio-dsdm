import { useState } from 'react'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'
import { FaStar } from 'react-icons/fa'

const Work = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 10,
      title: "Alphabet Finserve",
      description: "Strategic business consultancy platform providing comprehensive financial expertise, IT solutions, and management services.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "#",
      liveUrl: "https://alphabetfinserve.com/",
      gradient: "from-indigo-500 to-purple-600",
      icon: "📈"
    },
    {
      id: 11,
      title: "Raj True Dent OPD",
      description: "Secure OPD management portal featuring encrypted patient records, appointment scheduling, and role-based access control.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "#",
      liveUrl: "https://opd.rajtruedent.com/",
      gradient: "from-blue-600 to-cyan-500",
      icon: "🛡️"
    },
    {
      id: 1,
      title: "Dirac AI",
      description: "Advanced AI-powered platform offering cutting-edge artificial intelligence solutions and machine learning services",
      technologies: ["React", "Python", "TensorFlow", "FastAPI", "Docker"],
      githubUrl: "https://github.com/durgashankardasmangaraj/dirac-ai",
      liveUrl: "https://diracai.com/",
      gradient: "from-blue-500 to-purple-600",
      icon: "🤖"
    },
    {
      id: 2,
      title: "Mano Mantapa",
      description: "Comprehensive event management and venue booking platform with seamless user experience and booking system",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubUrl: "https://github.com/durgashankardasmangaraj/mano-mantapa",
      liveUrl: "https://manomantapa.com/",
      gradient: "from-green-500 to-teal-600",
      icon: "🏛️"
    },
    {
      id: 3,
      title: "Santosh Fabrication",
      description: "Professional fabrication services website showcasing industrial solutions and manufacturing capabilities",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/durgashankardasmangaraj/santosh-fabrication",
      liveUrl: "https://santoshfabrication.com/",
      gradient: "from-orange-500 to-red-600",
      icon: "🔧"
    },
    {
      id: 4,
      title: "Dheera Consulting IT Services",
      description: "Professional IT consulting services platform offering comprehensive technology solutions and business consulting",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      githubUrl: "https://github.com/durgashankardasmangaraj/dheera-consulting",
      liveUrl: "https://dheeraconsultingitservices.com/",
      gradient: "from-purple-500 to-pink-600",
      icon: "💼"
    },
    {
      id: 5,
      title: "Dasho App",
      description: "Modern mobile application platform with intuitive user interface and seamless functionality",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      githubUrl: "https://github.com/durgashankardasmangaraj/dasho-app",
      liveUrl: "https://dashoapp.com/",
      gradient: "from-indigo-500 to-blue-600",
      icon: "📱"
    },
    {
      id: 6,
      title: "DevInquire",
      description: "Developer community platform for technical discussions, code reviews, and collaborative problem-solving",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/durgashankardasmangaraj/devinquire",
      liveUrl: "https://devinquire.com/",
      gradient: "from-yellow-500 to-orange-600",
      icon: "👨‍💻"
    },
    {
      id: 7,
      title: "DevInquire Dashboard",
      description: "Comprehensive admin dashboard for DevInquire platform with analytics, user management, and content moderation",
      technologies: ["React", "Chart.js", "Material-UI", "REST API"],
      githubUrl: "https://github.com/durgashankardasmangaraj/devinquire-dashboard",
      liveUrl: "https://dashboard.devinquire.com/",
      gradient: "from-red-500 to-pink-600",
      icon: "📊"
    },
    {
      id: 8,
      title: "Mano Vaani",
      description: "Voice-based communication platform integrated with Mano Mantapa for enhanced user interaction and feedback",
      technologies: ["React", "Web Speech API", "WebRTC", "Firebase"],
      githubUrl: "https://github.com/durgashankardasmangaraj/mano-vaani",
      liveUrl: "https://manovaani.manomantapa.com/",
      gradient: "from-teal-500 to-green-600",
      icon: "🎤"
    },
    {
      id: 9,
      title: "Raj True Dent",
      description: "Professional dental clinic website with appointment booking, service showcase, and patient management system",
      technologies: ["React", "PHP", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/durgashankardasmangaraj/raj-true-dent",
      liveUrl: "https://rajtruedent.in/",
      gradient: "from-cyan-500 to-blue-600",
      icon: "🦷"
    }
  ];

  const featuredProjects = projects.slice(0, 4);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in modern web technologies and creative problem-solving.
      </p>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-8">
        <button
          onClick={() => setShowAll(false)}
          className={`py-2 px-4 rounded-full transition-all duration-300 font-Ovo ${!showAll
              ? 'bg-gray-700 text-white dark:bg-white dark:text-black'
              : 'hover:text-gray-700 dark:hover:text-white'
            }`}
        >
          Featured
        </button>
        <button
          onClick={() => setShowAll(true)}
          className={`py-2 px-4 rounded-full transition-all duration-300 font-Ovo ${showAll
              ? 'bg-gray-700 text-white dark:bg-white dark:text-black'
              : 'hover:text-gray-700 dark:hover:text-white'
            }`}
        >
          All Projects
        </button>
      </div>

      {/* Projects Info */}
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-white/80 font-Ovo">
          {showAll
            ? `Showcasing all ${projects.length} projects`
            : `Showcasing ${featuredProjects.length} featured projects`
          }
        </p>
      </div>

      <div className="grid grid-cols-auto gap-6 my-10">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className="border border-gray-400 rounded-lg p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:bg-darkHover dark:hover:shadow-white relative group"
          >
            {/* Featured Badge */}
            {index < 4 && (
              <div className="absolute top-4 right-4 bg-gray-700 text-white px-2 py-1 rounded text-xs font-Ovo flex items-center gap-1 dark:bg-white dark:text-black z-10 shadow-md">
                <FaStar className="text-xs" /> Featured
              </div>
            )}

            {/* Icon */}
            <div className="text-4xl mb-4">
              {project.icon}
            </div>

            {/* Title & Desc */}
            <h3 className="text-lg mb-2 text-gray-700 dark:text-white font-Ovo font-bold">{project.title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80 mb-4 font-Ovo line-clamp-3">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-Ovo"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-Ovo text-gray-800 dark:text-white font-medium hover:underline"
              >
                View Live <img src={right_arrow_blod} alt="" className="w-3 dark:hidden" />
                <img src={right_arrow_blod_dark} alt="" className="w-3 hidden dark:block" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-20">
        <a href="https://github.com/iamdurgashankar" target="_blank" rel="noopener noreferrer" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover font-Ovo">
          View GitHub Profile
          <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
          <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block" />
        </a>
      </div>
    </div>
  )
}

export default Work