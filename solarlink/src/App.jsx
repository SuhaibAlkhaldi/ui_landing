
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import AOS from 'aos';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className="App">
      <Router>
      <MainLayout/>
      </Router>


    </div>
  );
}

export default App;
