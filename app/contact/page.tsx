"use client";

import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Name, email, and message are required.");
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

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Transmission failed.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Network error. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] font-mono selection:bg-orange-500/30 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <Header page="CONTACT" />

      <main className="relative z-10 p-6 md:p-24 max-w-6xl mx-auto overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 bg-zinc-900/20 border border-zinc-800 border-l-2 border-l-orange-500">
              <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                <Terminal size={14} /> Establish_Connection
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Available for freelance projects, contract and full-time roles.
                Response time typically under 24 hours.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase text-zinc-400">
                  Open_to_Opportunities
                </span>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/20 border border-zinc-800 space-y-4">
              <h3 className="text-[10px] font-bold uppercase text-zinc-500 tracking-widest">
                Direct_Links
              </h3>

              <a
                href="mailto:thulanilanga001@gmail.com"
                className="flex items-center gap-4 group text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <Mail size={14} />
                thulanilanga001@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/thulani-langa-09797431b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xs text-zinc-400 hover:text-white"
              >
                <Linkedin size={14} />
                linkedin.com/in/thulani-langa
              </a>

              <a
                href="https://github.com/TQO-001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xs text-zinc-400 hover:text-white"
              >
                <Github size={14} />
                github.com/TQO-001
              </a>
            </div>

            <div className="p-6 bg-zinc-900/20 border border-zinc-800">
              <a
                href="/my-cv.pdf"
                download="Thulani_Langa_CV.pdf"
                className="inline-flex items-center gap-3 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-bold tracking-widest uppercase"
              >
                <Download size={14} />
                Download_CV.pdf
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 p-8 bg-zinc-900/20 border border-zinc-800"
          >
            <h2 className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <Send size={14} /> Compose_Transmission
            </h2>

            {status === "success" ? (
              <div className="flex flex-col items-center py-20 gap-4">
                <CheckCircle2 size={40} className="text-green-500" />
                <p className="text-white font-bold">Transmission_Sent</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[10px] uppercase text-orange-500"
                >
                  ↩ Send_Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-zinc-800 text-xs"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-zinc-800 text-xs"
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-zinc-800 text-xs"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-black border border-zinc-800 text-xs"
                />

                {status === "error" && (
                  <div className="flex gap-2 text-red-400 text-xs">
                    <AlertCircle size={14} /> {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-orange-600 text-white text-xs uppercase"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={14} className="animate-spin inline mr-2" />
                      Transmitting…
                    </>
                  ) : (
                    "Execute_Send"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <Footer page="CONTACT" />
    </div>
  );
}
