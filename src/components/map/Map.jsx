import {MapContainer,TileLayer} from 'react-leaflet';
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
// const position = [23.02579, 72.58727]

function Map(items) {
    return(
        <MapContainer center={[23.02579, 72.58727]} zoom={7} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item =>(
        <Pin item={item} key={item.id} />
    ))}
    
  </MapContainer>
    )
}
        
 

