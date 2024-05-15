const Footer =()=>{
   return(
       <footer className="text-white footer-clean" id="footer" >
           <div className="container">
               <div className="row justify-content-center">
                   <div className="col-sm-4 col-md-3 item">
                       <h3>Services</h3>
                       <ul>
                           <li><a href="#">Solar design</a></li>
                           <li><a href="#">Installation</a></li>
                           <li><a href="#">Maintenance<br/></a></li>
                       </ul>
                   </div>
                   <div className="col-sm-4 col-md-3 item">
                       <h3>About</h3>
                       <ul>
                           <li><a href="#">Company</a></li>
                           <li><a href="#">Team</a></li>
                           <li><a href="#">Legacy</a></li>
                       </ul>
                   </div>
                   <div className="col-sm-4 col-md-3 item">
                       <h3>Location</h3>
                       <ul>
                           <li><a href="#">123th Avenues</a></li>
                           <li><a href="#">City Park</a></li>
                           <li><a href="#">Suncity</a></li>
                       </ul>
                   </div>
                   <div className="col-lg-3 item social">
                       <a className="d-inline-flex justify-content-center align-items-center bi bi-facebook"></a>
                       <a className="d-inline-flex justify-content-center align-items-center bi bi-twitter"></a>
                       <a className="d-inline-flex justify-content-center align-items-center bi bi-telegram"></a>
                       <a className="d-inline-flex justify-content-center align-items-center bi bi-whatsapp"></a>
                       <p className="copyright">SolarLink © {new Date().getFullYear()}</p>
                   </div>
               </div>
           </div>
       </footer>
   )
}
export default Footer;
