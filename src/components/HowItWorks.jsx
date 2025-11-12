import { Shield, Swords, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Shield,
    title: 'Choose your rank and buy-in',
    desc: 'Pick your arena from Bronze to Black. Stake your buy-in to enter the fight.'
  },
  {
    icon: Swords,
    title: 'Challenge other traders 1vs1 on live markets',
    desc: 'Match with a rival using our skill-based matchmaking and trade in real-time.'
  },
  {
    icon: TrendingUp,
    title: 'Earn rewards and climb the leaderboard',
    desc: 'Win rewards, collect badges, and push your rank to the top tier.'
  }
];

export default function HowItWorks(){
  return (
    <section id="how" className="relative bg-[#070708] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(177,50,52,0.2),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(177,50,52,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="text-white/70 mt-3">Three simple steps to enter the arena</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-[#B13234]/20 border border-[#B13234]/30 flex items-center justify-center text-[#ff6668] shadow-[0_0_30px_rgba(177,50,52,0.4)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-white/70">{s.desc}</p>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#B13234] to-transparent opacity-70" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
