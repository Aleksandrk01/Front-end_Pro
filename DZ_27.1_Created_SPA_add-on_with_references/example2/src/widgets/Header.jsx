import Link from "../shared/ui/Link.jsx";
import ChangeColor from "../feature/ChangeColor/ui/index.jsx";

function Header() {
    return (
        <header className="header">
            <h1 className="logo">Ф.И.О.</h1>
            <ul className="header__logo">
                <li><Link to="/" type="NavLink">Главная</Link></li>
                <li><Link to="/todo">TODO лист</Link></li>
                <li><Link to="/contacts" type="NavLink">Контакты</Link></li>
            </ul>
            <ChangeColor />
        </header>
    )
}

export default Header
