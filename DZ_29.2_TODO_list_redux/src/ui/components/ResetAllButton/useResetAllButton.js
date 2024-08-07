import {useDispatch, useSelector} from "react-redux";
import selectors from "../../../core/selectors.js";
import todoSlice from "../../../core/slices/todoSlice.js";
export function useResetAllButton() {
  const dispatch = useDispatch();
  const itemsLength = useSelector(selectors.itemsLength);
  const onRemove = () => {
    dispatch(todoSlice.actions.resetAll())
  }
  return {
    itemsLength,
    onRemove,
  }
}
