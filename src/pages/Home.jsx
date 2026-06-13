import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, BookOpen, UserCheck, ShieldCheck, Flame, Compass } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  const stats = [
    { target: '1', prefix: 'AIR ', suffix: '', label: 'JEE Advanced' },
    { target: '4', prefix: 'AIR ', suffix: '', label: 'NEET Pre-Medical' },
    { target: '9998', prefix: '', suffix: '%ile', label: 'JEE Mains Top Score' },
    { target: '18500', prefix: '', suffix: '+', label: 'IITian & Doctor Alumni' },
  ];

  const pillars = [
    {
      icon: Trophy,
      title: 'Elite Pedagogy',
      desc: 'Syllabus designed by India\'s top HODs, focusing on first-principles conceptual clarity and step-by-step problem-solving.',
    },
    {
      icon: Compass,
      title: 'Structured Mentorship',
      desc: 'Every student is assigned a dedicated mentor for academic tracking, mental well-being, and structured revisions.',
    },
    {
      icon: BookOpen,
      title: 'High-Yield Mock Exams',
      desc: 'National level Computer-Based Testing (CBT) with precise analytics identifying weak areas and time-management tips.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24 space-y-20 pb-16"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 overflow-hidden border-b border-brand-gold-dark/10">
        {/* Background Image with Luxury Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url('/hero.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg via-brand-dark-bg/90 to-[#0A0A0A50]" />
        
        {/* Decorative Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold-dark/10 border border-brand-gold-dark/25 text-xs text-brand-gold font-semibold uppercase tracking-wider animate-pulse">
            <Flame className="w-3.5 h-3.5" /> Admissions Open for Session 2026-27
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-sans">
            NURTURING GENIUS.<br />
            <span className="text-gold-gradient">SCULPTING SUCCESS.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            India's most trustworthy coaching institute for IIT-JEE, NEET, and Olympiads. Empowering students with rigorous academic systems and elite mentorship.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider bg-gold-hover text-[#0A0A0A] flex justify-center items-center gap-2"
            >
              Enquire Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/courses"
              className="w-full sm:w-auto px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider border border-brand-gold-dark/45 text-white hover:bg-brand-gold-dark/10 transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <GlassCard key={idx} className="text-center py-8 border-brand-gold-dark/15">
              <p className="text-3xl sm:text-4xl font-extrabold text-brand-gold mb-2 tracking-tight">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                {stat.label}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* The Pillars of Aurum */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
            The Aurum Advantage
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Our systemic three-pillar academic formula ensures students consistently outperform their peers on national entrance exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <GlassCard key={idx} className="flex flex-col h-full border-brand-gold-dark/10">
                <div className="w-12 h-12 rounded bg-brand-gold-dark/10 border border-brand-gold-dark/20 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                  {pillar.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* Quick Conversion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-brand-gold-dark/20 bg-gradient-to-r from-brand-card-bg via-[#161616] to-brand-card-bg p-8 sm:p-12 text-center md:text-left md:flex justify-between items-center gap-8">
          <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 to-transparent pointer-events-none" />
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-gold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> ASAT Scholarship Test
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
              Secure Up to 90% Scholarship on Classroom Courses
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Appear for the Aurum Scholarship Admission Test (ASAT) online or offline at our Kota, Delhi, and Bengaluru centers. Take the first step towards your dream engineering or medical seat.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider bg-gold-hover text-[#0A0A0A] w-full md:w-auto justify-center"
            >
              Register For ASAT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
