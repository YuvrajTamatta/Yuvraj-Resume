import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Code2, Braces, FileCode2, FileCode, Palette, Wind, Grid3x3, GitBranch, Github, Workflow, Boxes, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  color: string;
  icon: LucideIcon;
  iconColor: string;
}

const skills: Skill[] = [
  { name: 'Laravel', color: 'from-red-500 to-orange-500', icon: Code2, iconColor: '#FF2D20' },
  { name: 'PHP', color: 'from-indigo-500 to-purple-500', icon: FileCode2, iconColor: '#777BB4' },
  { name: 'MySQL', color: 'from-blue-500 to-cyan-500', icon: Database, iconColor: '#4479A1' },
  { name: 'JavaScript', color: 'from-yellow-500 to-orange-500', icon: Braces, iconColor: '#F7DF1E' },
  { name: 'HTML', color: 'from-orange-500 to-red-500', icon: FileCode, iconColor: '#E34F26' },
  { name: 'CSS', color: 'from-blue-500 to-indigo-500', icon: Palette, iconColor: '#1572B6' },
  { name: 'Tailwind', color: 'from-cyan-500 to-blue-500', icon: Wind, iconColor: '#06B6D4' },
  { name: 'Bootstrap', color: 'from-purple-500 to-indigo-500', icon: Grid3x3, iconColor: '#7952B3' },
  { name: 'Git', color: 'from-orange-500 to-red-500', icon: GitBranch, iconColor: '#F05032' },
  { name: 'GitHub', color: 'from-gray-600 to-gray-800', icon: Github, iconColor: '#181717' },
  { name: 'REST API', color: 'from-green-500 to-emerald-500', icon: Workflow, iconColor: '#10B981' },
  { name: 'MVC', color: 'from-pink-500 to-rose-500', icon: Boxes, iconColor: '#EC4899' },
  { name: 'Ajax', color: 'from-blue-500 to-cyan-500', icon: Zap, iconColor: '#0EA5E9' },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
                <div className="relative glass px-6 py-4 rounded-xl border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: skill.iconColor }}
                      />
                      <IconComponent 
                        className="relative h-6 w-6 transition-transform group-hover:scale-110" 
                        style={{ color: skill.iconColor }}
                      />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
