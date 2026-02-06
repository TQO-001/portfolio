"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiTypescript,
  SiNginx,
  SiPrisma,
  SiJavascript,
  SiPython,
  SiDotnet,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiSqlite,
  SiOpenjdk,
  SiReact,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";

import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Terminal,
  Award,
  Cpu
} from "lucide-react";

import dynamic from "next/dynamic";

// Dynamic imports (client-only effects)
const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });
const TrueFocus = dynamic(() => import("@/components/TrueFocus"), { ssr: false });

export default function Home() {
  const techStack = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <SiOpenjdk /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Prisma", icon: <SiPrisma /> },
    { name: "SQLite3", icon: <SiSqlite /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Nginx", icon: <SiNginx /> }
  ];

  // DATA MAPPING: Add new projects here
  const projects = [
    {
      title: "iGwebu Homecare",
      description: "Tier 1 Support & full-scale web deployment for healthcare providers.",
      link: "https://portfolio.laughtale.co.za/projects/igwebu",
      tags: ["REACT", "SUPPORT"],
    },
    {
      title: "Laughtale Log",
      description: "Full-stack task management ecosystem built with Next.js and Prisma.",
      link: "https://log.laughtale.co.za",
      tags: ["NEXT.JS", "DATABASE"],
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-mono selection:bg-blue-500/30 overflow-x-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <SplashCursor />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto space-y-16">
        {/* Top bar */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2 text-blue-500">
            <Terminal size={18} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase decoration-2">Thulani_Langa_</span>
          </div>
          <div className="flex gap-6 text-zinc-200 text-[10px] font-bold uppercase">
            <a href="https://github.com/TQO-001" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
            <a href="mailto:thulanilanga001@gmail.com" className="hover:text-white transition-colors">EMAIL</a>
            <a href="https://linkedin.com/in/thulani-langa-09797431b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
          </div>
        </div>

        {/* Hero */}
        <section>
          <div className="mb-6">
            <TrueFocus sentence="Thulani Langa" focusedClassName="text-white" unfocusedClassName="text-zinc-800" glowColor="rgba(59, 130, 246, 0.2)" />
          </div>
          <section className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile Picture Container */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-blue-600/20 blur-sm rounded-full" />
              <img 
                src="img/pfp.jpeg" // Replace with your actual image path (e.g., /me.png)
                alt="Thulani Langa"
                className="relative w-26 h-26 md:w-32 md:h-32 rounded-sm border border-zinc-800 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 border-2 border-[#050505]" title="System Active" />
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 flex items-center gap-3">
                <Cpu className="text-blue-600" size={32} />
                IT <span className="text-blue-600">ENGINEER</span>
              </h1>
              <p className="text-zinc-300 max-w-2xl leading-relaxed text-sm md:text-base">
                IT Engineer specializing in systems deployment, full-stack development, and infrastructure optimization. 
                Currently based in <span className="text-zinc-300">KZN, South Africa</span>.
              </p>
            </div>
          </section>
        </section>

        {/* Tech stack */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 tech-card p-8 rounded-sm bg-zinc-900/20 border border-zinc-800 hover:border-blue-500/50 transition-all">
            <h2 className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-10 flex items-center gap-2">
              <Code2 size={14} /> TECHNICAL_RESOURCES.sys
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-3 group">
                  <span className="text-3xl text-zinc-200 group-hover:text-blue-500 transition-colors duration-300">
                    {tech.icon}
                  </span>
                  <span className="text-[12px] font-bold tracking-widest uppercase text-zinc-300 group-hover:text-zinc-400 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 lg:col-span-1">
            <div className="tech-card p-8 bg-zinc-900/20 border border-zinc-800 border-l-blue-500 border-l-2">
              <span className="text-[10px] text-zinc-200 font-bold uppercase mb-2 block underline">System_Status</span>
              <p className="text-white font-bold tracking-tighter text-lg">CompTIA Network+</p>
              <p className="text-blue-500 text-[10px] mt-1 font-bold">IN_PROGRESS_2026</p>
            </div>
            <div className="tech-card p-8 bg-zinc-900/20 border border-zinc-800">
              <span className="text-[10px] text-zinc-200 font-bold uppercase mb-2 block underline">Primary_Role</span>
              <p className="text-white font-bold tracking-tighter text-lg">Full-Stack Dev</p>
              <p className="text-zinc-300 text-[10px] mt-1 font-bold">REACT / NODE / .NET</p>
            </div>
          </div>
        </section>

        {/* Mapped Projects Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-zinc-200 text-xs font-bold tracking-widest uppercase">Active_Deployments</h2>
            <div className="h-[1px] flex-1 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-6 bg-zinc-900/10 border border-zinc-800 hover:bg-zinc-900/40 group transition-all block"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={14} className="text-zinc-700 group-hover:text-blue-500" />
                </div>

                {/* Dynamic Placeholder Image */}
                <div className="mb-4 h-36 w-full border border-zinc-800 bg-zinc-900/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff08_25%,transparent_25%,transparent_50%,#ffffff08_50%,#ffffff08_75%,transparent_75%,transparent)] bg-[size:16px_16px]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-blue-500 font-bold tracking-widest uppercase">View_Deployment</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 mb-4 h-8 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[8px] px-2 py-1 bg-zinc-800 text-zinc-400 font-bold border border-zinc-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="pt-8 border-t border-zinc-900">
          <h2 className="text-white font-bold mb-6 flex items-center gap-2 text-sm">
            <Award size={16} className="text-blue-500" /> OFFICIAL_CREDENTIALS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["AZ-900", "MS-900", "MD-100"].map((cert) => (
              <div key={cert} className="p-4 bg-zinc-900/30 border border-zinc-800 text-[10px] text-zinc-300 font-bold tracking-tighter hover:text-white transition-colors">
                {cert} CERTIFIED
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}