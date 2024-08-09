import { takeEvery, call, put } from 'redux-saga/effects';

// Симуляция API вызова
function fetchTodosApi() {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'Sample Todo', completed: false }]), 1000)
  );
}

function* loadTodos() {
  try {
    const todos = yield call(fetchTodosApi);
    yield put({ type: 'LOAD_TODOS_SUCCESS', payload: todos });
  } catch (error) {
    yield put({ type: 'LOAD_TODOS_FAILURE', error });
  }
}

function* watchTodoActions() {
  yield takeEvery('LOAD_TODOS_REQUEST', loadTodos);
  // Вы можете добавить другие саги для обработки других экшенов, таких как ADD_TODO, DELETE_TODO и т.д.
}

export default function* rootSaga() {
  yield watchTodoActions();
}
