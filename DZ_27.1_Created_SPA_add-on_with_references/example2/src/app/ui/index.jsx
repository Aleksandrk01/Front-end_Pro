import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import '../../shared/model/index.css'
import {ThemeContext, themes} from "../../shared/model/themeContext.js";
import Header from "../../widgets/Header.jsx";
import Footer from "../../widgets/Footer.jsx";
import Main from "../../pages/ui/Main.jsx";
import NotFound from "../../pages/ui/NotFound.jsx";
import Contact from "../../pages/ui/Contact.jsx";
import ErrorBoundary from "../../feature/ErrorBoundary/ui";
import {routes} from "../../shared/config/routes.js";

function App() {
    const theme = useState(themes.orange);
    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <ErrorBoundary>
                    <div className="content" style={{background: theme[0].background}}>
                        <Header/>
                        <main>
                            <Routes>
                                <Route path="*" element={<NotFound/>}></Route>
                                <Route path={routes.main.path} element={<Main/>}></Route>
                                <Route path={routes.contacts.path} element={<Contact/>}></Route>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </ErrorBoundary>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App
