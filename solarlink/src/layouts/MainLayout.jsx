import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "../pages/LandingPage/LandingPage";
import {  Route,Routes} from 'react-router-dom';
import PricingPage from "../pages/PricingPage/PricingPage";
import PriceDetailsPage from "../pages/PriceDetailsPage/PriceDetailsPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const MainLayout =({children})=>{
//let{children}=props
   return(<div>
    <Header/>
    <div className="clear"/>

       <Routes>
           <Route  path={"/"}  element={<LandingPage/>}/>
           <Route  path={"/pricing"}  element={<PricingPage/>}/>
           <Route  path={"/PriceDetailsPage/:id"}  element={<PriceDetailsPage/>}/>
           <Route  path={"/Manager"}  element={<LoginPage/>}/>
           {/*<Redirect exact from={"/"} to={"/"} />*/}
           {/*<Route path='*' component={NotFoundLayout} />*/}
       </Routes>

    {children}
    <Footer/>


   </div>)
}
export default MainLayout;
