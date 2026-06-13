export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div
      className={`glass-panel rounded-xl p-6 ${
        hover ? 'glass-panel-hover' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
