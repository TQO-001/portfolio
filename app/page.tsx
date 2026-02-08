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
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Terminal,
  Award,
  Cpu
} from "lucide-react";

import dynamic from "next/dynamic";

// Client-only components
const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });
const TrueFocus = dynamic(() => import("@/components/TrueFocus"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="Home"/>
      <SplashCursor />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto space-y-16">

        
        {/* HERO */}
        <section id="home">
          <div className="mb-6">
            <TrueFocus
              sentence="Thulani Langa"
              focusedClassName="text-white"
              unfocusedClassName="text-zinc-800"
              glowColor="rgba(59, 130, 246, 0.2)"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Profile */}
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-blue-600/20 blur-sm rounded-sm" />
              <img
                src="/img/pfp.jpeg"
                alt="Thulani Langa"
                className="relative w-26 h-26 md:w-32 md:h-32 rounded-sm border border-zinc-800 object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div
                className="absolute bottom-0 right-0 w-3 h-3 bg-blue-500 border-2 border-[#050505]"
                title="System Active"
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 flex items-center gap-3">
                <Cpu className="text-blue-600" size={32} />
                IT <span className="text-blue-600">ENGINEER</span>
              </h1>

              <p className="text-zinc-300 max-w-2xl leading-relaxed text-sm md:text-base">
                IT Engineer specializing in systems deployment, full-stack development,
                and infrastructure optimization. Currently based in{" "}
                <span className="text-zinc-300">KZN, South Africa</span>.
              </p>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3 p-8 bg-zinc-900/20 border border-zinc-800 hover:border-blue-500/50 transition-all">
            <h2 className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-10 flex items-center gap-2">
              <Code2 size={14} /> Technical_Resources.sys
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-3 group">
                  <span className="text-3xl text-zinc-200 group-hover:text-blue-500 transition-colors">
                    {tech.icon}
                  </span>
                  <span className="text-[12px] font-bold tracking-widest uppercase text-zinc-300 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-4">
            <div className="p-8 bg-zinc-900/20 border border-zinc-800 border-l-2 border-l-blue-500">
              <span className="text-[10px] text-zinc-200 font-bold uppercase block mb-2 underline">
                System_Status
              </span>
              <p className="text-white font-bold tracking-tighter text-lg">
                CompTIA Network+
              </p>
              <p className="text-blue-500 text-[10px] mt-1 font-bold">
                IN_PROGRESS_2026
              </p>
            </div>

            <div className="p-8 bg-zinc-900/20 border border-zinc-800">
              <span className="text-[10px] text-zinc-200 font-bold uppercase block mb-2 underline">
                Primary_Role
              </span>
              <p className="text-white font-bold tracking-tighter text-lg">
                Full-Stack Dev
              </p>
              <p className="text-zinc-300 text-[10px] mt-1 font-bold">
                REACT / NODE / .NET
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-zinc-200 text-xs font-bold tracking-widest uppercase">
              Active_Deployments
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-zinc-900/10 border border-zinc-800 hover:bg-zinc-900/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold group-hover:text-blue-500">
                    {project.title}
                  </h3>
                  <ExternalLink size={14} className="text-zinc-700 group-hover:text-blue-500" />
                </div>

                <p className="text-xs text-zinc-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] px-2 py-1 bg-zinc-800 text-zinc-400 font-bold border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="contact" className="pt-8 border-t border-zinc-900">
          <h2 className="text-white font-bold mb-6 flex items-center gap-2 text-sm">
            <Award size={16} className="text-blue-500" /> Official_Credentials
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["AZ-900", "MS-900", "MD-100"].map((cert) => (
              <div
                key={cert}
                className="p-4 bg-zinc-900/30 border border-zinc-800 text-[10px] text-zinc-300 font-bold tracking-tighter hover:text-white transition-colors"
              >
                {cert} CERTIFIED
              </div>
            ))}
          </div>
        </section>

        <Footer page="Home"/>
      </main>
    </div>
  );
}
