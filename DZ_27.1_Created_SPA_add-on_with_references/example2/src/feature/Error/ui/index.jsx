import {useState} from "react";

function Error() {
    const [theme, setTheme] = useState();
    const onClick = () => {
        setTheme({})
    }

    return (
        <>
            <button onClick={onClick}>Change Style</button>
            {theme === undefined ? 'undefined' : theme}
        </>
    )
}

export default Error
