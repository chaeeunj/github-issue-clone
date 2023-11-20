import cx from 'clsx';
import styles from './ListContainer.module.css';

import Button from './Button';
import ListItem from './ListItem';
import ListItemLayout from './ListItemLayout';
import Modal from './Modal';

import { useState } from 'react';

function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');

  return (
    <div className={styles.listContainer}>
      <div className={styles.topSection}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          style={{
            fontSize: '14px',
            backgroundColor: 'green',
            color: 'white',
          }}>
          New Issue
        </Button>
      </div>
      <OpenClosedFilters />
      <ListItemLayout className={styles.listFilter}>
        <ListFilter />
      </ListItemLayout>
      <div className={styles.container}>
        <ListItem
          badges={[
            {
              color: 'red',
              title: 'Bug',
            },
          ]}
        />
      </div>
    </div>
  );
}

function ListFilter() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem onClick={() => setShowModal(true)}>
          Author
        </ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>MileStones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        placeholder={'Filter labels'}
      />
    </>
  );
}

function ListFilterItem({ onClick, children }) {
  return (
    <span role="button" onClick={onClick}>
      {children} ▾
    </span>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  // const data = getData();
  // const openData = data.filter((d) => d.state === 'open');
  // const closedData = data.filter((d) => d.state === 'closed');
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state={'Open'}
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state={'Closed'}
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}>
      {size} {state}
    </span>
  );
}

export default ListContainer;
