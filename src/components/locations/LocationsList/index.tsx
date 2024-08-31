'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { Button, Modal, Result, Spin } from 'antd';
import { Pagination } from 'antd';

import { fetcher } from '@/utils/fetcher';
import { RickAndMortyEndpoints } from '@/utils/constants';
import { LocationInterface, LocationsResponseInterface } from '@/utils/interfaces';

import { LOCATIONS_PAGE_SIZE } from './constants';
import LocationItemDetailed from '../LocationItemDetailed';
import LocationItem from '../LocationItem';

import styles from './index.module.scss';

export default function LocationsList() {
  const [locationsPageIndex, setLocationsPageIndex] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<null | LocationInterface>(null);

  const {
    data: locationsData,
    isLoading: isLocationsDataLoading,
    error: locationsDataError,
    mutate: mutateLocationsData,
  } = useSWR<LocationsResponseInterface>(
    `${RickAndMortyEndpoints.LOCATIONS}/?page=${locationsPageIndex}`,
    fetcher
  );

  const { info: locationsMetaInfo, results: locations = [] } = locationsData || {};

  return (
    <div className={styles.wrapper}>
      {isLocationsDataLoading && <Spin size="large" />}
      {!isLocationsDataLoading && locationsDataError && (
        <Result
          status="warning"
          title="An error occurred, please try downloading Locations again or refreshing the page"
          extra={
            <>
              <Button type="primary" onClick={() => mutateLocationsData()}>
                Download Locations data again
              </Button>
              <span>or</span>
              <Button type="primary" onClick={() => window.location.reload()}>
                Refresh the page
              </Button>
            </>
          }
        />
      )}
      {locationsData && locations.length > 0 && (
        <>
          <div className={styles.locationsList}>
            {locations?.map((location) => (
              <LocationItem
                key={location.id}
                location={location}
                setSelectedLocation={setSelectedLocation}
              />
            ))}
          </div>
          <div className={styles.paginationWrapper}>
            <Pagination
              pageSize={LOCATIONS_PAGE_SIZE}
              total={locationsMetaInfo?.count}
              current={locationsPageIndex}
              onChange={(page) => setLocationsPageIndex(page)}
              showSizeChanger={false}
            />
          </div>
        </>
      )}

      {!isLocationsDataLoading && !locationsDataError && locations.length === 0 && (
        <div>Unfortunately, no locations were found.</div>
      )}

      {selectedLocation && (
        <Modal open={!!selectedLocation} footer={null} onCancel={() => setSelectedLocation(null)}>
          <LocationItemDetailed location={selectedLocation} />
        </Modal>
      )}
    </div>
  );
}
