import styles from './Section.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Section = (props) => {
  const sectionClasses = cx({
    Section: true,
    black: props.black,
  });

  return <section className={sectionClasses}>{props.children}</section>;
};

export default Section;
