import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';

function ListItem({ onClickTitle }) {
  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          Issue Example
        </div>
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}

export default ListItem;
