/* action type */

export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

/* 
action creators for Saga, which uses function generator side effect. 
Saga will watch these request
*/

export const fetchHeroes = () => ({
  type: FETCH_HEROES_REQUEST
});
