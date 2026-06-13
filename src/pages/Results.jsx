import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Results() {
  const [activeTab, setActiveTab] = useState('jee-advanced');

  const stats = [
    { target: '1', label: 'All India Rank 1', desc: 'JEE Advanced' },
    { target: '4', label: 'All India Rank 4', desc: 'NEET Pre-Medical' },
    { target: '99', prefix: 'Top ', suffix: '%', label: 'Classroom Selection Rate', desc: 'IITs / Gov. Medical' },
    { target: '185', suffix: '+', label: 'Selections in Top 500', desc: 'Across JEE & NEET' },
  ];

  const toppersData = {
    'jee-advanced': [
      {
        rank: 'AIR 1',
        name: 'Aarav Goel',
        score: '352 / 360 Marks',
        program: '2-Year Integrated Classroom Program',
        quote: 'The CBT (Computer-Based Test) series at Aurum matches the actual JEE platform exactly. The level of analysis we received after each test helped me identify calculation patterns and fix them. Dr. Shastri\'s customized sheets made advanced physics my strongest subject.',
      },
      {
        rank: 'AIR 8',
        name: 'Meera Nair',
        score: '341 / 360 Marks',
        program: '2-Year Integrated Classroom Program',
        quote: 'The academic environment here is unmatched. Instead of just solving questions, the mentors taught us how to filter questions in the exam room. The focus on first-principles concept building is why I succeeded.',
      },
    ],
    'jee-main': [
      {
        rank: 'AIR 12',
        name: 'Kabir Malhotra',
        score: '100 Percentile (300/300)',
        program: '1-Year Classroom Course',
        quote: 'I joined Aurum for my Class XII prep. The speed-math shortcuts and coordinate geometry tips by Prof. Sen allowed me to complete the math section in 45 minutes, leaving ample time to verify physics calculations.',
      },
      {
        rank: 'AIR 32',
        name: 'Priya Sharma',
        score: '99.98 Percentile',
        program: '2-Year Classroom Program',
        quote: 'The daily practice papers (DPPs) kept me consistent. Whenever I felt stuck, the dedicated 1-on-1 doubt clearing desk helped resolve concepts instantly instead of dragging them for weeks.',
      },
    ],
    neet: [
      {
        rank: 'AIR 4',
        name: 'Rohan Deshmukh',
        score: '715 / 720 Marks',
        program: '2-Year Integrated Classroom Program',
        quote: 'The NCERT line-by-line decoding sessions at Aurum are legendary. It helped me score 360/360 in Biology. Dr. Baranwal\'s biology flowcharts made complex human physiology processes incredibly easy to recall under exam pressure.',
      },
      {
        rank: 'AIR 15',
        name: 'Sneha Reddy',
        score: '710 / 720 Marks',
        program: '2-Year Classroom Program',
        quote: 'Physics numericals were my biggest fear when I started. The faculty at Aurum broke down numericals step-by-step, showing us how to approach problems without complex equations.',
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16"
    >
      {/* Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-wide uppercase">
          Proven <span className="text-gold-gradient">Results Statistics</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          At Aurum Academy, we believe in verified success. Unlike others, we do not publish duplicate registrations. Explore the real scores of our classroom toppers.
        </p>
      </section>

      {/* Ranks Counter Row */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <GlassCard key={idx} className="text-center py-8 border-brand-gold-dark/15">
            <Trophy className="w-6 h-6 text-brand-gold mx-auto mb-3" />
            <p className="text-2xl sm:text-3xl font-extrabold text-brand-gold tracking-tight mb-1">
              <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
            </p>
            <p className="text-xs text-white font-bold uppercase tracking-wider block">
              {stat.label}
            </p>
            <p className="text-[10px] text-gray-500 uppercase mt-0.5">{stat.desc}</p>
          </GlassCard>
        ))}
      </section>

      {/* Tabs Selector */}
      <section className="space-y-8">
        <div className="flex justify-center border-b border-brand-gold-dark/20 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('jee-advanced')}
            className={`flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'jee-advanced'
                ? 'border-brand-gold text-brand-gold'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            JEE Advanced
          </button>
          <button
            onClick={() => setActiveTab('jee-main')}
            className={`flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'jee-main'
                ? 'border-brand-gold text-brand-gold'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            JEE Main
          </button>
          <button
            onClick={() => setActiveTab('neet')}
            className={`flex-1 pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
              activeTab === 'neet'
                ? 'border-brand-gold text-brand-gold'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            NEET Medical
          </button>
        </div>

        {/* Toppers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {toppersData[activeTab].map((topper, idx) => (
            <GlassCard
              key={idx}
              className="border-brand-gold-dark/15 hover:border-brand-gold/25 p-8 relative flex flex-col justify-between"
            >
              {/* Background Rank decoration */}
              <div className="absolute right-6 top-4 opacity-5 text-6xl sm:text-7xl font-extrabold text-brand-gold pointer-events-none select-none">
                {topper.rank}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-brand-gold-dark/15 border border-brand-gold-dark/25 flex items-center justify-center text-brand-gold font-bold text-sm">
                    {topper.rank}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                      {topper.name}
                    </h3>
                    <p className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider">
                      {topper.score}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 italic font-medium">
                  Course: {topper.program}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
                  "{topper.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-gold-dark/10 flex items-center gap-2 text-xs text-brand-gold-light">
                <CheckCircle className="w-4 h-4 text-brand-gold" />
                <span>Verified Classroom Student</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
