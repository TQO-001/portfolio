import { Terminal } from "lucide-react";

export default function Footer({ page }: { page: string }) {
  return (
    <footer className="mt-24 border-t border-zinc-800 pt-6 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* System ID */}
        <div className="flex items-center gap-2 text-blue-500">
          <Terminal size={16} />
          <span className="text-[16px] font-bold tracking-[0.3em] uppercase">
            { page }@Thulani_Langa_:~$

          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-zinc-400 text-[12px] font-bold uppercase">
          <a
            href="https://github.com/TQO-001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:thulanilanga001@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/thulani-langa-09797431b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-6 text-center text-[11px] text-zinc-600 font-bold tracking-widest uppercase">
        © {new Date().getFullYear()} · Am I really doing everything that I can or am I just pretending
      </div>
    </footer>
  );
}
