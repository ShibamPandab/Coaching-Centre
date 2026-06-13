import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, BookOpen } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Faculty() {
  const educators = [
    {
      name: 'Prof. Raghavendra Verma',
      role: 'Head of Physics Department',
      qualifications: 'B.Tech, IIT Madras',
      experience: '18+ Years of Academic Excellence',
      achievements: 'Mentored JEE Advanced AIR 2, 5, & 9. Expert in Mechanics & Electrodynamics.',
      specialty: 'Classical Mechanics & Calculus-based Physics',
    },
    {
      name: 'Dr. Neha Mehrotra',
      role: 'Head of Chemistry Department',
      qualifications: 'Ph.D., Delhi University (CSIR-NET)',
      experience: '15+ Years of Academic Excellence',
      achievements: 'Former Senior Faculty at Kota. Renowned for Organic reaction mechanisms.',
      specialty: 'Stereochemistry & Organic Syntheses',
    },
    {
      name: 'Dr. Amit Baranwal',
      role: 'Head of Biology Department',
      qualifications: 'MD, AIIMS New Delhi',
      experience: '12+ Years of Medical Coaching',
      achievements: 'Authored 2 national Biology guidebooks. Guided 400+ students to top government medical colleges.',
      specialty: 'Human Physiology & Molecular Genetics',
    },
    {
      name: 'Prof. Sameer Sen',
      role: 'Head of Mathematics Department',
      qualifications: 'M.Sc., IIT Kharagpur',
      experience: '16+ Years of Competitive Prep',
      achievements: 'Specialist in Coordinate Geometry & Calculus shortcuts. Published researcher in applied mathematics.',
      specialty: 'Advanced Calculus & Probability Theory',
    },
  ];

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
          Elite <span className="text-gold-gradient">Academic Faculty</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Learn from India's most qualified mentors. Our faculty consists of IITians, AIIMS alumni, and Ph.Ds with a proven history of producing top-tier national ranks.
        </p>
      </section>

      {/* Faculty Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educators.map((faculty, idx) => (
          <GlassCard
            key={idx}
            className="border-brand-gold-dark/15 hover:border-brand-gold/30 p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group"
          >
            {/* Ambient subtle card glow */}
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-brand-gold/5 blur-[60px] pointer-events-none rounded-full" />
            
            <div className="space-y-6 relative z-10">
              <div className="border-b border-brand-gold-dark/20 pb-4 space-y-1.5">
                {/* Faculty Portrait Placeholder (Luxury monogram initials style) */}
                <div className="w-14 h-14 rounded-full border border-brand-gold bg-[#161616] text-brand-gold font-bold text-lg flex items-center justify-center mb-4 uppercase shadow-md shadow-brand-gold/10">
                  {faculty.name.split(' ').pop().substring(0, 2)}
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                  {faculty.name}
                </h2>
                <p className="text-xs text-brand-gold-light font-semibold uppercase tracking-wider">
                  {faculty.role}
                </p>
              </div>

              {/* Credentials list */}
              <div className="space-y-3.5 text-xs text-gray-400">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                  <span>
                    <strong className="text-white">Credentials:</strong> {faculty.qualifications}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                  <span>
                    <strong className="text-white">Experience:</strong> {faculty.experience}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4.5 h-4.5 text-brand-gold shrink-0" />
                  <span>
                    <strong className="text-white">Core Field:</strong> {faculty.specialty}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Key Achievements:</strong> {faculty.achievements}
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>
    </motion.div>
  );
}
