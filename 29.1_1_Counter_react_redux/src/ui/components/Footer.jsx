import {useSelector} from "react-redux";
import selector from "../../core/slice/selectors.js"

export default function Footer() {
    const value = useSelector(selector.counter.value);
    return <footer>footer: <span id="value">{value}</span></footer>
}
