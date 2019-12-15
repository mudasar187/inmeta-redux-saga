import * as types from "./heroes-actions";

const initialState = {
  heroes: [],
  hero: { id: "", firstName: "", lastName: "", house: "", knownAs: "" },
  isLoading: false
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_HEROES_REQUEST:
      return { ...state, isLoading: true };
    case types.FETCH_HEROES_SUCCESS:
      return { ...state, isLoading: false, heroes: action.payload };
    case types.FETCH_HEROES_FAIL:
      return { ...state, isLoading: false };
    case types.REMOVE_HERO_REQUEST:
      return { ...state, isLoading: true };
    case types.REMOVE_HERO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        heroes: state.heroes.filter(h => h.id !== action.payload)
      };
    case types.REMOVE_HERO_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
