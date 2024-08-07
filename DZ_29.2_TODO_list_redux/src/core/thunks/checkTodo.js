import todoSlice from "../slices/todoSlice.js";

export const checkTodo = (id, value) => (dispatch, state) => {
  const store = state();
  const items = store.todo.items;

  dispatch(todoSlice.actions.setLoading(true))
  setTimeout(() => {
    const newArray = items.map(item => {
      if (item.id === id) {
        return {...item, checked: value}
      } else {
        return item;
      }
    });
    console.log('Checked Item On Server', id, value);
    dispatch(todoSlice.actions.setItems(newArray))
    dispatch(todoSlice.actions.setLoading(false))
  }, 2000);
}
