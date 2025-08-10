import React, { useState } from 'react'
import web_icon from '../assets/web-icon.png'
import mobile_icon from '../assets/mobile-icon.png'
import ui_icon from '../assets/ui-icon.png'
import graphics_icon from '../assets/graphics-icon.png'
import right_arrow from '../assets/right-arrow.png'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  
  // Calculate years of experience dynamically based on start year 2019
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  const servicesData = [
    {
      id: 1,
      icon: web_icon,
      title: "Frontend Architecture & Design",
      shortDesc: "With my front-end expertise, I create sleek, modern apps that captivate users...",
      fullContent: {
        description: "I specialize in creating robust frontend architectures that scale with your business needs. My approach combines modern design principles with cutting-edge technologies to deliver exceptional user experiences.",
        features: [
          "Responsive Web Design",
          "Modern JavaScript Frameworks (React, Vue, Angular)",
          "CSS3 & Advanced Styling",
          "Performance Optimization",
          "Cross-browser Compatibility",
          "Accessibility Standards (WCAG)"
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS", "SCSS", "Webpack", "Vite"]
      }
    },
    {
      id: 2,
      icon: mobile_icon,
      title: "Single Page Apps Development",
      shortDesc: "With my single-page application development services...",
      fullContent: {
        description: "I build fast, interactive single-page applications that provide seamless user experiences. Using modern frameworks and best practices, I create SPAs that are maintainable, scalable, and performant.",
        features: [
          "React/Vue/Angular Development",
          "State Management (Redux, Zustand)",
          "API Integration",
          "Real-time Features",
          "Progressive Web Apps (PWA)",
          "Client-side Routing"
        ],
        technologies: ["React", "Next.js", "Redux", "React Router", "Axios", "Socket.io"]
      }
    },
    {
      id: 3,
      icon: ui_icon,
      title: "CMS Theming Services",
      shortDesc: "I offer a comprehensive solution to establish a top-of-the-line content management system...",
      fullContent: {
        description: "I provide comprehensive CMS theming services that transform your content management system into a powerful, user-friendly platform. From custom themes to complete CMS solutions, I ensure your content shines.",
        features: [
          "WordPress Theme Development",
          "Drupal Theming",
          "Headless CMS Integration",
          "Custom Admin Interfaces",
          "Content Migration",
          "SEO Optimization"
        ],
        technologies: ["WordPress", "Drupal", "Strapi", "Contentful", "PHP", "GraphQL"]
      }
    },
    {
      id: 4,
      icon: graphics_icon,
      title: "PSD to Bootstrap Services",
      shortDesc: "I convert PSD, Sketch, AI, and Adobe XD files into pixel-perfect standards that are fully compliant with web coding...",
      fullContent: {
        description: "I transform your design files into pixel-perfect, responsive web pages using modern frameworks. My conversion process ensures your designs come to life exactly as envisioned while maintaining clean, semantic code.",
        features: [
          "Pixel-Perfect Conversion",
          "Responsive Design Implementation",
          "Bootstrap/Tailwind Integration",
          "Cross-browser Testing",
          "Clean, Semantic HTML",
          "Optimized CSS/SCSS"
        ],
        technologies: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "SCSS"]
      }
    }
  ]

  const openModal = (service) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
  }

  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
    <h2 className="text-center text-5xl font-Ovo">My services</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a frontend developer from Bengaluru, India with {yearsOfExperience} years of experience in multiple companies like Anteriad, Element14 and Kellyocg.</p>

    <div className="grid grid-cols-auto gap-6 my-10">
        {servicesData.map((service) => (
          <div key={service.id} className="border border-gray-400 rounded-lg px-8 py-12
          hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
              <img src={service.icon} alt="" className="w-10"/>
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.shortDesc}</p>
              <button 
                onClick={() => openModal(service)}
                className="flex items-center gap-2 text-sm mt-5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Read more <img src={right_arrow} alt="" className="w-4"/>
              </button>
          </div>
        ))}
    </div>

    {/* Modal */}
    {selectedService && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-darkTheme border border-gray-400 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-black dark:shadow-white">
          <div className="p-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <img src={selectedService.icon} alt="" className="w-12"/>
                <h2 className="text-2xl font-Ovo text-gray-700 dark:text-white">{selectedService.title}</h2>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 text-3xl font-light transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-8">
              <p className="text-gray-600 dark:text-white/80 leading-relaxed font-Ovo">
                {selectedService.fullContent.description}
              </p>

              <div>
                <h3 className="text-xl font-Ovo text-gray-700 dark:text-white mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.fullContent.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/80 font-Ovo">
                      <span className="w-2 h-2 bg-gray-700 dark:bg-white rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-Ovo text-gray-700 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.fullContent.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 border border-gray-400 text-gray-700 dark:text-white rounded-lg text-sm font-Ovo hover:bg-lightHover dark:hover:bg-darkHover transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-400">
                <button 
                  onClick={closeModal}
                  className="w-full border border-gray-400 text-gray-700 dark:text-white py-3 rounded-lg transition-all font-Ovo hover:bg-lightHover dark:hover:bg-darkHover hover:shadow-black dark:hover:shadow-white hover:-translate-y-1 duration-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Services
