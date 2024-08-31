import EpisodesList from '@/components/episodes/EpisodesList';

import styles from './page.module.scss';

export default function Episodes() {
  return (
    <div className={styles.wrapper}>
      <EpisodesList />
    </div>
  );
}
