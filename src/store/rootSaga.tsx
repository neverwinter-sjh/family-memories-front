import { all } from 'redux-saga/effects';
import { counterSaga } from '@/store/storeModules/counter';

export default function* rootSaga(): IterableIterator<any> {
  yield all([counterSaga()]);
}
