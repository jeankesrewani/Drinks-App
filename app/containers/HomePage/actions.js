import * as constants from './constants';

export function getDrinks() {
  return {
    type: constants.GET_DRINKS,
  };
}

export function setDrinks(drinks) {
  return {
    type: constants.SET_DRINKS,
    drinks,
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
