import type { HTMLAttributes } from 'react';
import { SiTiktok, SiInstagram, SiSnapchat } from 'react-icons/si';

const SOCIAL = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@deyafah_seah?_r=1&_t=ZS-95Ggl9JWZRl', Icon: SiTiktok },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/deyafah_seah?igsh=eGV1ZGV4M2xzenln&utm_source=qr',
    Icon: SiInstagram
  },
  { label: 'Snapchat', href: 'https://snapchat.com/t/7Tu2HKNF', Icon: SiSnapchat }
] as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  showLabels?: boolean;
} & Pick<HTMLAttributes<HTMLDivElement>, 'aria-label'>;

export default function SocialLinks({
  className = '',
  iconClassName = 'h-6 w-6',
  showLabels = false,
  'aria-label': ariaLabel = 'وسائل التواصل الاجتماعي'
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} role="list" aria-label={ariaLabel}>
      {SOCIAL.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg text-gray-300 transition-colors hover:text-[#C9A646] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A646]"
          aria-label={label}
          role="listitem"
        >
          <Icon className={iconClassName} aria-hidden />
          {showLabels ? <span className="text-sm font-medium">{label}</span> : null}
        </a>
      ))}
    </div>
  );
}
