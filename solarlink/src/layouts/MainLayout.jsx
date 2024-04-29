import Header from "../components/Header";
import Footer from "../components/Footer";
const MainLayout =({children})=>{
//let{children}=props
   return(<div> 
    <Header/>
    <div className="clear"/>
        
    
    {children}
    <Footer/>
    
    
   </div>)
}
export default MainLayout;