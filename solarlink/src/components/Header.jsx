import logo from '../assets/images/projectlogo.png'
const Header =()=>{
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
        
        <div onClick= {()=>scrollto('home')} className="item clickable">
            Home
        </div>
        <div onClick= {()=>scrollto('operation')} className="item clickable">
            operation
        </div>
        <div  onClick= {()=>scrollto('project')}className="item clickable">
            project
            <div onClick= {()=>scrollto('contact')} className="item clickable">
            Contact   
        </div>
    </div>
    </div>
   </div>)

}
export default Header;
