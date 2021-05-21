import MainPage from './MainPage/MainPage';
import classes from './App.module.css';
import Trip from './Trip/Trip';
import { Route } from "react-router-dom";
import Equipment from './Equipment/Equipment';
import EachDay from './EachDay/EachDay';
import React from "react";
import DayDescription from './DayDescription/DayDescription';

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.querySelector('[class*=navigation]').style.boxShadow = 'var(--shd-scrl,0 0 5px rgba(0,0,0,.5))';
  } else {
    document.querySelector('[class*=navigation]').style.boxShadow = 'none';
  }
});

function App() {
  return (
    <div className={classes.app}>
      <Route path='/main' component={MainPage} />
      <Route path='/trip' component={Trip} />
      <Route path='/equipment' component={Equipment} />
      <Route path='/day' component={EachDay} />
      <Route path='/dayDesc' component={DayDescription} />
      <Route path='/cities' component={DayDescription} />
    </div>
  );
}

export default App;
