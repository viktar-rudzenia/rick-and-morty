import CharactersList from '@/components/characters/CharactersList';

import styles from './page.module.scss';

export default function Characters() {
  return (
    <div className={styles.wrapper}>
      <CharactersList />
    </div>
  );
}
