'use client';

import CardModal from '@/components/modals/card-modal';
import { useEffect, useState } from 'react';

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  // Guard against hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
    </>
  );
}
