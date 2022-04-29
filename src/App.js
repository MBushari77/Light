import React from 'react'
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './static/bootstrap.css';
import './static/App.css';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import NewSession from './components/NewSession';
import OurGallary from './components/OurGallary';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const [swIcon, setSwIcon] = useState('icon-moon');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    setSwIcon((curr) => (curr === 'icon-moon' ? 'icon-sun' : 'icon-moon'));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={ theme }>
      <center>
          <button className="mode_switcher" onClick={ toggleTheme }><i className={ swIcon }></i></button>
          <Router>
            <Switch>
              <Route exact path='/' component={ LandingPage } />
              <Route path='/contact' component={ Contact } />
              <Route path='/admin-login-light-password' component={ Dashboard } />
              <Route path='/session' component={ NewSession } />
              <Route path='/gallary' component={ OurGallary } />
            </Switch>
          </Router>
      </center>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
