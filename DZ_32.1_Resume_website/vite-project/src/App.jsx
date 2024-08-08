import Home from './Home'
import Todo from './Todo'
import Swapi from './Swapi'
import { BrowserRouter as Router, Routes, Route } from'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import './css/App.css'

function App() {
return(
  <Router>
  <AppHeader />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/todo" element={<Todo />} />
    <Route path="/swapi" element={<Swapi />} />
  </Routes>
  <AppFooter />
</Router>
)
}

export default App
