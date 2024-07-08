import {listData} from "../../lib/dummydata";
import "./listPage.scss";
import Filter from "../../components/fliter/Filter";
// import card from "../../components/card/Card";
import Map from "../../components/map/Map";
function ListPage() {

    const data = listData;
    return <div className="listpage">
    <div className="listContainer">
        <div className="wrapper">
            <Filter />
            {data.map(item =>(
                <card key={item.id} item={item}/>
            ))}
        </div>
    </div>
    <div className="mapcontainer">
        <Map items={data} />
    </div>
</div>
}
export default ListPage
