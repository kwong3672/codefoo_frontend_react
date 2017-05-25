import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import Articles from '../containers/Articles';
import Videos from '../containers/Videos';



const Container = () => { 
  return (
    <div>
      <Redirect exact path="/" to="/videos" />
      <Route path="/videos" component={Videos} />
      <Route path="/articles" component={Articles} />
    </div>
  );
}; 

export default Container;
