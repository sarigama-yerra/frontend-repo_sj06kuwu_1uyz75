import { Cpu, Gauge, Medal, Coins, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: BarChart3, title: 'Real-time charts powered by UTC technology', desc: 'Lightning-fast data streams and sub-second updates for an ultra-responsive trading duel.' },
  { icon: Gauge, title: 'Skill-based matchmaking', desc: 'Face opponents within your MMR and prove your edge in fair fights.' },
  { icon: Medal, title: 'Seasonal rewards & badges', desc: 'Collect exclusive cosmetics, titles, and seasonal trophies.' },
  { icon: Coins, title: 'In-game currency v-UTC', desc: 'Earn, stake, and spend v-UTC to enter arenas and purchase boosts.' },
  { icon: Cpu, title: 'Ranked Arenas from Bronze to Black', desc: 'Rise through Bronze, Silver, Gold, Platinum, Diamond, and Black tiers.' },
];

export default function Features(){
  return (
    <section id="features" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_70%_-10%,rgba(177,50,52,0.25),transparent),radial-gradient(800px_400px_at_0%_20%,rgba(177,50,52,0.2),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Gamefy Features</h2>
          <p className="text-white/70 mt-3">Built for speed, fairness, and hype</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-[#B13234]/20 border border-[#B13234]/30 flex items-center justify-center text-[#ff6668] shadow-[0_0_30px_rgba(177,50,52,0.4)]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#B13234] to-transparent opacity-70" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
