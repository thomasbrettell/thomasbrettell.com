import styles from './BlackWhiteImageRevealer.module.css';

const BlackWhiteImageRevealer = (props) => {
  return (
    <img
      src={props.image}
      alt={props.alt}
      className={styles.img}
    />
  );
};

export default BlackWhiteImageRevealer;
