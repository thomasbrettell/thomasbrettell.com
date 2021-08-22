import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './pages/Home';
import Hamburger from './components/ui/Hamburger/Hamburger';
import NavMenu from './components/NavMenu/NavMenu';
import LogoIcon from './components/LogoIcon/LogoIcon';
import Contact from './pages/Contact/Contact'
import SnackBar from './components/ui/SnackBar/SnackBar'
import AllWork from './pages/AllWork/AllWork';

function App() {
  return (
    <>
      <Hamburger />
      <Link to="/">
        <LogoIcon />
      </Link>
      <SnackBar />
      <NavMenu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/all-work" exact>
          <AllWork />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
