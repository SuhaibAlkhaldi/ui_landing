import logo from '../assets/images/projectlogo.png'
import {useNavigate} from "react-router-dom";
const Header =()=>{
    const navigate =  useNavigate();
    const scrollto=(id)=>{
        let dom =document.getElementById(id);
        if (dom){
            dom.scrollIntoView({behavior:'smooth'})


        }
    }
   return(<div className="header-section">
    <div className="logo-section" >
        <div className="item">
           <img  className ='image-logo' src={logo}/>
        </div>
        <div className="item">
            SolarLink
        </div>
    </div>

       <div className="menu-section">

           <div onClick={() => {
               navigate("/");
              setTimeout(()=>{scrollto('home')},10)  ;
           }}
           className="item clickable">
               Home
           </div>
           <div onClick=
                    {() => {
                        navigate("/");
                        setTimeout(()=>{scrollto('operation')},10)  ;
                    }}
                   className="item clickable">
               Operation
           </div>
           <div onClick=
                    {() => {
                        navigate("/");
                        setTimeout(()=>{scrollto('project')},10)  ;
                    }}
                     className="item clickable">
               Project
           </div>
           <div onClick=
                    {() => {
                        navigate("/");
                        setTimeout(()=>{scrollto('contact')},10)  ;
                    }}
                 className="item clickable">
               Contact
           </div>
           <div onClick={() => navigate("/pricing") } className="item clickable">
              Pricing
           </div>

       <div onClick={() => navigate("/Manager")  } className="item clickable">
           Manager
       </div>


       </div>
   </div>)

}
export default Header;
