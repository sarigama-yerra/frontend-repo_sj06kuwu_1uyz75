import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_0_20px_rgba(177,50,52,0.35)]">
            Enter the Arena. Trade. Win. Dominate.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            The first Gamefy Firm that turns traders into competitors.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#join" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#B13234] hover:bg-[#c23b3d] text-white font-semibold shadow-[0_0_40px_rgba(177,50,52,0.55)] transition-colors">
              Join Early Access
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur transition-colors">
              How it works
            </a>
          </div>
        </motion.div>
      </div>

      {/* Glowing edge */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#B13234] to-transparent opacity-60" />
    </section>
  );
}
