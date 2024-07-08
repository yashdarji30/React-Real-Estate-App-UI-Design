import './filter.scss';
function Filter() {
    return(
        <div className='fliter'>
            <h1>Search results for <b>London</b></h1>
            <div className='top'>
                <div className='item'>
                    <label htmlFor='city'>Location</label>
                    <input type="text" id="city" name="city" placeholder='city Location' />
                </div>
                
            </div>
            <div className="bottom">
            <div className='item'>
                    <label htmlFor='type'>types</label>
                    <select name="type" id="type">
                        <option value="">any</option>
                        <option value="buy">buy</option>
                        <option value="rent">rent</option>
                    </select>
                </div>
                <div className='item'>
                    <label htmlFor='property'>Property</label>
                         <select name='property' id="property">
                            <option value="apartment">Apartment</option>
                            <option value="house">house</option>
                            <option value="condo">condo</option>
                            <option value="land">land</option>
                         </select>
                </div>
                <div className='item'>
                    <label htmlFor='minPrice'>Min Price</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder='any' />
                </div>
                <div className='item'>
                    <label htmlFor='maxPrice'>maxPrice</label>
                    <input type="maxPrice" id="maxPrice" name="maxPrice" placeholder='any' />
                </div>
                <div className='item'>
                    <label htmlFor='bedroom'>bedroom</label>
                    <input type="bedroom" id="bedroom" name="bedroom" placeholder='any' />
                </div>
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )

}
export default Filter