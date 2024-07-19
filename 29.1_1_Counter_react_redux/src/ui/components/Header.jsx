import {useSelector} from "react-redux";
import selector from "../../core/slice/selectors.js";

export default function Header() {
    const value = useSelector(selector.counter.value);
    return <header>header: <span id="value">{value}</span></header>
}
