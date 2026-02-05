import { Terminal, Award, Globe, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      {/* Header Section */}
      <header className="mb-16">
        <div className="flex items-center gap-2 text-blue-500 mb-4 animate-pulse">
          <Terminal size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">System Active</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
          Thulani Langa
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          IT Engineer & Software Developer. Specialized in <span className="text-white">Systems Support</span> and <span className="text-white">Azure Cloud Infrastructure</span>.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Certs & Education */}
        <section className="space-y-8">
          <div>
            <h2 className="text-blue-500 text-sm font-bold uppercase mb-4 flex items-center gap-2">
              <Award size={16} /> Certifications
            </h2>
            <ul className="space-y-3">
              <li className="group">
                <span className="block text-white">Azure Fundamentals (AZ-900)</span>
                <span className="text-xs text-zinc-500">Microsoft Certified</span>
              </li>
              <li className="group">
                <span className="block text-white">M365 Fundamentals (MS-900)</span>
                <span className="text-xs text-zinc-500">Microsoft Certified</span>
              </li>
              <li className="text-zinc-600 italic">
                Currently Pursuing: CompTIA Network+
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-blue-500 text-sm font-bold uppercase mb-4">Education</h2>
            <p className="text-white">iStudent Academy</p>
            <p className="text-xs text-zinc-500">IT Engineering: Software & Networking</p>
          </div>
        </section>

        {/* Right Column: Projects & Socials */}
        <section className="space-y-8">
          <div>
            <h2 className="text-blue-500 text-sm font-bold uppercase mb-4 flex items-center gap-2">
              <Globe size={16} /> Recent Work
            </h2>
            <div className="border border-zinc-800 p-4 rounded-md bg-zinc-900/30">
              <h3 className="text-white font-medium flex items-center gap-2">
                iGwebu Homecare <ExternalLink size={12} className="text-zinc-500" />
              </h3>
              <p className="text-sm text-zinc-400 mt-1">Full-scale web presence & Tier 1 Support.</p>
            </div>
          </div>

          <div>
            <h2 className="text-blue-500 text-sm font-bold uppercase mb-4">Connect</h2>
            <div className="flex gap-4">
              <a href="https://github.com/TQO-001" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/thulani-langa-09797431b" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:thulanilanga001@gmail.com" className="text-zinc-400 hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-24 pt-8 border-t border-zinc-900 text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
        Status: Online // Hosted: Ubuntu VPS // Port: 10001
      </footer>
    </div>
  );
}