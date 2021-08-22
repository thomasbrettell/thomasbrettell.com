import styles from './Hamburger.module.css';
import classNames from 'classnames/bind';
import { useDispatch, useSelector} from 'react-redux'
import { uiActions } from '../../../store/ui-slice';

const cx = classNames.bind(styles);

const Hamburger = () => {
  const dispatch = useDispatch()
  const navOpen = useSelector(state => state.ui.navOpen)

  const hamburgerClasses = cx({
    Hamburger: true,
    open: navOpen,
  });

  const openHandler = () => {
    dispatch(uiActions.setNavOpen())
  };

  return (
    <div className={hamburgerClasses} onClick={openHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
