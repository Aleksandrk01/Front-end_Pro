import {useDispatch, useSelector} from "react-redux";

import { removeTodo } from "../../../core/thunks/removeTodo.js";
import selectors from "../../../core/selectors.js";
import {checkTodo} from "../../../core/thunks/checkTodo.js";
import {changeEdit} from "../../../core/thunks/changeEdit.js";
import {saveEdit} from "../../../core/thunks/saveEdit.js";
import {useState} from "react";

export function useItem(id, defaultValue) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(defaultValue);
  const isLoading = useSelector(selectors.loading);
  const onRemove = () => {
    dispatch(removeTodo(id))
  }
  const onChecked = (event) => {
    dispatch(checkTodo(id, event.target.checked));
  }
  const onEdit = () => {
    dispatch(changeEdit(id))
  }
  const onSave = () => {
    dispatch(saveEdit(id, inputValue))
  }

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  }
  return {
    onRemove,
    onChecked,
    onEdit,
    onSave,
    isLoading,
    inputValue,
    onChangeInput
  }
}
