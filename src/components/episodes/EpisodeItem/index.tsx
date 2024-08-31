import { ReactElement } from 'react';
import { Card } from 'antd';

import { EpisodeInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function EpisodeItem({
  episode,
  setSelectedEpisode,
}: {
  episode: EpisodeInterface;
  setSelectedEpisode: (episode: EpisodeInterface) => void;
}): ReactElement {
  return (
    <Card className={styles.episodeCard} hoverable onClick={() => setSelectedEpisode(episode)}>
      {episode.name}
    </Card>
  );
}
