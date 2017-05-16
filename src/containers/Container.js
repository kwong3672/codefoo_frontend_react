import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

import Videos from '../components/Videos';
import Articles from '../components/Articles';


export default class Container extends Component {
  render() {
    return (
      <div className="row">
        <Redirect exact path="/" to="/videos" />
        <Route path="/videos" component={Videos} />
        <Route path="/articles" component={Articles} />
      </div>
    );
  } 
}
