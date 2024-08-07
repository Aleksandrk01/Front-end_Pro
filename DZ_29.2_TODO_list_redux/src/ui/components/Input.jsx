import { TextField } from '@mui/material';

export default function Input(props) {
    const {
        input,
        meta
    } = props;
    return (
        <TextField
            sx={{ml: 1, flex: 1}}
            {...input}
            error={!!meta.error}
            helperText={meta.error}
        />
    );
}
