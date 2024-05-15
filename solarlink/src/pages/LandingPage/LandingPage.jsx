
import Project from "./sections/Project";
import Home from "./sections/Home";

import Operation from "./sections/Operation";
import Whysolar from "./sections/Whysolar";
import WhySubCard from "./sections/Whysubcard";
import Contact from "./sections/Contact";
const LandingPage =()=>{
    return(<div>

        <Home/>
        <Whysolar/>
        {/*<WhySubCard/>*/}
        <Operation/>
        <Project/>
        <Contact/>


    </div>)
}
export default LandingPage;
