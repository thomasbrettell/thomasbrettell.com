import styles from './Home.module.css';
import ScrollSnap from '../components/ui/ScrollSnap/ScrollSnap';
import WorkItem from '../components/WorkItem/WorkItem';
import LogoDesktop from '../components/Logo/Logo';
import featuredwork from '../store/featuredwork'
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <ScrollSnap>
      <section className={styles.Home}>
        <LogoDesktop />
        <LogoDesktop mobile />
        <div className={styles['scroll-indicator']}></div>
      </section>
      {featuredwork.map((item, index) => (
        <WorkItem 
          key={item.id}
          title={item.title}
          subheading={item.subheading}
          body={item.body}
          image={item.image}
          reverse={index % 2}
          link={item.link}
          role={item.role}
        />
      ))}
      <Contact />
    </ScrollSnap>
  );
};

export default Home;
