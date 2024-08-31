'use client'; // Error components must be Client Components
import { useEffect } from 'react';
import Link from 'next/link';

import { RmButton } from '@/components/shared';
import { AllRoutesEnum } from '@/utils/constants';

import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.Error__wrapper}>
      <h2>Something went wrong!</h2>
      <RmButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </RmButton>
      or
      <RmButton>
        <Link className={styles.Error__link} href={AllRoutesEnum.HOME}>
          Back to Home
        </Link>
      </RmButton>
      or
      <RmButton onClick={() => window.location.reload()}>Refresh the page</RmButton>
    </div>
  );
}
