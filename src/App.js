import React, { useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavManager from './components/objects/NavManager'
import NavOverlay from './components/objects/NavOverlay';
import About from './components/views/About';
import Home from './components/views/Home'
import WhySuites from './components/views/WhySuites'
import TheSuites from './components/views/TheSuites'
import FindStylist from './components/views/FindStylist'
import Reserve from './components/views/Reserve';
function App() {
  const [homeScreen, isHomeScreen] = useState(false);

  return (
    <Router>
      <span className="background" />
      <NavOverlay />
      <NavManager homeScreen={homeScreen} />
      <Route exact path="/" render={() => <Home isHomeScreen={isHomeScreen} />} />
      <Route path="/about" component={About} />
      <Route path="/reserve" component={Reserve} />
      <Route path="/find-stylist" component={FindStylist} />
      <Route path="/why-suites" component={WhySuites} />
      <Route path="/the-suites" component={TheSuites} />
    </Router>

  );
}

export default App;
