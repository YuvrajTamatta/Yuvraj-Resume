import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    institution: 'Atmiya University',
    location: 'Rajkot',
    period: '2023 - 2025',
    cgpa: '9.02',
  },
  {
    degree: 'Bachelors of Computer Application (BCA)',
    institution: 'Christ Arts, Science and Commerce College',
    location: 'Rajkot',
    period: '2019 - 2021',
    cgpa: '7.44',
  },
];

const certificates = [
  { name: 'Postman API Fundamental Student Experts', link: '#' },
  { name: 'Git Training', link: '#' },
  { name: 'Python Poster Competition', link: '#' },
  { name: 'TailwindCSS Basics', link: '#' },
  { name: 'NodeJs Course - Master the Fundamentals', link: '#' },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic background and achievements</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {edu.degree}
                  </h3>
                  <p className="text-primary mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location} • {edu.period}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                    CGPA: {edu.cgpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-accent/10">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="w-2 h-2 rounded-full bg-accent group-hover:animate-glow-pulse" />
                <span className="text-sm group-hover:text-accent transition-colors">{cert.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass p-6 rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {['Hindi', 'English', 'Gujarati'].map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted text-foreground border border-border/50"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
