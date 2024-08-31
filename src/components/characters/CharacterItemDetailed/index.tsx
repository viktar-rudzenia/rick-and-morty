import { ReactElement } from 'react';
import { Card } from 'antd';

import { CharacterInterface } from '@/utils/interfaces';

import styles from './index.module.scss';

export default function CharacterItemDetailed({
  character,
}: {
  character: CharacterInterface;
}): ReactElement {
  return (
    <Card
      className={styles.characterCard}
      cover={<img src={character.image} alt={character.name} />}
    >
      <div>Name: {character.name}</div>
      <div>Gender: {character.gender}</div>
      <div>Species: {character.species}</div>
      <div>Status: {character.status}</div>
    </Card>
  );
}
