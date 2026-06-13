import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import GlassCard from './GlassCard';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    currentClass: '',
    targetStream: '',
    preferredCenter: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const classes = [
    'Class VIII',
    'Class IX',
    'Class X',
    'Class XI',
    'Class XII',
    'Class XII Passed (Repeater/Dropper)',
  ];

  const streams = [
    'IIT-JEE (Engineering)',
    'NEET (Medical)',
    'Foundation & Olympiads (Class 8-10)',
  ];

  const centers = [
    'Kota (Rajasthan)',
    'Delhi NCR (Connaught Place)',
    'Bengaluru (Koramangala)',
    'Aurum Live (Interactive Online)',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }
    if (!formData.currentClass) {
      newErrors.currentClass = 'Please select your current class';
    }
    if (!formData.targetStream) {
      newErrors.targetStream = 'Please select target stream';
    }
    if (!formData.preferredCenter) {
      newErrors.preferredCenter = 'Please select preferred study center';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        studentName: '',
        parentName: '',
        phone: '',
        currentClass: '',
        targetStream: '',
        preferredCenter: '',
        message: '',
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <GlassCard className="max-w-xl mx-auto text-center py-12 border-brand-gold relative overflow-hidden">
        {/* Subtle glow border */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-brand-gold animate-bounce" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-wide uppercase">
          Application Initiated
        </h3>
        <p className="text-gray-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for choosing Aurum Academy. Our academic counselor will reach out to you within the next 2 hours on your registered phone number.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider bg-gold-hover text-[#0A0A0A]"
        >
          Submit Another Enquiry
        </button>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="max-w-xl mx-auto border-brand-gold-dark/20 relative">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
          Admission Enquiry Form
        </h3>
        <p className="text-xs text-gray-400">
          Academic Session 2026-27 | Register for scholarship test (ASAT)
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Student Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Student's Full Name *
          </label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
            className={`w-full bg-[#1A1A1A] border ${
              errors.studentName ? 'border-red-500/50' : 'border-brand-gold-dark/25'
            } rounded px-4 py-2.5 text-sm text-white form-input-focus`}
          />
          {errors.studentName && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.studentName}
            </p>
          )}
        </div>

        {/* Parent Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Parent / Guardian Name *
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Enter parent's name"
            className={`w-full bg-[#1A1A1A] border ${
              errors.parentName ? 'border-red-500/50' : 'border-brand-gold-dark/25'
            } rounded px-4 py-2.5 text-sm text-white form-input-focus`}
          />
          {errors.parentName && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.parentName}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Contact Number (10-Digit Mobile) *
          </label>
          <div className="relative">
            <span className="absolute left-4 top-2.5 text-sm text-gray-500 font-medium">+91</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98765 43210"
              className={`w-full bg-[#1A1A1A] border ${
                errors.phone ? 'border-red-500/50' : 'border-brand-gold-dark/25'
              } rounded pl-14 pr-4 py-2.5 text-sm text-white form-input-focus`}
              maxLength="10"
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>

        {/* Class and Target stream in two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Class Select */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Current Class / Grade *
            </label>
            <select
              name="currentClass"
              value={formData.currentClass}
              onChange={handleChange}
              className={`w-full bg-[#1A1A1A] border ${
                errors.currentClass ? 'border-red-500/50' : 'border-brand-gold-dark/25'
              } rounded px-3 py-2.5 text-sm text-white form-input-focus`}
            >
              <option value="">Select Class</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
            {errors.currentClass && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.currentClass}
              </p>
            )}
          </div>

          {/* Stream Select */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Target Course *
            </label>
            <select
              name="targetStream"
              value={formData.targetStream}
              onChange={handleChange}
              className={`w-full bg-[#1A1A1A] border ${
                errors.targetStream ? 'border-red-500/50' : 'border-brand-gold-dark/25'
              } rounded px-3 py-2.5 text-sm text-white form-input-focus`}
            >
              <option value="">Select Stream</option>
              {streams.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.targetStream && (
              <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.targetStream}
              </p>
            )}
          </div>
        </div>

        {/* Preferred Center */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Preferred Center Location *
          </label>
          <select
            name="preferredCenter"
            value={formData.preferredCenter}
            onChange={handleChange}
            className={`w-full bg-[#1A1A1A] border ${
              errors.preferredCenter ? 'border-red-500/50' : 'border-brand-gold-dark/25'
            } rounded px-3 py-2.5 text-sm text-white form-input-focus`}
          >
            <option value="">Select Center</option>
            {centers.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.preferredCenter && (
            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.preferredCenter}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
            Message / Query (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type any specific question or requirement here"
            className="w-full bg-[#1A1A1A] border border-brand-gold-dark/25 rounded px-4 py-2.5 text-sm text-white h-24 resize-none form-input-focus"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded text-xs font-bold uppercase tracking-wider bg-gold-hover text-[#0A0A0A] flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full animate-spin" />
              Processing Request...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Admission Enquiry
            </>
          )}
        </button>
      </form>
    </GlassCard>
  );
}
