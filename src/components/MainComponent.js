import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import FAQ from "./FAQComponent";
import Book from "./BookComponent";
import Contact from "./ContactComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/book" component={Book} />
              <Route exact path="/faq" component={FAQ}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}


export default Main;


