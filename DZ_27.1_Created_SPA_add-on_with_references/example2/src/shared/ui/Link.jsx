import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../model/themeContext.js"
function Link(props) {
    const [theme] = useContext(ThemeContext);
    const { to, children, href } = props;
    if (to) {
        return (
            <NavLink to={to} style={{ color: theme.color }}>
                {children}
            </NavLink>
        )
    } else {
        return (
            <a href={href} style={{ color: theme.color }}>
                {children}
            </a>
        )
    }
}

export default Link;

// 1) createContext
// 2) Add provider to root fron result createContext
// 3) Inside component useContext with result createContext
