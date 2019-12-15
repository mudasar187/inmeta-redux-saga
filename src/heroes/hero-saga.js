import { put, takeEvery, call, fork } from "redux-saga/effects";
import { all } from "@redux-saga/core/effects";
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
  FETCH_HEROES_REQUEST,
  REMOVE_HERO_REQUEST,
  REMOVE_HERO_FAIL,
  REMOVE_HERO_SUCCESS
} from "./heroes-actions";

/* 
function generator implementations of Saga 
function generator is an ES5 asynchronous programming
*/
function* fetchingHeroes() {
  // thunk version: dispatch FETCH_HEROES_REQUEST
  try {
    const { data } = yield call(getHeroes); // Saga: Passing a reference only
    yield put({ type: FETCH_HEROES_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: FETCH_HEROES_FAIL });
  }
}

function* removingHero({ payload: id }) {
  try {
    yield deleteHeroById(id);
    yield put({ type: REMOVE_HERO_SUCCESS, payload: id });
  } catch (e) {
    yield put({ type: REMOVE_HERO_FAIL, payload: e.message });
  }
}

/* Saga watches the actions of hero-actions */
function* watchFetchingHeroes() {
  yield takeEvery(FETCH_HEROES_REQUEST, fetchingHeroes);
}

function* watchRemovingHero() {
  yield takeEvery(REMOVE_HERO_REQUEST, removingHero);
}

/* Saga send all the wathcers to the sagaMiddleware to run */
export function* heroSaga() {
  yield all([
    watchFetchingHeroes(),
    watchRemovingHero()
    // other watching functions
  ]);
}
