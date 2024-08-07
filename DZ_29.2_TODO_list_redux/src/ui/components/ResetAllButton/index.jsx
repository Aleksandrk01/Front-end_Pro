import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {useResetAllButton} from "./useResetAllButton.js";

export function ResetAllButton() {
    const {onRemove, itemsLength} = useResetAllButton();
    return (
        <IconButton
            disabled={itemsLength === 0}
            color="primary"
            sx={{p: '10px', border: '1px solid blue', marginTop: '10px'}}
            onClick={onRemove} aria-label="directions">
            <DeleteIcon/>
        </IconButton>
    )
}
