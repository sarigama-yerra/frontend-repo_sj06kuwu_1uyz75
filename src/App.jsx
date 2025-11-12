import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Tournaments from './components/Tournaments';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Tournaments />
        <section id="join" className="relative bg-[#0a0a0b] py-20">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_-10%,rgba(177,50,52,0.2),transparent)]" />
          <div className="relative max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white">Ready to step into the Arena?</h3>
            <p className="text-white/70 mt-3">Join Early Access to compete in ranked 1vs1 matches, tournaments and seasonal events.</p>
            <div className="mt-6">
              <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#B13234] hover:bg-[#c23b3d] text-white font-semibold shadow-[0_0_40px_rgba(177,50,52,0.55)] transition-colors">Join Early Access</a>
            </div>
          </div>
        </section>
        <Community />
      </main>
      <Footer />
    </div>
  )
}
