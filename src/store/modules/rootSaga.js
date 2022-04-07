import { all } from 'redux-saga/effects';

import reserve from './reserve/sagas';

function* rootSaga(){
  return yield all([
    reserve,
  ])
}

export default rootSaga;