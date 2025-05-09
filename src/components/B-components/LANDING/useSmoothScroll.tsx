'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [pathname]); // Runs on every path change

  return <>{children}</>;
}
