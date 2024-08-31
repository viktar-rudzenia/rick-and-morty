import { ReactElement } from 'react';
import { Card } from 'antd';

import { CharacterInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function CharacterItem({
  character,
}: {
  character: CharacterInterface;
}): ReactElement {
  return (
    <Card
      className={styles.characterCard}
      hoverable
      cover={<img src={character.image} alt={character.name} />}
    >
      {character.name}
    </Card>
  );
}
