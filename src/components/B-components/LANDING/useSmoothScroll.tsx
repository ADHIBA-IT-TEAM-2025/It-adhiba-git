'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const hash = url.split('#')[1];
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    };

    router.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <>{children}</>;
}
