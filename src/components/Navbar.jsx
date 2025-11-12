import { Menu, X, Trophy, Flame } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B13234] to-red-700 flex items-center justify-center shadow-[0_0_20px_rgba(177,50,52,0.6)]">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-wider leading-none">
            <span className="font-[Orbitron] text-base sm:text-lg">Anvers Arena</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#how" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#tournaments" className="hover:text-white transition-colors">Tournaments</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </nav>
        <div className="hidden md:flex">
          <a href="#join" className="inline-flex items-center gap-2 bg-[#B13234] hover:bg-[#c23b3d] text-white font-medium px-4 py-2 rounded-md shadow-[0_0_30px_rgba(177,50,52,0.45)] transition-colors">
            <Trophy className="w-4 h-4" /> Join Early Access
          </a>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70">
          <nav className="px-4 py-3 flex flex-col gap-3 text-white/90">
            <a onClick={() => setOpen(false)} href="#how" className="py-2">How it works</a>
            <a onClick={() => setOpen(false)} href="#features" className="py-2">Features</a>
            <a onClick={() => setOpen(false)} href="#tournaments" className="py-2">Tournaments</a>
            <a onClick={() => setOpen(false)} href="#community" className="py-2">Community</a>
            <a onClick={() => setOpen(false)} href="#join" className="py-2 text-[#ff5a5c]">Join Early Access</a>
          </nav>
        </div>
      )}
    </header>
  );
}
