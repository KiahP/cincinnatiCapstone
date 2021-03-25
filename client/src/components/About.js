import React from 'react';
import Drake from './Drake.jpg';
import Kiah from './Kiah.jpg';
import Aarika from './Aarika.jpg';
import Ron from './Ron.jpeg';
import "../index.css";
import AOS from 'aos'
import 'aos/dist/aos.css';
import MetroCincy from './MetroCincy.jpg';



const About = () => {
AOS.init();

 
    
        return (
            <div className="opener">
        <div className= 'container-fluid'>
            {/* <h3>About the Team</h3> */}
         <header id="about-header">
         <div className="container-fluid" id="about-head-bg">
             <div>
                 <h3 className="bigger-font text-white">Meet the Team</h3>
                 <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, eius error. Nostrum corrupti, quam modi repellendus voluptatem tempore reiciendis voluptates explicabo dolorem laborum obcaecati tempora reprehenderit labore dolore quis ad, dolores deleniti fugit, sequi atque! Vel magni harum, nam animi molestiae facere iure iusto fuga beatae corporis qui possimus sit!</p>
             </div>
         </div>

         </header>

{/* <br/>
<br/>
<div className="city">
    <div className="container aos-init">
    {/* <video id="" preload="auto" autoPlay="true" loop volume="0">
    </video> */}

    {/* <iframe className="vid"  preload="auto" autoPlay="true" loop volume="0" src="https://www.youtube.com/embed/G8EUiH00BrU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

    {/* <img className="cincy shadow-lg"  data-aos="fade-down" src={MetroCincy} alt="Metro Cincinnati Aerial Map"/> */}
    
    
<br/>

            <div className= 'post-container'>
            <div className= 'card-deck-4' id='deck'>

            <div className="card aos-init shadow" data-aos='fade-right'>
                <div className="image">
            <img src={Drake} alt="Drake" id="drake" />
                </div>
            <p> <blockquote  className="text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quae eius sunt eveniet. Repudiandae, earum veritatis doloremque unde ad dolor!
            <br/>
            - Drake</blockquote>
            </p>
            </div>
            <br/>

            <div data-aos='fade-left' className='card aos-init shadow' >
                <div className="image">
             <img src={Kiah} alt="Kiah" id="kiah"/>
                </div>
            <p > <blockquote  className="text-center" > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facilis distinctio esse quasi incidunt quisquam explicabo quas maiores quod voluptatibus!
            <br/>
            - Kiah</blockquote></p>
            </div>
            <br/>

            <div  className="card aos-init shadow" data-aos='fade-right'>
                <div className="image">
            <img src={Aarika} alt="Aarika" id="aarika"/>
                </div>
            <p> <blockquote  className="text-center"> 
            Creating this site with my team was a pleasure, and an overall great learning experience. To be able to collaborate and bring together the best of each individuals strong points; creating these amazing pages you see now. Thank you to Kable Academy for giving me the opportunity to learn and promote the foundating skills necessary to build upon, for my present and future career in Web Development. 
            <br/> 
            - Aarika</blockquote></p>
            </div>
            <br/>

            <div data-aos='fade-left' className='card aos-init shadow'>
                <div className="image">
            <img src={Ron} alt="Ron" id="ron" />
                </div>
            <p className="text-center"> <blockquote  className="text-center">I just think how amazing it is to me how I knew nothing about code to that now I can actually design wonderful things and let my creativity free through web design.
            <br/>
            - Ron</blockquote> </p>
            </div>

            </div>
            </div>

        </div>


       </div>
    )
}

export default  (About)
