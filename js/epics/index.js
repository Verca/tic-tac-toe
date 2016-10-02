import { combineEpics } from 'redux-observable';
import placeMarkEpic from './placeMarkEpic';

export default combineEpics(
  placeMarkEpic,
);
