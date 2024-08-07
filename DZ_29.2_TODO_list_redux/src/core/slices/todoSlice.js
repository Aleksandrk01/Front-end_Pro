import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
}

export default createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    resetAll: (state) => {
      state.items = []
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  }
})
