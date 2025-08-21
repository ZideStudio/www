'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdProps = {
  slot: string;
  className?: string;
};

export default function Ad({ slot, className }: AdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [adBlocked, setAdBlocked] = useState(false);

  useEffect(() => {
    let retries = 0;

    const loadAd = () => {
      if (!adRef.current) return;
      if (adRef.current.innerHTML.trim().length > 0) return;

      if (adRef.current.offsetWidth > 0) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.warn('Adsense push error', e);
          setAdBlocked(true);
        }
      } else if (retries < 5) {
        retries++;
        setTimeout(loadAd, 500);
      } else {
        setAdBlocked(true);
      }
    };

    loadAd();
  }, []);

  if (adBlocked) {
    return (
      <div
        className={`text-text/50 border-text/10 mt-4 flex w-fit flex-col justify-center rounded-xl border-2 border-dashed p-2 text-center align-middle text-sm ${className ?? ''}`}
      >
        <p className="mb-1 font-bold">🚨 Les publicités sont bloquées 🚨</p>
        <p>
          Elles servent uniquement à financer les serveurs de Zide pour l’hébergement du site et des projets.
          <br />
          🙏 Merci à ceux qui les activent pour nous soutenir !
        </p>
      </div>
    );
  }

  return (
    <ins
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={adRef as any}
      className={`adsbygoogle ${className ?? ''}`}
      style={{ display: 'block', width: '100%' }}
      data-ad-client="ca-pub-7960999043141760"
      data-ad-slot={slot}
      data-ad-format="fluid"
      data-full-width-responsive="true"
    />
  );
}
