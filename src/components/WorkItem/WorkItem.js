import Grid from '../ui/Grid/Grid';
import Section from '../ui/Section/Section';
import Wrapper from '../ui/Wrapper/Wrapper';
import styles from './WorkItem.module.css';
import BlackWhiteImageRevealer from '../BlackWhiteImageRevealer/BlackWhiteImageRevealer';

const WorkItem = (props) => {
  const { title, body, subheading, image, reverse, link, role } = props;

  return (
    <Section>
      <Wrapper>
        <Grid reverse={reverse}>
          <div className={styles.side}>
            <div className={styles.position}>
              <div className={styles.img}>
                <div className={styles.top}>
                  <BlackWhiteImageRevealer image={image} alt={title} />
                </div>
                <div className={styles.bottom}>
                  <h2>{title}</h2>
                  {link && <a className={styles.link} target='_blank' rel="noreferrer" href={link}>See it</a>}
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.side} ${styles.bottom}`}>
            <div className={styles.position}>
              <div className={styles.details}>
                <div className={styles.text}>
                  <h2>{subheading}</h2>
                  <span className={styles.role}><em>{role}</em></span>
                  <p>{body}</p>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default WorkItem;
