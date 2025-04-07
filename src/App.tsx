
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./components/CategoryPage";
import NavCategory from "./components/NavCategory";
import './App.css'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category" element={<NavCategory />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;