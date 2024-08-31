'use client';

import useSWR from 'swr';
import { Button, Modal, Result, Spin } from 'antd';
import { Pagination } from 'antd';
import { useState } from 'react';

import { fetcher } from '@/utils/fetcher';
import { RickAndMortyEndpoints } from '@/utils/constants';
import { CharacterInterface, CharactersResponseInterface } from '@/utils/interfaces';
import CharacterItem from '../CharacterItem';

import CharacterItemDetailed from '../CharacterItemDetailed';
import { CHARACTERS_PAGE_SIZE } from './constants';

import styles from './index.module.scss';

export default function CharactersList() {
  const [charactersPageIndex, setCharactersPageIndex] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState<null | CharacterInterface>(null);

  const {
    data: charactersData,
    isLoading: isCharactersDataLoading,
    error: charactersDataError,
    mutate: mutateCharactersData,
  } = useSWR<CharactersResponseInterface>(
    `${RickAndMortyEndpoints.CHARACTERS}/?page=${charactersPageIndex}`,
    fetcher
  );

  const { info: charactersMetaInfo, results: characters } = charactersData || {};

  return (
    <div className={styles.wrapper}>
      {isCharactersDataLoading && <Spin size="large" />}
      {!isCharactersDataLoading && charactersDataError && (
        <Result
          status="warning"
          title="An error occurred, please try downloading Characters again or refreshing the page"
          extra={
            <>
              <Button type="primary" onClick={() => mutateCharactersData()}>
                Download Characters data again
              </Button>
              <span>or</span>
              <Button type="primary" onClick={() => window.location.reload()}>
                Refresh the page
              </Button>
            </>
          }
        />
      )}
      {charactersData && (
        <>
          <div className={styles.charactersList}>
            {characters?.map((character) => (
              <CharacterItem
                key={character.id}
                character={character}
                setSelectedCharacter={setSelectedCharacter}
              />
            ))}
          </div>
          <div className={styles.paginationWrapper}>
            <Pagination
              pageSize={CHARACTERS_PAGE_SIZE}
              total={charactersMetaInfo?.count}
              current={charactersPageIndex}
              onChange={(page) => setCharactersPageIndex(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
      {selectedCharacter && (
        <Modal open={!!selectedCharacter} footer={null} onCancel={() => setSelectedCharacter(null)}>
          <CharacterItemDetailed character={selectedCharacter} />
        </Modal>
      )}
    </div>
  );
}
