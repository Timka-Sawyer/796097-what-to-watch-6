import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import Error404 from '../error-404/error-404';


const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route exact path="/">
          <MainScreen films={props.films} />
        </Route>
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    year: PropTypes.number
  })),
};

export default App;
