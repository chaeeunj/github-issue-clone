import styles from './ListContainer.module.css';
import Button from './Button';
import ListItem from './ListItem';
import ListItemLayout from './ListItemLayout';

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
        <ListItem />
      </div>
    </div>
  );
}

export default ListContainer;
