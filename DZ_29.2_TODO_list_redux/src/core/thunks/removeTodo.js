import todoSlice from "../slices/todoSlice.js";

export const removeTodo = (id) => (dispatch, state) => {
  const store = state();
  const items = store.todo.items;

  dispatch(todoSlice.actions.setLoading(true))
  setTimeout(() => {
    const newArray = items.filter(item => item.id !== id);
    console.log('Remove Item On Server', id);
    dispatch(todoSlice.actions.setItems(newArray))
    dispatch(todoSlice.actions.setLoading(false))
  }, 2000);
}
