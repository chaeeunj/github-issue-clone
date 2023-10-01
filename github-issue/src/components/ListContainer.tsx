import cx from 'clsx';
import styles from './ListContainer.module.css';

import Button from './Button';
import ListItem from './ListItem';
import ListItemLayout from './ListItemLayout';

import { useState } from 'react';

function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [isOpenMode, setIsOpenMode] = useState(true);

  const openModeDataSize = 1;
  const closeModeDataSize = 2;

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
      <ListItemLayout className={styles.listFilter}>
        <div className={styles.filterList}>
          <span>Author</span>
          <span>Label</span>
          <span>Projects</span>
          <span>MileStones</span>
          <span>Assignee</span>
          <span>Sort</span>
        </div>
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
