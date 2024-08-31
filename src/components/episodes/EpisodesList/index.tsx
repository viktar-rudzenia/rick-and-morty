'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { Button, Modal, Result, Spin } from 'antd';
import { Pagination } from 'antd';

import { fetcher } from '@/utils/fetcher';
import { RickAndMortyEndpoints } from '@/utils/constants';
import { EpisodeInterface, EpisodesResponseInterface } from '@/utils/interfaces';

import { EPISODES_PAGE_SIZE } from './constants';
import EpisodeItemDetailed from '../EpisodeItemDetailed';
import EpisodeItem from '../EpisodeItem';

import styles from './index.module.scss';

export default function EpisodesList() {
  const [episodesPageIndex, setEpisodesPageIndex] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<null | EpisodeInterface>(null);

  const {
    data: episodesData,
    isLoading: isEpisodesDataLoading,
    error: episodesDataError,
    mutate: mutateEpisodesData,
  } = useSWR<EpisodesResponseInterface>(
    `${RickAndMortyEndpoints.EPISODES}/?page=${episodesPageIndex}`,
    fetcher
  );

  const { info: episodesMetaInfo, results: episodes = [] } = episodesData || {};

  return (
    <div className={styles.wrapper}>
      {isEpisodesDataLoading && <Spin size="large" />}
      {!isEpisodesDataLoading && episodesDataError && (
        <Result
          status="warning"
          title="An error occurred, please try downloading Episodes again or refreshing the page"
          extra={
            <>
              <Button type="primary" onClick={() => mutateEpisodesData()}>
                Download Episodes data again
              </Button>
              <span>or</span>
              <Button type="primary" onClick={() => window.location.reload()}>
                Refresh the page
              </Button>
            </>
          }
        />
      )}
      {episodesData && episodes.length > 0 && (
        <>
          <div className={styles.header}>All Episodes:</div>
          <div className={styles.episodesList}>
            {episodes?.map((episode) => (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                setSelectedEpisode={setSelectedEpisode}
              />
            ))}
          </div>
          <div className={styles.paginationWrapper}>
            <Pagination
              pageSize={EPISODES_PAGE_SIZE}
              total={episodesMetaInfo?.count}
              current={episodesPageIndex}
              onChange={(page) => setEpisodesPageIndex(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}

      {!isEpisodesDataLoading && !episodesDataError && episodes.length === 0 && (
        <div>Unfortunately, no episodes were found.</div>
      )}

      {selectedEpisode && (
        <Modal open={!!selectedEpisode} footer={null} onCancel={() => setSelectedEpisode(null)}>
          <EpisodeItemDetailed episode={selectedEpisode} />
        </Modal>
      )}
    </div>
  );
}
