import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slideshow.css";

const Slideshow = ({ pictures }) => {
  return (
    <>
      
      {pictures?.length > 0 &&
        <Slide autoplay={false}>
          {pictures?.map((item, index) => {
            return (
              <div className="each-slide-effect">
                <div
                  style={{
                    backgroundImage: `url(${item?._links?.self?.href}`, backgroundPosition:'center'
                  }}
                ></div>
              </div>
            );
          })
          }
        </Slide>
        // <img src={pictures[0]._links?.self?.href} alt='pic' style={{width:'100%', height:'390px'}}/>
        
}
      
    </>
  );
};

export default Slideshow;
