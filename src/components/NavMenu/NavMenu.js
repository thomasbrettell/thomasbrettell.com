import { useRef } from 'react';
import styles from './NavMenu.module.css';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { Link } from 'react-router-dom';

const portalElement = document.getElementById('menu-root');

const Menu = () => {
  const dispatch = useDispatch();
  const nullRef = useRef(null);
  const navOpen = useSelector((state) => state.ui.navOpen);

  const closeMenuHandler = () => {
    dispatch(uiActions.setNavOpen());
  };

  return (
    <CSSTransition
      timeout={300}
      classNames={{
        enterActive: styles['navmenu-enter-active'],
        enterDone: styles['navmenu-enter'],
        exitActive: styles['navmenu-exit-active'],
        exitDone: styles['navmenu-exit'],
      }}
      in={navOpen}
      unmountOnExit
      nodeRef={nullRef}
    >
      <div className={styles.NavMenu} ref={nullRef}>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/">FEATURED WORK</Link>
            </li>
            <li>
              <Link to="/all-work">ALL WORK <sup>kinda</sup></Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className={styles.backdrop} onClick={closeMenuHandler}></div>
      </div>
    </CSSTransition>
  );
};

const NavMenu = () => {
  return <>{ReactDOM.createPortal(<Menu />, portalElement)}</>;
};

export default NavMenu;
