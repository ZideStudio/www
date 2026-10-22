import { useHomeContentReached } from '@hooks/useHomeContentReached';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const LOGO_SIZES = '(min-width: 640px) 82px, 69px';
const LOGO_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as const;

/**
 * Navbar logo. On the home landing only the Z icon shows; once the content snap is reached the "IDE" letters
 * slide out from behind the Z into the complete logo (and back when scrolling up)
 */
export function Logo() {
  const expanded = useHomeContentReached();

  return (
    <Link href="/" className="group flex min-w-2xs items-center space-x-3">
      <span className="relative aspect-[1711/1000] h-10 sm:h-12">
        {/* Z icon, scaled and offset so its Z overlaps the complete logo's Z exactly */}
        <motion.span className="absolute inset-0" initial={false} animate={{ opacity: expanded ? 0 : 1 }} transition={LOGO_TRANSITION}>
          <Image src="/assets/logo/zide.png" className="absolute top-[0.33%] left-[-7.15%] h-[99.25%] w-auto" alt="" width={192} height={192} />
        </motion.span>

        {/* Complete logo, Z part */}
        <motion.span className="absolute inset-0" initial={false} animate={{ opacity: expanded ? 1 : 0 }} transition={LOGO_TRANSITION}>
          <Image src="/assets/logo/zide_complete.png" className="[clip-path:inset(0_57.8%_0_0)]" alt="Zide Logo" fill sizes={LOGO_SIZES} />
        </motion.span>

        {/* Complete logo, "IDE" part, masked at the Z's right edge so it slides out from behind it */}
        <span className="absolute inset-0 [clip-path:inset(0_0_0_42.2%)]">
          <motion.span
            className="absolute inset-0"
            initial={false}
            animate={{ x: expanded ? '0%' : '-56%', opacity: expanded ? 1 : 0 }}
            transition={LOGO_TRANSITION}
          >
            <Image src="/assets/logo/zide_complete.png" className="[clip-path:inset(0_0_0_42.2%)]" alt="" fill sizes={LOGO_SIZES} />
          </motion.span>
        </span>
      </span>
    </Link>
  );
}
