export function Logo({ className = "w-24 h-16" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M20 20 L60 20 L60 35 L75 35 L75 60 L35 60 L35 45 L20 45 Z" fill="currentColor" />
        <path d="M100 60 L60 60 L60 45 L45 45 L45 20 L85 20 L85 35 L100 35 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
