import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {useSelector} from "react-redux";
import selectors from "../../core/selectors.js";
import Item from "./Item";

export default function ItemsList() {
    const items = useSelector(selectors.items);
    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
            mt: '10px'
        }}>
            <List>
                {items.map((item, index) => (
                    <Item
                        text={item.text}
                        index={index}
                        id={item.id}
                        checked={item.checked}
                        key={item.id}
                        edit={item.edit}
                    />
                ))}
            </List>
        </Box>
    );
}
