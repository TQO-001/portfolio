"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, ExternalLink, Github } from "lucide-react";

const projectList = [
  {
    title: "Project_Alpha",
    desc: "High-performance API gateway built with Next.js and Prisma.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#"
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-zinc-400">
      <Header page="PROJECTS" />
      
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-20">
        <h2 className="text-white font-bold mb-12 flex items-center gap-2 text-sm uppercase tracking-tighter">
          <Code2 size={16} className="text-blue-500" /> directory_listing /projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={project.title}
              className="group p-6 bg-zinc-900/20 border border-zinc-800 hover:border-blue-500/50 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-bold text-lg tracking-tight">{project.title}</h3>
                <Github size={18} className="hover:text-blue-500 cursor-pointer" />
              </div>
              <p className="text-xs mb-6 h-10">{project.desc}</p>
              <div className="flex gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] px-2 py-1 bg-zinc-800 text-zinc-400 font-bold border border-zinc-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer page="PROJECTS" />
    </main>
  );
}