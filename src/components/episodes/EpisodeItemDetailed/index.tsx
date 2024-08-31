import { ReactElement } from 'react';
import { Card } from 'antd';

import { EpisodeInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function EpisodeItemDetailed({
  episode,
}: {
  episode: EpisodeInterface;
}): ReactElement {
  return (
    <Card className={styles.episodeCard}>
      <div>Name: {episode.name}</div>
      <div>Episode: {episode.episode}</div>
      <div>Air date: {episode.air_date}</div>
    </Card>
  );
}
