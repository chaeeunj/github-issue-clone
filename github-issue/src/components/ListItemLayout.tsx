import cx from 'clsx';
import styles from './ListItemLayout.module.css';

function ListItemLayout({ children, className }) {
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        // value={checked}
        // onChange={onChangeCheckBox}
      />
      {children}
    </div>
  );
}

export default ListItemLayout;
