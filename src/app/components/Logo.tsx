interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

import { Link } from 'react-router';

export function Logo({ className = '', size = 'md', href = '/' }: LogoProps) {
  const scales = {
    sm: { hr: 'text-3xl lg:text-4xl', gap: 'mt-1', text: 'text-[8px] lg:text-[9px]', spacing: '0.35em' },
    md: { hr: 'text-5xl', gap: 'mt-2', text: 'text-[10px]', spacing: '0.4em' },
    lg: { hr: 'text-7xl', gap: 'mt-3', text: 'text-xs', spacing: '0.4em' },
  };
  const s = scales[size];

  return (
    <Link to={href} className={`flex flex-col items-center ${className}`}>
      <span
        className={`${s.hr} leading-none text-black`}
        style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 400 }}
      >
        HR
      </span>
      <span
        className={`${s.gap} ${s.text} text-[#d4af37] uppercase`}
        style={{ fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: s.spacing, fontWeight: 400 }}
      >
        General Services
      </span>
    </Link>
  );
}
