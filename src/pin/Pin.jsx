import './pinscss';
import {Marker,Popup} from 'react-leaflet';
function Pin(item) {
    return(
        <Marker position={[item.latitude, item.longitude]}>
      <Popup>
         <div className='popupContainer'>
            <img src={img.img} alt =""/>
            <div className='textContainer'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span>{item.bedrooms}</span>
                <b>$ {item.price}</b>
            </div>
         </div>
      </Popup>
    </Marker>
    )
}
export default Pin