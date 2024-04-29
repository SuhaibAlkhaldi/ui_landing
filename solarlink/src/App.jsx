
import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/LandingPage";
import AOS from 'aos';
function App() {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <div className="App">
      <MainLayout>
      <LandingPage/>
      </MainLayout>
      
    </div>
  );
}

export default App;
