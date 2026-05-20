type LogoProps = {
  className?: string;
  variant?: 'dark' | 'light';
};

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const bg = variant === 'dark' ? '#1A1A1A' : '#F4F4F1';
  const fg = variant === 'dark' ? '#F4F4F1' : '#1A1A1A';

  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="BoringApps"
      className={className}
    >
      <rect width="1024" height="1024" fill={bg} />
      <g fill={fg}>
        <rect x="220" y="200" width="180" height="624" />
        <path d="M 400 200 A 153 153 0 0 1 400 506 Z" />
        <path d="M 400 518 A 153 153 0 0 1 400 824 Z" />
      </g>
      <g fill={bg}>
        <path d="M 410 282 A 71 71 0 0 1 410 424 Z" />
        <path d="M 410 600 A 71 71 0 0 1 410 742 Z" />
      </g>
      <circle cx="752" cy="788" r="68" fill="#E63946" />
      <circle cx="752" cy="788" r="22" fill={bg} />
    </svg>
  );
}
