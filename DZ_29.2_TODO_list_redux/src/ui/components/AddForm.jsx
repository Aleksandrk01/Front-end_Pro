import { v4 as uuidv4 } from 'uuid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';
import {Field, Form} from "react-final-form";
import {useDispatch} from "react-redux";
import Input from "./Input.jsx";
import todoSlice from "../../core/slices/todoSlice.js";

export default function AddForm() {
    const dispatch = useDispatch();
    const onSubmit = values => {
        dispatch(todoSlice.actions.addItem({ id: uuidv4(), text: values.inputValue, checked: false, edit: false }))
    }
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form }) => {
                const submitForm = (event) => {
                    handleSubmit(event)
                    form.reset();
                }
                return (
                    <Paper
                        component="form"
                        onSubmit={submitForm}
                        sx={{p: '2px 4px', mt: '10px', display: 'flex', alignItems: 'center', width: '100%'}}
                    >
                        <Field name="inputValue" component={Input}/>
                        <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                        <IconButton type="submit" color="primary" sx={{p: '10px'}} aria-label="directions">
                            <DirectionsIcon/>
                        </IconButton>
                    </Paper>
                )
            }}
        />
    );
}
