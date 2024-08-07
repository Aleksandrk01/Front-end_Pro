import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import {Fragment} from "react";
import {useItem} from "./useItem.js";

export default function Item(props) {
    const {text, index, id, checked, edit} = props;
    const {onRemove, isLoading, onChecked, onEdit, onSave, inputValue, onChangeInput} = useItem(id, text);
    return (
        <>
            {index !== 0 && <Divider/>}
            <ListItem disablePadding> <ListItemButton>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                    <Checkbox checked={checked} onChange={onChecked} disabled={isLoading}/>
                    {edit
                        ? (
                            <TextField variant="outlined" onInput={onChangeInput} defaultValue={inputValue}/>
                        ) : (
                            <ListItemText primary={text}/>
                        )}
                </div>
                <button disabled={isLoading} onClick={edit ? onSave : onEdit}>{edit ? 'Save' : 'Edit'}</button>
                <button disabled={isLoading} onClick={onRemove}>{isLoading ? '...Loading' : 'Remove'}</button>
            </ListItemButton> </ListItem>
        </>
    );
}
