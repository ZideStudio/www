import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="group flex min-w-2xs items-center space-x-3">
      <Image src="/assets/logo/zide_complete.png" className="h-10 w-auto sm:h-12" alt="Zide Logo" width={192} height={48} />
    </Link>
  );
}
