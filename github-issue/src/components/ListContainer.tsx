import cx from 'clsx';
import styles from './ListContainer.module.css';

import Button from './Button';
import ListItem from './ListItem';
import ListItemLayout from './ListItemLayout';
import Modal from './Modal';

import { useState } from 'react';

function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);

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
        <ListFilter
          onChangeFilter={(filteredData) => {
            // 필터링된 요소에 맞게 데이터 불러오기
          }}
        />
      </ListItemLayout>
      <div className={styles.container}>
        {list.map((listItem, index) => (
          <ListItem
            key={index}
            badges={[
              {
                color: 'red',
                title: 'Bug',
              },
            ]}
          />
        ))}
      </div>
    </div>
  );
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Projects</ListFilterItem>
        <ListFilterItem>MileStones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  );
}

function ListFilterItem({ onClick, children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▾
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder={'Filter labels'}
          searchDataList={['bug', 'Labels', 'Apple']}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            onChangeFilter();
          }}
        />
      </div>
    </div>
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
