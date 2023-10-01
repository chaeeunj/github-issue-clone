import styles from './Badge.module.css';

import cx from 'clsx';

function Badge({ title, color }) {
  return <span className={cx(styles.badge, styles[color])}>{title}</span>;
}

export default Badge;
