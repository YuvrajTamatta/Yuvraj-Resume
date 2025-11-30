import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'MyMemoryMentor',
    date: '05/2025',
    description: 'Developed MyMemoryMentor, a web platform supporting neurodiverse learners by enabling assessments, progress tracking, and personalized interventions.',
    details: [
      'Developed the EMA (Evaluation of Math Ability) dashboard in Laravel with ajax, js and filament',
      'Integrated 14 interactive math games, automated score calculations, and downloadable performance reports',
      'Implemented the Patrol Management System, handling API data exchange with a Flutter frontend',
      'Built responsive and interactive UI components with Tailwind CSS'
    ],
    tech: ['Laravel', 'Tailwind CSS', 'Ajax', 'JavaScript', 'Filament'],
  },
  {
    title: 'WhatsMark (SaaS Upgrade)',
    date: '12/2024',
    description: 'A SaaS solution for businesses to automate WhatsApp marketing. Built with Laravel to help businesses automate and manage their WhatsApp marketing campaigns.',
    details: [
      'Enables users to send bulk messages, schedule campaigns, and analyze delivery reports',
      'All-in-one dashboard for campaign management',
      'Real-time analytics and reporting',
      'User authentication and role management'
    ],
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Ajax', 'Livewire','Alpinejs'],
  },
  {
    title: 'WhatsMark (Marketing & Automation)',
    date: '03/2025',
    description: 'A marketing and automation platform for WhatsApp communications built on Laravel, empowering businesses to create, manage, and automate their WhatsApp communications at scale.',
    details: [
      'Integrated with the official WhatsApp Business API',
      'Powerful campaign management with intelligent chatbots',
      'AI-assisted conversations for better customer engagement',
      'Bulk messaging with media support (images, videos, documents)'
    ],
    tech: ['Laravel', 'WhatsApp API', 'AI Integration', 'Ajax', 'Livewire','Alpinejs'],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Code2 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{project.date}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-secondary mt-1.5">▹</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
