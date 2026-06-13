import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Calendar, Award, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Courses() {
  const courses = [
    {
      badge: 'Engineering Prep',
      title: 'IIT-JEE Pinnacle Program',
      subtitle: '2-Year Integrated Classroom Course',
      target: 'Target: JEE Mains & Advanced 2028',
      eligibility: 'Eligibility: Moving to Class XI',
      duration: 'Duration: 2 Years',
      batchSize: 'Batch Size: 45 Max',
      highlights: [
        'Curriculum designed by top IIT graduates',
        'Daily Practice Problems (DPPs) with structured solutions',
        'CBT (Computer-Based Test) simulation matches exact JEE platform',
        'Dedicated Physics, Chemistry, & Mathematics doubt cell',
      ],
    },
    {
      badge: 'Medical Prep',
      title: 'NEET Pulse Program',
      subtitle: '2-Year Integrated Classroom Course',
      target: 'Target: NEET (Pre-Medical) 2028',
      eligibility: 'Eligibility: Moving to Class XI',
      duration: 'Duration: 2 Years',
      batchSize: 'Batch Size: 45 Max',
      highlights: [
        'Line-by-line decoding of NCERT Biology textbooks',
        'Special emphasis on Physics and Chemistry numericals',
        'Comprehensive mock test series matching AIIMS/NEET patterns',
        'Regular botany/zoology laboratory orientation sessions',
      ],
    },
    {
      badge: 'Early Edge',
      title: 'Aurum Genesis Foundation',
      subtitle: 'Integrated Olympiad & Board Course',
      target: 'Target: Classes VIII, IX, & X Boards, NSEJS, PRMO',
      eligibility: 'Eligibility: Class VII/VIII/IX Pass',
      duration: 'Duration: 1 / 2 / 3 Years',
      batchSize: 'Batch Size: 35 Max',
      highlights: [
        'Develops core logical and analytical reasoning capabilities',
        'Comprehensive prep for School Boards & NTSE/Olympiads',
        'Early exposure to advanced concepts of classes XI & XII',
        'Mental ability workshops and speed-math sessions',
      ],
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
          Elite <span className="text-gold-gradient">Academic Programs</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Select our high-impact classroom programs. Designed for absolute conceptual clarity, speed optimization, and verified national testing performance.
        </p>
      </section>

      {/* Courses List */}
      <section className="space-y-12">
        {courses.map((course, idx) => (
          <GlassCard
            key={idx}
            className="border-brand-gold-dark/15 hover:border-brand-gold/30 p-8 sm:p-10 transition-all duration-300 relative"
          >
            {/* Background luxury gradient blur */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-gold/5 blur-[80px] pointer-events-none rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              {/* Course Title and Meta */}
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-block px-3 py-1 rounded bg-brand-gold-dark/10 border border-brand-gold-dark/25 text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                  {course.badge}
                </span>
                <h2 className="text-2xl font-bold text-white uppercase tracking-wide">
                  {course.title}
                </h2>
                <p className="text-xs text-brand-gold-light/85 font-medium uppercase tracking-wider">
                  {course.subtitle}
                </p>

                {/* Meta details list */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold-dark/10 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{course.target}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{course.eligibility}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Course Features and CTA */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div>
                  <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                    Course Features & Curriculum:
                  </h3>
                  <ul className="space-y-3">
                    {course.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-brand-gold-dark/10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="text-center px-6 py-3 rounded text-xs font-bold uppercase tracking-wider bg-gold-hover text-[#0A0A0A]"
                  >
                    Enquire & Register
                  </Link>
                  <a
                    href="tel:+918001234567"
                    className="text-center px-6 py-3 rounded text-xs font-bold uppercase tracking-wider border border-brand-gold-dark/30 text-white hover:bg-brand-gold-dark/10 transition-colors"
                  >
                    Speak with Counselor
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </section>
    </motion.div>
  );
}
