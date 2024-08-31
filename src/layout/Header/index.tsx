import Image from 'next/image';
import Link from 'next/link';

import { AllRoutesEnum } from '@/utils/constants';
import { navigationBarLinks } from './constants';

import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div>
        <Link href={AllRoutesEnum.HOME}>
          <Image
            className={styles.logoImage}
            src="/rick-and-morty-logo.png"
            alt="logo"
            width="320"
            height="98"
          />
        </Link>
      </div>

      <nav className={styles.navigationBar}>
        <ul className={styles.navigationList}>
          {Object.values(navigationBarLinks).map(({ id, name, href }) => (
            <li key={id}>
              <Link className={styles.navigationBarLink} href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
