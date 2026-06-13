import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Layers, Laptop } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'classrooms', label: 'Smart Classrooms' },
    { id: 'libraries', label: 'Self-Study Library' },
    { id: 'laboratories', label: 'Science Labs' },
  ];

  const items = [
    {
      category: 'classrooms',
      title: 'Acoustic Smart Classroom',
      desc: 'Equipped with digital smart boards, sound-absorbing acoustic panels, and ergonomic seating to maximize focus.',
      icon: Laptop,
    },
    {
      category: 'libraries',
      title: 'Vedic Self-Study Library',
      desc: 'Silent zone featuring individual study cabins, reference book shelves, and high-speed research terminals.',
      icon: BookOpen,
    },
    {
      category: 'laboratories',
      title: 'Advanced Physics Laboratory',
      desc: 'Hi-tech experimentation benches allowing visual learning of wave mechanics, optics, and electromagnetism.',
      icon: Compass,
    },
    {
      category: 'classrooms',
      title: 'Interactive Seminar Lounge',
      desc: 'Large auditorium for academic orientation seminars, career counseling workshops, and toppers talk sessions.',
      icon: Layers,
    },
    {
      category: 'laboratories',
      title: 'Biology & Zoology Orientation Lab',
      desc: 'Anatomical model displays, high-magnification digital microscopes, and cell physiology testing stations.',
      icon: Compass,
    },
    {
      category: 'libraries',
      title: 'Digital Mock-Test Center',
      desc: 'Simulated computer laboratory with 60 testing nodes configured to replicate standard national entrance test servers.',
      icon: Laptop,
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.category === filter);

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
          Campus <span className="text-gold-gradient">Gallery Infrastructure</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Take a virtual tour of Aurum Academy\'s premium infrastructure. We provide a world-class environment optimized for long study hours and deep mental absorption.
        </p>
      </section>

      {/* Filter Buttons */}
      <section className="flex flex-wrap justify-center gap-3 border-b border-brand-gold-dark/15 pb-6 max-w-lg mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
              filter === cat.id
                ? 'bg-gold-hover text-[#0A0A0A] border-transparent'
                : 'bg-brand-card-bg text-gray-400 border-brand-gold-dark/20 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* Grid of gallery cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <GlassCard
              key={idx}
              className="border-brand-gold-dark/15 hover:border-brand-gold/30 p-6 flex flex-col justify-between overflow-hidden relative transition-all duration-300 group"
            >
              {/* Luxury gold gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-brand-gold-dark/20 group-hover:bg-brand-gold transition-colors" />
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded bg-brand-gold-dark/10 border border-brand-gold-dark/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
                <span>Infrastructure Facility</span>
                <span className="text-brand-gold">{item.category}</span>
              </div>
            </GlassCard>
          );
        })}
      </section>
    </motion.div>
  );
}
