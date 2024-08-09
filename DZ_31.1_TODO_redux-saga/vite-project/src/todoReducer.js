const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_TODOS_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'LOAD_TODOS_SUCCESS':
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case 'LOAD_TODOS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case 'ADD_TODO':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'DELETE_TODO':
        return {
          ...state,
          items: state.items.filter(todo => todo.id !== action.payload),
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          items: state.items.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case 'EDIT_TODO':
        return {
          ...state,
          items: state.items.map(todo =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
          ),
        };
      case 'CLEAR_TODOS':
        return {
          ...state,
          items: [],
        };
      default:
        return state;
    }
  }
  