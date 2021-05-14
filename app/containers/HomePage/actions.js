import * as constants from './constants';

export function getDrinks() {
  return {
    type: constants.GET_DRINKS,
  };
}

export function getDrinkInfo(id) {
  return {
    type: constants.GET_DRINK_INFO,
    id,
  };
}

export function setDrinks(drinks) {
  return {
    type: constants.SET_DRINKS,
    drinks,
  };
}

export function setDrinkInfo(drinkInfo) {
  return {
    type: constants.SET_DRINK_INFO,
    drinkInfo,
  };
}

export function setLoading(loading) {
  return {
    type: constants.SET_LOADING,
    loading,
  };
}

export function setError(error) {
  return {
    type: constants.SET_LOADING,
    error,
  };
}
