import './styles/App.css';
import {BrowserRouter as Routes, Switch, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>

        <NavBar></NavBar>

        <Switch>

          <Route exact path="/" >
            <Home></Home>
          </Route>

        </Switch>


        <Footer></Footer>

      </Routes>
    </div>
  );
}

export default App;