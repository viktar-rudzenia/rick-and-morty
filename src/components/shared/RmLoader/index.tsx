import styles from './index.module.scss';

export default function RmLoader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader} />
    </div>
  );
}
