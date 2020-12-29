import React from "react";
//Import Pages
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
     <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
