import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  drinks: [],
  drinkInfo: {},
  loadingState: { type: null, value: false },
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.SET_DRINKS:
        draft.drinks = action.drinks;
        break;
      case constants.SET_DRINK_INFO:
        draft.drinkInfo = action.drinkInfo;
        break;
      case constants.SET_LOADING:
        draft.loadingState = action.loading;
        break;
    }
  });

export default homeReducer;
