import { Terminal, Award, Globe, Mail, Github, Linkedin, Cpu, Code2, Shield, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-400 font-mono p-4 md:p-12">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <main className="relative max-w-5xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12 border-2-b border-2-zinc-800 pb-4">
          <div className="flex items-center gap-2 text-blue-500">
            <Terminal size={18} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Thulani_Langa_</span>
          </div>
          <div className="hidden md:block text-[10px] text-zinc-600">
            LOC: KZN_SOUTH_AFRICA // GITHUB: TQO-001 // ALIAS: THE QUIET ONE
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
            IT <span className="text-blue-600">ENGINEER</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl leading-tight">
            Building robust <span className="text-zinc-200">digital infrastructure</span> and 
            <span className="text-zinc-200"> full-stack applications</span>. Currently architecting 
            at iStudent Academy.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tech Stack - The "Umphf" Section */}
          <div className="md:col-span-2 bg-zinc-900/30 border-2 border-2-zinc-800 p-6 rounded-xl backdrop-blur-sm">
            <h2 className="text-white font-bold mb-6 flex items-center gap-2">
              <Code2 size={18} className="text-blue-500" /> Technologies & Core Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'SQLite', 'Node.js', 'Python', 'Git'].map((tech) => (
                <span key={tech} className="px-5 py-5 bg-zinc-800 text-zinc-300 text-xs rounded-xl border-2 border-2-zinc-700 hover:border-2-blue-500 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
            
            <h2 className="text-white font-bold mt-10 mb-6 flex items-center gap-2">
              <Shield size={18} className="text-blue-500" /> Systems & Infrastructure
            </h2>
            <div className="flex flex-wrap gap-3">
              {['Azure Cloud', 'Linux/Ubuntu', 'Active Directory', 'Nginx', 'Docker', 'Cisco Networking', 'Windows Server'].map((sys) => (
                <span key={sys} className="px-5 py-5 bg-blue-500/10 text-blue-400 text-xs rounded-xl border-2 border-2-blue-500/20">
                  {sys}
                </span>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="bg-blue-600 p-6 rounded-xl flex flex-col justify-between text-white">
            <div>
              <h2 className="text-2xl font-bold leading-none mb-2 text-black">LET'S CONNECT</h2>
              <p className="text-blue-100 text-sm">Available for Tier 3 Support & Dev projects.</p>
            </div>
            <div className="space-y-4 mt-8">
              <a href="mailto:thulanilanga001@gmail.com" className="flex items-center justify-between group">
                <span className="font-bold">EMAIL</span>
                <Mail className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/thulani-langa-09797431b" className="flex items-center justify-between group">
                <span className="font-bold">LINKEDIN</span>
                <Linkedin className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/TQO-001" className="flex items-center justify-between group">
                <span className="font-bold">GITHUB</span>
                <Github className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Experience/Project Card */}
          <div className="bg-zinc-900/30 border-2 border-2-zinc-800 p-6 rounded-xl">
            <h2 className="text-white font-bold mb-4 flex items-center gap-2">
              <Globe size={18} className="text-blue-500" /> Featured Work
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-white text-sm font-bold underline">iGwebu Homecare</p>
                <p className="text-xs text-zinc-500 mt-1 italic italic">Web Presence & Hosting Optimization</p>
              </div>
              <div className="pt-4 border-2-t border-2-zinc-800">
                <p className="text-white text-sm font-bold underline">Laughtale Log</p>
                <p className="text-xs text-zinc-500 mt-1 italic">Full-stack Task Ecosystem (In Dev)</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-2 bg-zinc-900/30 border-2 border-2-zinc-800 p-6 rounded-xl flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-white font-bold mb-4 flex items-center gap-2">
                <Award size={18} className="text-blue-500" /> Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-zinc-800/50 rounded border-2 border-2-zinc-700">AZ-900: Azure Fundamentals</div>
                <div className="p-3 bg-zinc-800/50 rounded border-2 border-2-zinc-700">MS-900: M365 Fundamentals</div>
                <div className="p-3 bg-zinc-800/50 rounded border-2 border-2-zinc-700">MD-100: Windows Client</div>
                <div className="p-3 bg-blue-500/10 rounded border-2 border-2-blue-500/30 text-blue-400 font-bold tracking-tighter uppercase">CompTIA Network+ (In Progress)</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}