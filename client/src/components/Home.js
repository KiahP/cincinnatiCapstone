import React from 'react'
import Rhinegeist from './Images/Rhinegeist.png'
import Platform from './Images/Platform.png'
import FiftyWest from './Images/FiftyWest.png'
import Urban from './Images/Urban.png'
import Reds from './Images/Reds.png'
import Bengals from './Images/Bengals.png'
import UC from './Images/UC.png'
import FC from './Images/FC.png'
const Home = () => {
    return (
<div className="margin">
<header id="header-home">
      <div className="container-fluid home-bg">
      <div className="header-text">
      <h2 className="bigger-font text-white">Welcome To Cincinnati!</h2>
      <p className=" bat text-white">Cincinnati boasts a thriving arts scene, major league sports teams, a world-class zoo and aquarium and a revitalized riverfront with shopping, clubs and restaurants. Located on the Ohio River in southwestern Ohio, Cinci claims more than 4,000 restaurants, and more chili restaurants than any other city in the world. Adrenaline-junkies will want to visit the nearby Kentucky Speedway and Paramount's Kings Island, home of the tallest and fastest wooden roller coaster in the world.</p>
      </div>
      </div>
      <div className="container-fluid text-center mt-5">
        <div className="row">
          <div className="col-3">
          <h2>So Why Cincy?</h2>
          <p className="text-center">Cincinnati is one place that’s been popping up on everyone's radar consistently over the past decade: through its street art revolution, through its beer scene, through its place in innovation, boasting the headquarters of such global enterprises as Procter & Gamble. What you will find here in Cincinnati is a city mindful of its approach to urban growth and one bursting at the seams with talent in every possible arena.</p>
          <h5>Check Out Some Of Our Best Breweries</h5>
          <hr/>
            <div className="container">
              <img className="logos" src={Rhinegeist} alt=""/>
              <img className="logos" src={Platform} alt=""/>
              <img className="logos" src={FiftyWest} alt=""/>
              <img className="logos" src={Urban} alt=""/>
            </div>
          </div>
          <div className="col-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/G8EUiH00BrU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          <div ClassName="col-6">
          <div class="clearfix mx-auto">
                  <div style={{width:"100%",height:"0",paddingBottom:"56%",position:"relative", paddingRight:"565px"}}><iframe src="https://giphy.com/embed/3oKIPBuGeZjI62PuOA" width="100%" height="100%"
           style={{position:"absolute"}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/gobearcatsmbb-cincinnati-strong-3oKIPBuGeZjI62PuOA">via GIPHY</a></p>
   </div>
</div>

      <div className="jumbotron bg-light">
        <span>The video representing cincinnati's architecture and some of the best attractions in cincinnati, with the ohio river and kentucky just across </span>
        
        

      </div>
          </div>
          <div className="col-3">
          <h2>Catch a game!</h2>
          <p className="text-center">Cincinnati has many options when it comes to attending sporting events. Whether it be at Great American Ballpark to watch the Cincinnati Reds or Paul Brown Stadium for the Cincinnati Bengals. Maybe soccer is more your speed. The recently acquired FC Cincinnati has you covered. Head on over to the University Of Cincinnati to catch some collegiate games. Whichever you choose, you're guaranteed to have an excellent experience.</p>
          <h5>Hometown Favorites</h5>
          <hr/>
            <div className="container">
              <img className="logos" src={Reds} alt=""/>
              <img className="logos" src={Bengals} alt=""/>
              <img className="logos" src={UC} alt=""/>
              <img className="logos" src={FC} alt=""/>
            </div>
          </div>
        </div>
      </div>
     
    
</header>
</div>



    )
}

export default Home