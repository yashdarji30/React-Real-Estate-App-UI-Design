import { useState } from 'react';
import './slider.scss';

function Slider({images}) {
    const [imageIndex,setImageIndex] = useState(null)

     const changeSlide = (direction) =>{
             if(direction === "left"){
                if(imageIndex === 0){
                    setImageIndex(images.length-1)

                }
                else{
                    setImageIndex(imageIndex-1)
                }
             }else{
                if(imageIndex === images.length-1){
                    setImageIndex(0)
                }
                else{
                    setImageIndex(imageIndex +1)

                }

             }
     }
    return(
        <div className="slider">
            <div className="fullSilder">
                <div className="arrow">
                    <img src="/arrow.png" alt ="" 
                    onClick={() => changeSlide("left")}
                    />
            </div>
            <div className="imageContainer"></div>
            <div className="arrow">
                    <img src="/arrow.png" alt =""
                    onClick={() => changeSlide("right")}
                    />
            </div>
            <div className="close" onClick={() =>setImageIndex(null)}>X</div>
            </div>
            <div className="bgImage">
                <img src={images[imageIndex]} alt =""
                onClick={() => setImageIndex(0)}
                />
            </div>
            <div className='smallImages'>
                {images.slice(1).map((image,index) =>(
                    <img src={image} alt="" key={index}
                    onClick={() => setImageIndex(index+1)}
                    />
                ))}
            </div>
        </div>
    )
}