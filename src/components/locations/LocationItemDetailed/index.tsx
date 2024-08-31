import { ReactElement } from 'react';
import { Card } from 'antd';

import { LocationInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function LocationItemDetailed({
  location,
}: {
  location: LocationInterface;
}): ReactElement {
  return (
    <Card className={styles.locationCard}>
      <div>Name: {location.name}</div>
      <div>Type: {location.type}</div>
      <div>Dimension: {location.dimension}</div>
    </Card>
  );
}
