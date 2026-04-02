interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Logo({ className = '', size = 'md', href = '/' }: LogoProps) {
  const scales = {
    sm: { hr: 'text-4xl', line: 'w-20', text: 'text-[10px]' },
    md: { hr: 'text-5xl', line: 'w-28', text: 'text-[11px]' },
    lg: { hr: 'text-7xl', line: 'w-36', text: 'text-sm' },
  };
  const s = scales[size];

  return (
    <a href={href} className={`flex flex-col items-start ${className}`}>
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
    </a>
  );
}
