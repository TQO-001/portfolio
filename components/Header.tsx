"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header({ page }: { page: string }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      // Added bg-black/50 to make the backdrop-blur pop more when scrolling
      className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/50 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo / System ID */}
          <div className="flex items-center gap-2 text-orange-500">
            <Terminal size={16} />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
              {page}@Thulani_Langa_:~$
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = page === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group relative flex items-center gap-1 text-[12px] font-bold tracking-widest uppercase transition-colors
                    ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {/* Terminal-style active indicator */}
                  {isActive && (
                    <span className="text-orange-500">›</span>
                  )}

                  {item.label}

                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-orange-500 transition-all
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />

                  {/* Glow for active tab */}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-2 h-[2px] bg-orange-500/40 blur-sm" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Status */}
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-zinc-500">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            System_Online
          </div>
        </div>
      </div>
    </motion.header>
  );
}