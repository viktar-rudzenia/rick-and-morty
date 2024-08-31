import { ReactElement } from 'react';
import { Card } from 'antd';

import { CharacterInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function CharacterItem({
  character,
  setSelectedCharacter,
}: {
  character: CharacterInterface;
  setSelectedCharacter: (character: CharacterInterface) => void;
}): ReactElement {
  return (
    <Card
      className={styles.characterCard}
      hoverable
      cover={<img className={styles.image} src={character.image} alt={character.name} />}
      onClick={() => setSelectedCharacter(character)}
    >
      {character.name}
    </Card>
  );
}
