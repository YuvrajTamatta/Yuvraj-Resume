import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know more about my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am an enthusiastic and dedicated Junior Laravel Developer with hands-on experience gained through internships, 
              successfully contributing to live projects. I am skilled in PHP, the Laravel framework, MySQL, HTML, CSS, JavaScript, 
              and Git. I possess a strong understanding of MVC architecture, RESTful APIs, and CRUD operations. I am eager to apply 
              my practical knowledge and continue learning in a professional development environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">What I Bring</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">Writing maintainable and scalable solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Rocket className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Learner</h4>
                  <p className="text-sm text-muted-foreground">Quick to adapt to new technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Team Player</h4>
                  <p className="text-sm text-muted-foreground">Collaborative and communicative</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
