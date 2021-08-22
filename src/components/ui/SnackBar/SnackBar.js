import styles from './SnackBar.module.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { uiActions } from '../../../store/ui-slice';

const portalElement = document.getElementById('menu-root');

const SnackBar = () => {
  const dispatch = useDispatch();
  const nullRef = useRef(null);
  const {message, status} = useSelector((state) => state.ui.snack);

  useEffect(() => {
    if(!status) {
      return
    }

    const timer = setTimeout(() => {
      dispatch(uiActions.setSnack({
        status: false
      }));
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <CSSTransition
      timeout={200}
      classNames={{
        enterActive: styles['snackbar-enter-active'],
        enterDone: styles['snackbar-enter'],
        exitActive: styles['snackbar-exit-active'],
        exitDone: styles['snackbar-exit'],
      }}
      in={status}
      unmountOnExit
      nodeRef={nullRef}
    >
      <div className={styles.SnackBar} ref={nullRef}>
        {message}
      </div>
    </CSSTransition>
  );
};

const Component = () => {
  return <>{ReactDOM.createPortal(<SnackBar />, portalElement)}</>;
};

export default Component;
