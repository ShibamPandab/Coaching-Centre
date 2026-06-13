import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsappUrl = "https://wa.me/918001234567?text=Hello%20Aurum%20Academy%2C%20I%20am%20interested%20in%20admission%20enquiry.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#121212] border-2 border-brand-gold shadow-lg shadow-brand-gold/15 transition-all duration-300 hover:scale-108 hover:border-brand-gold-light active:scale-95 group ${
        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}
      title="Chat with Admissions Office"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Notification Ring */}
      <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-[#25D366] border border-[#121212]"></span>
      </span>

      {/* WhatsApp SVG logo rendered in gold */}
      <svg
        className="w-7 h-7 text-brand-gold group-hover:text-brand-gold-light transition-colors"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.779 1.218h.004c5.505 0 9.988-4.478 9.989-9.984a9.979 9.979 0 0 0-2.924-7.064A9.972 9.972 0 0 0 12.012 2zm5.727 14.072c-.315.888-1.545 1.637-2.128 1.722-.505.074-1.166.126-3.377-.791-2.825-1.173-4.643-4.046-4.785-4.234-.14-.188-1.143-1.522-1.143-2.903 0-1.382.723-2.06.98-2.342.257-.282.56-.353.748-.353.186 0 .374.002.536.01.168.008.396-.062.62.482.228.556.78 1.905.847 2.04.068.136.113.294.022.476-.09.182-.136.294-.272.453-.136.16-.288.358-.41.482-.136.136-.28.285-.12.562.16.277.712 1.175 1.527 1.901.815.727 1.503.952 1.716 1.054.214.103.34.09.466-.056.126-.146.544-.633.69-.85.146-.217.29-.182.49-.108.2.074 1.27.6 1.49.712.22.112.366.168.42.263.056.095.056.551-.259 1.439z" />
      </svg>
    </a>
  );
}
