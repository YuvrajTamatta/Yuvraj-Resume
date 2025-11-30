import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Laravel Developer",
    company: "The Web Logics",
    location: "Jaipur",
    period: "05/2025 - Present",
    description:
      "A creative tech company focused on personalized and digital memory solutions",
    responsibilities: [
      "Developed and optimized backend modules for patrol management, EMA workflows, and admin dashboards using Laravel",
      "Built interactive frontend interfaces with Html template blade, and Tailwind CSS for seamless user experience",
      "Integrated dynamic data tables, filters, and reports using Laravel package for efficient data management",
      "Collaborated with the design and QA teams to deliver scalable and efficient web solutions",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Corbital Technologies LLP",
    location: "Rajkot",
    period: "08/2024 - 04/2025",
    description: "A tech company specializing in innovative software solutions",
    responsibilities: [
      "Contributed to the development of WhatsMark, a Laravel-based platform for WhatsApp Business marketing",
      "Developed modules for user authentication, media uploads, and message templates",
      "Collaborated with cross-functional teams to ensure high-quality code delivery using Git",
      "Developed frontend in Tailwind CSS",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 * index }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-8 w-8 text-primary" />
                      <p className="text-xl text-primary">{exp.company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
