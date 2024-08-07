import todoSlice from "../slices/todoSlice.js";

export const saveEdit = (id, inputValue) => (dispatch, state) => {
  const store = state();
  const items = store.todo.items;

  const newArray = items.map(item => {
    if (item.id === id) {
      return {...item, edit: false, text: inputValue}
    } else {
      return item;
    }
  });
  console.log('Save Item On Server', id);
  dispatch(todoSlice.actions.setItems(newArray))
}
