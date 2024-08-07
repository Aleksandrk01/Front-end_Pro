export default {
  items: state => state.todo.items,
  itemsLength: state => state.todo.items.length,
  loading: state => state.todo.loading,
}
