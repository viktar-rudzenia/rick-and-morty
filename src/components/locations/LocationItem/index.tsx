import { ReactElement } from 'react';
import { Card } from 'antd';

import { LocationInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function LocationItem({
  location,
  setSelectedLocation,
}: {
  location: LocationInterface;
  setSelectedLocation: (location: LocationInterface) => void;
}): ReactElement {
  return (
    <Card className={styles.locationCard} hoverable onClick={() => setSelectedLocation(location)}>
      {location.name}
    </Card>
  );
}
