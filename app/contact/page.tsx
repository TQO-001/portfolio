"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Terminal,
} from "lucide-react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("name, email, and message are required fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "transmission_failed. try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("network error. check connection and retry.");
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono selection:bg-orange-500/30 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="CONTACT" />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* LEFT: contact info + cv */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Availability block */}
            <div className="p-8 bg-zinc-900/20 border border-zinc-800 border-l-2 border-l-orange-500">
              <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                <Terminal size={14} /> Establish_Connection
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Available for freelance projects, contract and full-time roles. Response
                time typically under 24 hours.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-zinc-400">
                  Open_to_Opportunities
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="p-6 bg-zinc-900/20 border border-zinc-800 space-y-4">
              <h3 className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">
                Direct_Links
              </h3>
              <a
                href="mailto:thulanilanga001@gmail.com"
                className="flex items-center gap-4 group text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                  <Mail size={14} className="group-hover:text-orange-500 transition-colors" />
                </div>
                thulanilanga001@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/thulani-langa-09797431b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                  <Linkedin size={14} className="group-hover:text-orange-500 transition-colors" />
                </div>
                linkedin.com/in/thulani-langa
              </a>
              <a
                href="https://github.com/TQO-001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <div className="p-2 bg-zinc-900 border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                  <Github size={14} className="group-hover:text-orange-500 transition-colors" />
                </div>
                github.com/TQO-001
              </a>
            </div>

            {/* CV download */}
            <div className="p-6 bg-zinc-900/20 border border-zinc-800">
              <h3 className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest mb-4">
                System_Attachments
              </h3>
              <a
                href="/my-cv.pdf"
                download="Thulani_Langa_CV.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-bold tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
              >
                <Download size={14} />
                Download_CV.pdf
              </a>
            </div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 p-8 bg-zinc-900/20 border border-zinc-800"
          >
            <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <Send size={14} /> Compose_Transmission
            </h2>

            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 gap-4 text-center"
              >
                <CheckCircle2 size={40} className="text-green-500" />
                <p className="text-white font-bold">Transmission_Sent</p>
                <p className="text-zinc-400 text-xs max-w-xs">
                  Message received. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[10px] font-bold uppercase text-orange-500 hover:text-orange-400 tracking-widest"
                >
                  ↩ Send_Another
                </button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">
                      input_name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name..."
                      className="w-full bg-black border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-orange-500 placeholder:text-zinc-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">
                      input_email <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email..."
                      className="w-full bg-black border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-orange-500 placeholder:text-zinc-700 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">
                    input_subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject..."
                    className="w-full bg-black border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-orange-500 placeholder:text-zinc-700 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">
                    input_message <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Message content..."
                    className="w-full bg-black border border-zinc-800 p-3 text-xs text-white focus:outline-none focus:border-orange-500 placeholder:text-zinc-700 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs p-3 border border-red-500/30 bg-red-500/5">
                    <AlertCircle size={14} />
                    error: {errorMsg}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(234,88,12,0.2)] hover:shadow-[0_0_25px_rgba(234,88,12,0.4)]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Execute_Send
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer page="CONTACT" />
    </div>
  );
}