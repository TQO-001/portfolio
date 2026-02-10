"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github, Send, FileText, Download } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-zinc-400 selection:bg-blue-500/30">
      <Header page="CONTACT" />
      
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info & CV */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-white font-bold mb-6 flex items-center gap-2 text-sm uppercase tracking-tighter">
              <Send size={16} className="text-blue-500" /> establish_connection
            </h2>
            <p className="text-sm leading-relaxed mb-8">
              Available for freelance opportunities and full-stack roles. 
              Drop a message or download my technical credentials below.
            </p>

            <div className="space-y-4 mb-10">
              <a href="mailto:thulanilanga001@gmail.com" className="flex items-center gap-4 group text-xs hover:text-white transition-colors">
                <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/50">
                  <Mail size={14} />
                </div>
                thulanilanga001@gmail.com
              </a>
              <a href="https://linkedin.com/in/thulani-langa-09797431b" target="_blank" className="flex items-center gap-4 group text-xs hover:text-white transition-colors">
                <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-blue-500/50">
                  <Linkedin size={14} />
                </div>
                linkedin.com/in/thulani-langa
              </a>
            </div>

            {/* CV DOWNLOAD BUTTON */}
            <div className="pt-6 border-t border-zinc-900">
                <h3 className="text-[10px] uppercase font-bold text-zinc-600 mb-4">system_attachments</h3>
                <a 
                    href="/my-cv.pdf" 
                    download="Thulani_Langa_CV.pdf"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold tracking-widest uppercase transition-all rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                >
                    <Download size={14} />
                    Download_CV.pdf
                </a>
            </div>
          </motion.div>

          {/* Right Side: Simple Terminal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 bg-zinc-900/20 border border-zinc-800 rounded-sm"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2">input_name</label>
                <input type="text" className="w-full bg-black border border-zinc-800 p-3 text-xs focus:outline-none focus:border-blue-500 text-white" placeholder="Name..." />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2">input_email</label>
                <input type="email" className="w-full bg-black border border-zinc-800 p-3 text-xs focus:outline-none focus:border-blue-500 text-white" placeholder="Email..." />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2">input_message</label>
                <textarea rows={4} className="w-full bg-black border border-zinc-800 p-3 text-xs focus:outline-none focus:border-blue-500 text-white resize-none" placeholder="Message content..."></textarea>
              </div>
              <button className="w-full py-3 border border-blue-500/50 text-blue-500 text-[10px] font-bold uppercase hover:bg-blue-500/10 transition-all">
                Execute_Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer page="CONTACT" />
    </main>
  );
}