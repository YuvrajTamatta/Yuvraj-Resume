import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's build something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:yuvrajsinh123428@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                  yuvrajsinh123428@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+918320109245"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-semibold group-hover:text-secondary transition-colors">
                  +91 8320109245
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/yuvraj-tamatta-43a71926a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="font-semibold text-sm group-hover:text-accent transition-colors">
                  Yuvraj Tamatta
                </p>
              </div>
            </a>

            <a
              href="https://github.com/yuvrraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  @yuvrraj
                </p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
            <div className="p-3 rounded-lg bg-muted">
              <MapPin className="h-6 w-6 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-semibold">Rajkot, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground mb-4">Open to new opportunities and collaborations</p>
          <Button
            size="lg"
            onClick={() => window.location.href = 'mailto:yuvrajsinh123428@gmail.com'}
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-border/50 text-center"
      >
        <p className="text-muted-foreground">
          © 2025 Tamatta Yuvraj. Built with React, Tailwind CSS, Three.js & Lenis
        </p>
      </motion.footer>
    </section>
  );
};
