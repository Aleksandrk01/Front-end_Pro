import { Provider } from 'react-redux';
// ui
import ButtonDecrement from "./components/ButtonDecrement.jsx";
import ButtonIncrement from "./components/ButtonIncrement.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
// core
import {store} from "../core/store.js";

function App() {
  return (
    <Provider store={store}>
        <Header />
        <ButtonIncrement/>
        <ButtonDecrement/>
        <Footer />
    </Provider>
  )
}

export default App
