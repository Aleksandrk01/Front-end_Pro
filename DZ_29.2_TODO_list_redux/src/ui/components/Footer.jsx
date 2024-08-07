import {ResetAllButton} from "./ResetAllButton/index.jsx";
import {useSelector} from "react-redux";
import selectors from "../../core/selectors.js";

export default function Footer() {
    const length = useSelector(selectors.itemsLength)
    return (
        <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <ResetAllButton />
            Count: {length}
        </footer>
    )
}
