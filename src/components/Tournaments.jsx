import { motion } from 'framer-motion';

const tournaments = [
  { title: 'Velocity Cup', status: 'Live', players: 128, prize: '5,000 v-UTC', cta: 'Join Now' },
  { title: 'Black Tier Clash', status: 'Upcoming', players: 256, prize: '10,000 v-UTC', cta: 'Notify Me' },
  { title: 'Bronze Open', status: 'Upcoming', players: 512, prize: '2,000 v-UTC', cta: 'Notify Me' },
];

export default function Tournaments(){
  return (
    <section id="tournaments" className="relative bg-[#0A0A0B] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(177,50,52,0.28),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Tournaments</h2>
            <p className="text-white/70 mt-2">Live and upcoming events</p>
          </div>
          <a href="#join" className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[#B13234] hover:bg-[#c23b3d] text-white font-medium shadow-[0_0_30px_rgba(177,50,52,0.45)]">
            See All
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tournaments.map((t, i) => (
            <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm px-2 py-1 rounded bg-white/10 text-white/90">{t.status}</span>
                <span className="text-white/60 text-sm">{t.players} players</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{t.title}</h3>
              <p className="mt-2 text-white/70">Prize Pool: {t.prize}</p>
              <div className="mt-6">
                <a href="#join" className="inline-flex items-center px-4 py-2 rounded-md bg-[#B13234] hover:bg-[#c23b3d] text-white font-medium shadow-[0_0_30px_rgba(177,50,52,0.45)]">{t.cta}</a>
              </div>
              <div className="mt-6 h-32 rounded-md bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
