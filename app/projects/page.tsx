"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Terminal, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  link?: string;
  github?: string;
  status: "live" | "wip" | "archived";
}

const projects: Project[] = [
  {
    title: "Simple Brand/Product Website (iGwebu)",
    description: "Full-scale web presence & hosting optimization.",
    longDesc: "Architected end-to-end lifecycle from domain configuration to hosting optimization. Diagnosed cross-browser compatibility issues and provided Tier 1 technical support to stakeholders.",
    tags: ["React", "Hosting Optmization", "Tier 1 Support", "UI/UX"],
    link: "https://portfolio.laughtale.co.za/projects/igwebu",
    status: "live",
  },
  {
    title: "Technical Knowledge Base (Little Garden)",
    description: "Centralized Digital Garden for technical workflows.",
    longDesc: "Architected using Docusaurus and Git to document troubleshooting for Windows 10/11, Linux administration, and Networking (TCP/IP, DNS, DHCP).",
    tags: ["Docusaurus", "Git", "Networking", "Linux"],
    link: "https://little-garden.laughtale.co.za",
    status: "live",
  },
  {
    title: "Personal Productivity Suite (Ohara)",
    description: "Custom knowledge management tool (Notion/Obsidian clone).",
    longDesc: "Engineered to practice advanced data organization and software architecture. Focused on efficient information retrieval and data persistence.",
    tags: ["Software Architecture", "Knowledge Management", "Data Persistence"],
    link: "https://ohara.laughtale.co.za",
    status: "wip",
  },
  {
    title: "SaaS Platform Development (Laughtale)",
    description: "Full-stack VPS deployment and server security.",
    longDesc: "Managed full-stack deployment on a VPS. Configured server environments including domain management, SSL implementation, and hosting optimization.",
    tags: ["VPS", "SSL", "Server Management", "SaaS"],
    link: "https://laughtale.co.za",
    status: "wip",
  },
  {
    title: "Portfolio Website (This Site)",
    description: "Automated deployment and technical showcase.",
    longDesc: "Developed a landing page with integrated automated deployment workflows to ensure the site stays updated with latest projects and skills.",
    tags: ["Next.js", "CI/CD", "Automated Workflows"],
    link: "https://portfolio.laughtale.co.za",
    status: "live",
  }
];

const statusConfig = {
  live: {
    label: "LIVE",
    className: "bg-green-500/10 border-green-500/30 text-green-400",
    dot: "bg-green-500",
  },
  wip: {
    label: "IN_PROGRESS",
    className: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    dot: "bg-orange-500 animate-pulse",
  },
  archived: {
    label: "ARCHIVED",
    className: "bg-zinc-800 border-zinc-700 text-zinc-500",
    dot: "bg-zinc-500",
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const live = projects.filter((p) => p.status === "live");
  const building = projects.filter((p) => p.status === "wip");
  const archived = projects.filter((p) => p.status === "archived");

  return (
    <div className="min-h-screen bg-[#050505] font-mono selection:bg-orange-500/30 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="PROJECTS" />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto space-y-16 overflow-x-hidden">
        {/* Header block */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 bg-zinc-900/20 border border-zinc-800 border-l-2 border-l-orange-500"
        >
          <div className="flex items-center gap-2 text-orange-500 text-sm font-bold tracking-widest uppercase mb-3">
            <Terminal size={14} />
            <span>$ ls -la /projects</span>
          </div>
          <p className="text-zinc-400 text-sm">
            {projects.length} entries found &mdash; {live.length} deployed, {building.length} in progress, {archived.length} archived.
          </p>
        </motion.section>

        {/* Live deployments */}
        <ProjectGroup
          label="Active_Deployments"
          projects={live}
        />

        {/* WIP */}
        <ProjectGroup
          label="Work_In_Progress"
          projects={building}
        />

        {/* Archived */}
        <ProjectGroup
          label="Archived"
          projects={archived}
        />
      </main>

      <Footer page="PROJECTS" />
    </div>
  );
}

function ProjectGroup({
  label,
  projects,
}: {
  label: string;
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <h2 className="text-orange-400 text-sm font-bold tracking-widest uppercase">
          {label}
        </h2>
        <div className="h-[1px] flex-1 bg-zinc-800" />
        <span className="text-zinc-600 text-[10px] font-bold">{projects.length}</span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {projects.map((project) => {
          const status = statusConfig[project.status];
          return (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="p-6 bg-zinc-900/10 border border-zinc-800 hover:bg-zinc-900/40 hover:border-orange-500/30 transition-all group flex flex-col"
            >
              {/* Title row */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-bold group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[8px] px-2 py-0.5 border font-bold mt-1 ${status.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors"
                      title="View on GitHub"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-orange-500 transition-colors"
                      title="View live"
                    >
                      <Globe size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed mb-4 flex-1">
                {project.longDesc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] px-2 py-1 bg-zinc-800 text-zinc-400 font-bold border border-zinc-700/50 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}