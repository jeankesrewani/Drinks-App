import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const drinksSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.drinks,
  );

const drinkInfoSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.drinkInfo,
  );

const loadingSelector = () =>
  createSelector(
    selectHome,
    homeState => homeState.loadingState,
  );

export { drinksSelector, loadingSelector, drinkInfoSelector };
