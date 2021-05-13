import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const drinksSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.drinks,
  );

const loadingSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.loadingState,
  );

export { drinksSelector, loadingSelector };
