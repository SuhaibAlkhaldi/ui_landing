import { useEffect } from 'react'
import img1 from '../../../assets/images/project01_th.jpg'
import img2 from '../../../assets/images/project02_th.jpg'
import img3 from '../../../assets/images/project03_th.jpg'
import img4 from '../../../assets/images/project04_th.jpg'
import img5 from '../../../assets/images/project05_th.jpg'
import img6 from '../../../assets/images/project06_th.jpg'
import baguetteBox from 'baguettebox.js';
const Project =()=>{
    console.log('laith')
    useEffect(()=>{
        baguetteBox.run('.photos');
    })
   return(<section id="project" className="photo-gallery py-4 py-xl-5 mt-5">
   <div className="container">
       <div className="row mb-5">
           <div className="col-md-8 col-xl-6 text-center mx-auto">
               <h2>Some of our works</h2>
               <p className="w-lg-50">Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
           </div>
       </div>
       <div className="row gx-2 gy-2 row-cols-1 row-cols-md-2 row-cols-xl-3 photos" data-bss-baguettebox="">
           <div className="col item">
             <a href={img1} data-aos="fade" data-aos-once="true" className="aos-init aos-animate"><img className="img-fluid" src={img1} alt="Project"/>
             <div className="over"><span>Project number 1</span></div>
             </a>
           </div>
           <div className="col item">
             <a href={img2} data-aos="fade" data-aos-once="true" data-aos-delay="250" className="aos-init aos-animate"><img className="img-fluid" src={img2} alt="Project"/>
             <div className="over"><span>Project number 3</span></div></a>
           </div>
           <div className="col item">
             <a href={img3} data-aos="fade" data-aos-once="true" data-aos-delay="550" className="aos-init aos-animate"><img className="img-fluid" src={img3} alt="Project"/>
             <div className="over"><span>Project number 3</span></div></a>
           </div>
           <div className="col item">
             <a href={img4} data-aos="fade" data-aos-once="true" className="aos-init aos-animate"><img className="img-fluid" src={img4} alt="Project"/>
               <div className="over"><span>Project number 4</span></div></a>
           </div>
           <div className="col item">
             <a href={img5} data-aos="fade" data-aos-once="true" data-aos-delay="250" className="aos-init aos-animate"><img className="img-fluid" src={img5} alt="Project"/>
             <div className="over"><span>Project number 5</span></div></a>
           </div>
           <div className="col item">
             <a href={img6} data-aos="fade" data-aos-once="true" data-aos-delay="550" className="aos-init aos-animate"><img className="img-fluid" src={img6} alt="Project"/>
             <div className="over"><span>Project number 6</span></div></a>
           </div>
     </div>
 </div>
</section>)
}
export default Project;
