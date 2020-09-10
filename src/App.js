import React, { Component } from "react";
import Slider from "react-slick";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class App extends Component {
  render() {
    var settings = {
      className: '',
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1.15,
      slidesToScroll: 1,
      arrows: true
    };

    const videoUrl = [
      "https://vid.zee5.com/videos/v-fcf2fe46-f60b-487d-1073355-be24-13049d3bd960-s10.8-18.2m.mp4",
      "https://vid.zee5.com/videos/v-80f76b30-cc56-4fc1-1073335-abb2-28d541055c89-s11.4-17.64m.mp4",
      "https://vid.zee5.com/videos/v-9ba93a0c-e09a-4265-1073341-bb8e-012ffd86a71f-s9.8-17.92m.mp4",
      "https://vid.zee5.com/videos/v-54932060-aa20-47b9-1075416-acb6-dd9d4d4858e2-s13.96-21.24m.mp4",
      "https://vid.zee5.com/videos/v-3d54695d-762a-4f23-1071873-a0de-e361ceae2a32-s7.52-15.12m.mp4"
      ];

    const showVideo = videoUrl.map((url,index) => {
      return (
        <div className='slideContainer' key={index}>
          <div className="video_container">
            <video width="100%" height="100%" >
              <source src={url} type="video/mp4" />            
            </video>
          </div>
          <div className="ad_banner">
            <div className="logo">
              <img src="https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png" height="100%" width="100%"/>
            </div>
            <div className="ad_text">
              <div>
                <span className="ad_logo">Ad</span>
                <span className="ad_sponsor">StarBucks</span>
              </div>
              <span className="ad_product">Premium Coffee</span>
            </div>
            <div className="ad_btn">
              <button>Buy Now</button>
            </div>
          </div>
        </div>     
      )
    });  
    return (
      <div style={{padding: '30px'}} >        
        <Slider {...settings}>
          {showVideo}
        </Slider>
      </div>
    );
  }
}

export default App;
