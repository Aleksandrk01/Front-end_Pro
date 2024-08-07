import todoSlice from "../slices/todoSlice.js";

export const changeEdit = (id) => (dispatch, state) => {
  const store = state();
  const items = store.todo.items;

  const newArray = items.map(item => {
    if (item.id === id) {
      return {...item, edit: !item.edit}
    } else {
      return item;
    }
  });
  console.log('Edit Item On Server', id);
  dispatch(todoSlice.actions.setItems(newArray))
}
