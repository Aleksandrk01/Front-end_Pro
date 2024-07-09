import {useContext} from "react";
import {ThemeContext, themes} from "../../../shared/model/themeContext.js";

function ChangeColor() {
    const [theme, setTheme] = useContext(ThemeContext);
    const onClick = () => {
        if (theme.background === '#ffffff') {
            setTheme(themes.green)
        } else {
            setTheme(themes.orange)
        }
    }
    return (
        <button onClick={onClick}>Change Style</button>
    )
}

export default ChangeColor
