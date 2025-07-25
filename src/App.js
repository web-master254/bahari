import HomePage from "./pages/homepage";
import Dashboard from "./components/dashboard/dashboard";
import AboutPage from "./pages/about";
import Profit_page from "./pages/profit";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import "./index.css"


function App() {

 
  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path ="/profits" element={<Profit_page/>}/>
      <Route path = "*" element = {<>No Page Found</>}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;
