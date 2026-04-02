interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const scales = {
    sm: { hr: 'text-3xl', line: 'w-20', text: 'text-[9px]' },
    md: { hr: 'text-5xl', line: 'w-28', text: 'text-[11px]' },
    lg: { hr: 'text-6xl', line: 'w-32', text: 'text-xs' },
  };
  const s = scales[size];

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span
        className={`${s.hr} font-serif leading-none text-black`}
        style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}
      >
        HR
      </span>
      <div className={`${s.line} h-px bg-[#d4af37] my-2`} />
      <span
        className={`${s.text} tracking-[0.3em] text-[#d4af37] uppercase`}
        style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.3em' }}
      >
        General Services
      </span>
    </div>
  );
}
