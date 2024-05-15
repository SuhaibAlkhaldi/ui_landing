import mainimage from '../../../assets/images/operation.png'
const Operation =()=>{
    console.log('laith')
   return(<section className="container py-4 py-xl-5" id="operation">
   <div className="row row-cols-1 row-cols-md-2">
       <div className="col d-flex flex-column justify-content-around align-items-center">
           <h2>How does it work?</h2><img className="rounded img-fluid d-xxl-flex aos-init aos-animate" data-aos="fade-right" src={mainimage} alt="how does it work"/>
       </div>
       <div className="col d-flex flex-column justify-content-center p-4" id="howCards">
           <div className="text-center text-md-start d-flex flex-row align-items-center mb-5 p-2">
               <div className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md me-3 bi bi-sun"></div>
               <div>
                   <h4>Panels: Taking the sun</h4>
                   <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#" className="link-read">Learn More&nbsp; <i className="bi bi-arrow-right"></i></a>
               </div>
           </div>
           <div className="text-center text-md-start d-flex flex-row align-items-center p-2 mb-5">
               <div className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md me-3 bi bi-lightning-charge-fill"></div>
               <div>
                   <h4>Microinverter</h4>
                   <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#" className="link-read">Learn More&nbsp; <i className="bi bi-arrow-right"></i></a>
               </div>
           </div>
           <div className="text-center text-md-start d-flex flex-row align-items-center p-2 mb-5">
               <div className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md me-3 bi bi-lightbulb-fill"></div>
               <div>
                   <h4>Power at home</h4>
                   <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#" className="link-read">Learn More&nbsp; <i className="bi bi-arrow-right"></i></a>
               </div>
           </div>
           <div className="text-center text-md-start d-flex flex-row align-items-center p-2">
               <div className="bs-icon-lg bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon md me-3 bi bi-speedometer2"></div>
               <div>
                   <h4>Net Meter.</h4>
                   <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#" className="link-read">Learn More&nbsp; <i className="bi bi-arrow-right"></i> </a>
               </div>
           </div>
       </div>
   </div>
</section>)

}
export default Operation;
