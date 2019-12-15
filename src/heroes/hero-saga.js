import { put, takeEvery, call, fork } from "redux-saga/effect";
import { all } from "@redux-saga/core/effect";
import {
  postHero,
  getHeroes,
  deleteHeroById,
  putHero,
  getHeroById
} from "./heroes-service";

import {
  FETCH_HEROES_SUCCESS,
  FETCH_HEROES_FAIL,
  FETCH_HEROES_REQUEST
} from "./heroes-actions";

/* function generator implementations of Saga */
// function generator is an ES5 asynchronous programming
function* fetchingHeroes() {
  // think version: dispatch FETCH_HEROES_REQUEST
  try {
    const { data } = yield call(getHeroes); // Saga: Passing a reference only
    yield put({ type: FETCH_HEROES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_HEROES_FAIL });
  }
}

/* Saga watches the actions of hero-actions */
function* watchFetchingHeroes() {
  yield takeEvery(FETCH_HEROES_REQUEST, fetchingHeroes);
}

/* Saga send all the wathcers to the sagaMiddleware to run */
export function* heroSaga() {
  yield all([
    watchFetchingHeroes()
    // other watching functions
  ]);
}
