import styles from './AllWork.module.css';
import allwork from '../../store/allwork';

const AllWork = () => {
  return (
    <section className={styles.AllWork}>
      <div className={styles.grid}>
        {allwork.map((work) => (
          <div className={styles.item} key={work.id}>
            <a
              className={styles[work.light]}
              href={work.link}
              rel="noreferrer"
              target="_blank"
            >
              {work.title}
            </a>
            <img src={work.image} alt={work.title}></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllWork;
