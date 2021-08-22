import styles from './Wrapper.module.css';

const Wrapper = (props) => {
  return <div className={styles.Wrapper}>{props.children}</div>;
};

export default Wrapper;
