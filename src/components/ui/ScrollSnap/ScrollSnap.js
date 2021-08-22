import styles from './ScrollSnap.module.css'

const ScrollSnap = (props) => {
  return (
    <div className={styles.ScrollSnap}>{props.children}</div>
  )
}

export default ScrollSnap