"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Terminal, Code2 } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-zinc-400 selection:bg-blue-500/30">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="ABOUT" />
      
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-tighter">
              <User size={16} className="text-blue-500" /> profile_summary
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              I am a developer focused on building robust digital infrastructure. My approach 
              is rooted in clean architecture and terminal-inspired design aesthetics.
            </p>
            <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-sm italic text-xs">
              "Logic is the beginning of wisdom, not the end."
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-white font-bold flex items-center gap-2 text-sm uppercase tracking-tighter">
              <Terminal size={16} className="text-blue-500" /> system_specs
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Role", val: "Fullstack Dev" },
                { label: "Focus", val: "Performance" },
                { label: "Status", val: "Active" },
                { label: "Location", val: "Remote/ZA" }
              ].map((stat) => (
                <div key={stat.label} className="border-l border-zinc-800 pl-4">
                  <p className="text-[10px] uppercase font-bold text-zinc-600">{stat.label}</p>
                  <p className="text-xs text-white">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      <Footer page="ABOUT" />
    </main>
  );
}