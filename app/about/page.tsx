"use client";

import { motion } from "framer-motion";
import {
  User,
  Terminal,
  MapPin,
  Zap,
  BookOpen,
  Dumbbell,
  Tv2,
  Network,
  Code2,
  ExternalLink,
  Clock,
} from "lucide-react";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const interests = [
  { icon: <Tv2 size={14} />, label: "Anime" },
  { icon: <Dumbbell size={14} />, label: "Sprint Training" },
  { icon: <Network size={14} />, label: "Networking" },
  { icon: <Code2 size={14} />, label: "Software Dev" },
];

const stats = [
  { label: "Role", val: "IT Engineer" },
  { label: "Focus", val: "Systems Support & Infrastructure" },
  { label: "Status", val: "Open to Work" },
  { label: "Location", val: "KZN, South Africa (Can relocate)" },
];

const timeline = [
  {
    year: "2026",
    title: "CompTIA Network+",
    desc: "Currently studying for Network+ certification to complement CCNA knowledge.",
    active: true,
  },
  {
    year: "2024",
    title: "iGwebu Homecare Deployment",
    desc: "Full-scale React web deployment for a healthcare provider — Tier 1 support included.",
    active: false,
  },
  {
    year: "2026",
    title: "Laughtale Log",
    desc: "Built a full-stack task management ecosystem with Next.js, Prisma, and SQLite.",
    active: false,
  },
  {
    year: "2023 - 2024",
    title: "MS-900 / MD-100 / AZ-900 Certified",
    desc: "Achieved three Microsoft certifications, cementing cloud and endpoint expertise.",
    active: false,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] font-mono selection:bg-orange-500/30 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="ABOUT" />
      <SplashCursor />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto space-y-16 overflow-x-hidden">
        {/* HERO BIO */}
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Left: identity block */}
          <motion.div
            variants={item}
            className="md:col-span-2 p-8 bg-zinc-900/20 border border-zinc-800 hover:border-orange-500/50 transition-all"
          >
            <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <User size={14} /> Profile_Summary
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              I&apos;m Thulani Langa — a motivated IT professional with hands-on experience in web development, technical troubleshooting, 
              and client support. Strong foundation in Windows and Linux systems, networking fundamentals, and 
              Microsoft technologies with Azure and Microsoft 365 certifications. Eager to leverage technical skills 
              and problem-solving abilities in a helpdesk support role. Known for clear communication, patience, 
              and ability to break down complex technical concepts for non-technical users.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Most of what I know wasn&apos;t taught in a classroom. I learned by shipping
              real projects, breaking things, and debugging at midnight. Currently
              pursuing CompTIA Network+ while working on production deployments for funsies.
            </p>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <MapPin size={12} className="text-orange-500" />
              KwaZulu-Natal, South Africa &mdash; Remote available
            </div>
          </motion.div>

          {/* Right: system specs */}
          <motion.div
            variants={item}
            className="p-8 bg-zinc-900/20 border border-zinc-800 space-y-6"
          >
            <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Terminal size={14} /> System_Specs
            </h2>
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-orange-500/40 pl-4">
                <p className="text-[10px] uppercase font-bold text-zinc-600">{s.label}</p>
                <p className="text-xs text-white font-bold">{s.val}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* BLOG LINK */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-zinc-900/20 border border-zinc-800 hover:border-orange-500/50 transition-all"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                <BookOpen size={14} /> Blog_Feed
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed max-w-xl">
                I&apos;m starting a blog — writing about systems, self-taught development,
                networking, and what it&apos;s actually like to build things without a
                traditional CS background.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-3 px-6 py-3 border border-orange-500/40 text-orange-400 text-[10px] font-bold tracking-widest uppercase hover:bg-orange-500/10 hover:border-orange-500 transition-all group"
            >
              <Clock size={14} className="group-hover:animate-pulse" />
              Coming_Soon
              <ExternalLink size={12} />
            </a>
          </div>
        </motion.section>

        {/* INTERESTS */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-orange-400 text-sm font-bold tracking-widest uppercase">
              Interests
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest) => (
              <div
                key={interest.label}
                className="p-6 bg-zinc-900/20 border border-zinc-800 hover:border-orange-500/50 transition-all flex flex-col items-center gap-3 group"
              >
                <span className="text-zinc-400 group-hover:text-orange-500 transition-colors">
                  {interest.icon}
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-zinc-300">
                  {interest.label}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TIMELINE */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-orange-400 text-sm font-bold tracking-widest uppercase">
              Version_History
            </h2>
            <div className="h-[1px] flex-1 bg-zinc-800" />
          </div>
          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-1 shrink-0 transition-colors ${
                      entry.active
                        ? "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
                        : "bg-zinc-700 group-hover:bg-orange-500/50"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-[1px] flex-1 bg-zinc-800 mt-1" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-orange-500/70 tracking-widest">
                      {entry.year}
                    </span>
                    {entry.active && (
                      <span className="text-[8px] px-2 py-0.5 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold uppercase tracking-widest">
                        IN_PROGRESS
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1">{entry.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{entry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* QUOTE */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 bg-zinc-900/20 border-l-2 border-l-orange-500 border border-zinc-800"
        >
          <Zap size={16} className="text-orange-500 mb-4" />
          <blockquote className="text-zinc-300 text-sm leading-relaxed italic max-w-2xl">
            &ldquo;If we believe in nothing, if nothing has any meaning and if we can affirm no
            values whatsoever, then everything is possible and nothing has any
            importance.&rdquo;
          </blockquote>
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mt-4">
            &mdash; Albert Camus
          </p>
        </motion.section>
      </main>

      <Footer page="ABOUT" />
    </div>
  );
}