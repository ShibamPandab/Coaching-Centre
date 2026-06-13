import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';
import GlassCard from '../components/GlassCard';

export default function Contact() {
  const contacts = [
    {
      icon: Phone,
      title: 'Helpline Desk',
      detail: '+91 800 123 4567',
      sub: 'Mon to Sat: 8 AM — 8 PM IST',
    },
    {
      icon: Mail,
      title: 'Email Admissions',
      detail: 'admissions@aurumacademy.in',
      sub: 'Queries answered in 2 hours',
    },
    {
      icon: MapPin,
      title: 'Kota Center',
      detail: '12, Rajiv Gandhi Nagar, Kota',
      sub: 'Rajasthan — 324005',
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
          Connect With <span className="text-gold-gradient">Admissions</span>
        </h1>
        <div className="h-0.5 w-24 bg-brand-gold mx-auto" />
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Have a question about courses, batch starting dates, center locations, or the ASAT scholarship test? Fill out the form or reach out via our official helplines.
        </p>
      </section>

      {/* Main Layout Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white uppercase tracking-wide">
              Official Channels
            </h2>
            <p className="text-xs text-gray-400">
              Direct coordinates of our administrative offices.
            </p>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <GlassCard
                  key={idx}
                  className="border-brand-gold-dark/10 p-5 flex items-start gap-4 transition-all duration-200"
                  hover={false}
                >
                  <div className="w-10 h-10 rounded bg-brand-gold-dark/10 border border-brand-gold-dark/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      {contact.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-gold-light">
                      {contact.detail}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase font-semibold">
                      {contact.sub}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* Operational Hours */}
          <GlassCard className="border-brand-gold-dark/10 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
              <Clock className="w-4.5 h-4.5 text-brand-gold" />
              Center Timings
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our classrooms and doubt helpdesks are open for students from <strong className="text-white">7:00 AM to 9:00 PM</strong> daily. Parents counseling appointments can be scheduled from <strong className="text-white">9:00 AM to 6:00 PM</strong>.
            </p>
          </GlassCard>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <EnquiryForm />
        </div>
      </section>
    </motion.div>
  );
}
