import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

/*
 * Type
 */
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;
type CounterState = {
  count: number;
};

/*
 * Constant
 */
export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
export const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

/*
 * Actions
 */
export const increase = () => ({ type: INCREASE } as const);
export const decrease = () => ({ type: DECREASE } as const);

export const increaseAsync = () => ({ type: INCREASE_ASYNC } as const);
export const decreaseAsync = () => ({ type: DECREASE_ASYNC } as const);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga(): Iterator<any> {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState: CounterState = {
  count: 0
};

/*
 * reducer
 */
const reducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
