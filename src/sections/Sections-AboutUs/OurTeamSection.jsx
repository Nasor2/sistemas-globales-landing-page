import React, { useEffect, useState } from "react";
import javier from "../../assets/images/javier-pf.png";
import jorge from "../../assets/images/maria-pf.png";
import { PersonStanding, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const OurTeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const teamSection = document.getElementById("team-section");
    if (teamSection) observer.observe(teamSection);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Justin Lyons",
      role: "Founder & CEO",
      image: javier,
      social: {
        linkedin: "https://linkedin.com/in/justinlyons",
        twitter: "https://twitter.com/justinlyons"
      }
    },
    {
      id: 2,
      name: "Devin Bishop",
      role: "Chief Product Officer",
      image: jorge,
      social: {
        linkedin: "https://linkedin.com/in/devinbishop",
        instagram: "https://instagram.com/devinbishop"
      }
    },
    {
      id: 3,
      name: "Frank Chavez",
      role: "Content Strategist",
      image: javier,
      social: {
        linkedin: "https://linkedin.com/in/frankchavez",
        twitter: "https://twitter.com/frankchavez"
      }
    },
    {
      id: 4,
      name: "Hester Anderson",
      role: "Director of Engineering",
      image: jorge,
      social: {
        linkedin: "https://linkedin.com/in/hesteranderson"
      }
    },
    {
      id: 5,
      name: "Lucinda Harmon",
      role: "Director of Finance",
      image: javier,
      social: {
        linkedin: "https://linkedin.com/in/lucindaharmon"
      }
    },
    {
      id: 6,
      name: "Calvin Patrick",
      role: "Content Director",
      image: jorge,
      social: {
        linkedin: "https://linkedin.com/in/calvinpatrick",
        twitter: "https://twitter.com/calvinpatrick"
      }
    },
    {
      id: 7,
      name: "Lora Mason",
      role: "Product Designer",
      image: javier,
      social: {
        linkedin: "https://linkedin.com/in/loramason",
        instagram: "https://instagram.com/loramason"
      }
    },
    {
      id: 8,
      name: "Brett Reynolds",
      role: "Product Engineer",
      image: jorge,
      social: {
        linkedin: "https://linkedin.com/in/brettreynolds"
      }
    },
  ];

  return (
    <div 
      id="team-section"
      className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
    >
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-green-100 text-green-600 text-lg font-medium px-4 py-2 rounded-full tracking-wide inline-flex items-center mb-4">
          <PersonStanding className="mr-2 h-5 w-5" /> Equipo
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-azul-primario mb-6">
          Conoce a nuestro increíble equipo
        </h2>
        <p className="max-w-2xl mx-auto text-negro-suave">
          Mentes creativas unidas por la pasión de crear experiencias memorables
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={member.id} 
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1 + index * 0.1, 
              ease: "easeOut" 
            }}
          >
            <motion.div 
              className="relative mb-4 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-azul-primario mb-1 text-center">
              {member.name}
            </h3>
            <p className="text-negro-suave mb-3 text-center">{member.role}</p>
            <div className="flex space-x-3">
              {member.social.linkedin && (
                <motion.a 
                  href={member.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-azul-primario transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              )}
              {member.social.twitter && (
                <motion.a 
                  href={member.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-azul-primario transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} />
                </motion.a>
              )}
              {member.social.instagram && (
                <motion.a 
                  href={member.social.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-azul-primario transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;