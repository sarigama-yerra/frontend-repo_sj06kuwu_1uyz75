import { Twitter, MessageSquare, Copyright } from 'lucide-react';

export default function Footer(){
  return (
    <footer className="relative bg-[#080809] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B13234] to-red-700 shadow-[0_0_20px_rgba(177,50,52,0.6)]" />
            <span className="text-white font-semibold">Anvers Arena</span>
          </div>
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-white/50 text-sm flex items-center justify-center gap-2">
          <Copyright className="w-4 h-4" /> 2025 Anvers Arena. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
