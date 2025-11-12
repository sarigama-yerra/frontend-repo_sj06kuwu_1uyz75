import { Twitter, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Community(){
  return (
    <section id="community" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_20%,rgba(177,50,52,0.25),transparent),radial-gradient(700px_400px_at_80%_0%,rgba(177,50,52,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Join the Revolution. Become a Gamefy Trader.</h2>
          <p className="text-white/70 mt-3">Connect with thousands of arena-ready traders.</p>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#1D9BF0]/10 hover:bg-[#1D9BF0]/20 text-white border border-white/10 transition-colors">
            <Twitter className="w-5 h-5 text-[#1D9BF0]" /> Follow on Twitter
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-white border border-white/10 transition-colors">
            <MessageSquare className="w-5 h-5 text-[#5865F2]" /> Join Discord
          </a>
        </motion.div>
      </div>
    </section>
  )
}
