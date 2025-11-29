import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-4">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient">TAMATTA YUVRAJ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
        >
          Junior Laravel Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable web applications with Laravel, PHP, and modern web technologies.
          Passionate about clean code and innovative solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('projects')}
            className="border-primary/50 hover:bg-primary/10"
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="https://github.com/yuvrraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/yuvraj-tamatta-43a71926a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:yuvrajsinh123428@gmail.com"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="tel:+918320109245"
            className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
          >
            <Phone className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </motion.div>
    </section>
  );
};
