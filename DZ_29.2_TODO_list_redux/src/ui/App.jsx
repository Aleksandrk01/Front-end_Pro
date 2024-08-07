import {Container} from "@mui/material";
import AddForm from "./components/AddForm.jsx";
import ItemsList from "./components/ItemsList.jsx";
import {Provider} from "react-redux";
import {store} from "../core/store.js";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md" sx={{
                background: '#b7b7ff',
                pt: '10px',
                pb: '10px'
            }}>
                <AddForm/>
                <ItemsList/>
                <Footer />
            </Container>
        </Provider>
    )
}

export default App
