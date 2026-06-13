import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldAlert, Check } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Academic Integrity',
      desc: 'No fake ranks, no duplicate registrations. Every rank published by Aurum is 100% verified, matching classroom students.',
    },
    {
      icon: Compass,
      title: 'Empathy in Education',
      desc: 'We recognize that competitive prep is stressful. Our system prioritizes mental health with on-campus student counselors.',
    },
    {
      icon: Award,
      title: 'Excellence in Execution',
      desc: 'From microscopic syllabus tracking to dynamic testing, we ensure every detail is refined for student output.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-16"
    >
      {/* Intro Section */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide uppercase">
          About <span className="text-gold-gradient">Aurum Academy</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Founded by a team of IIT alumni and top educators, Aurum Academy is built on the philosophy that competitive exams are not about rote learning—they are about deep problem-solving intuition and structured discipline.
        </p>
      </section>

      {/* Founder's message */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Mock Founder Image Block */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-64 h-80 sm:w-72 sm:h-96 rounded-xl border border-brand-gold/30 bg-[#161616] relative overflow-hidden flex flex-col justify-end p-6 border-gold-glow">
            {/* Elegant luxury pattern backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0F0F] to-brand-gold-dark/10 z-0" />
            <div className="absolute inset-0 opacity-10 section-dot-grid z-0" />
            <div className="z-10 text-center space-y-1">
              <p className="text-white text-base font-bold tracking-wide uppercase">
                Dr. Ananya Shastri
              </p>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider">
                Founder & Academic Director
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                Ph.D., IIT Bombay
              </p>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide">
            Our Vision: Beyond Rote Learning
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            "Over the last decade, competitive prep in India has turned into a factory line, prioritizing rote systems that lead to massive student stress and sub-optimal mental analytical capability. 
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            At Aurum Academy, we break that cycle. We have reconstructed the syllabus to focus on logical derivations, cognitive mapping, and active recall. Our goal is to make physics, chemistry, and mathematics a source of wonder rather than fear. When a student learns to love the process of solving a problem, the ranks follow naturally."
          </p>
          <div className="border-t border-brand-gold-dark/20 pt-4">
            <span className="text-xs text-brand-gold font-bold uppercase tracking-wider block">
              — Dr. Ananya Shastri
            </span>
            <span className="text-[10px] text-gray-500 block uppercase">
              Recipient of the National Education Excellence Award
            </span>
          </div>
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
            Our Core Values
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            The foundation of our student success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <GlassCard key={idx} className="border-brand-gold-dark/10">
                <div className="w-10 h-10 rounded bg-brand-gold-dark/15 border border-brand-gold-dark/25 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {val.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
