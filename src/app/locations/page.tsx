import LocationsList from '@/components/locations/LocationsList';

import styles from './page.module.scss';

export default function Locations() {
  return (
    <div className={styles.wrapper}>
      <LocationsList />
    </div>
  );
}
