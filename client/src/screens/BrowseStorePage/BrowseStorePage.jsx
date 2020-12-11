import React from 'react';
import { Link } from 'react-router-dom';
import './BrowseStorePage.css'

function BrowseStorePage(props) {

  const filterManhattan = props.shops.filter((shop) => shop.borough === "Manhattan");

  // console.log(filterManhattan);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="store-header">Browse Local Stores</h1>
      <br />
      <br />
      <hr className="button-bar-border"/> 
      <div className="button-bar">
        <button className="view-boro-button">Manhattan</button>
        <button className="view-boro-button">Brooklyn</button>
        <button className="view-boro-button">Queens</button>
        <button className="view-boro-button">Bronx</button>
        <button className="view-boro-button">Staten Island</button>
      </div>
      <hr className="button-bar-border"/>
      <br />
      <br />
      {filterManhattan.map((shop) => (
        <div key={shop.id}className="filtered-shop">
          <Link to={`/shops/${shop.id}`}>
            <img className="shop-image" src={shop.image} alt="shop" />
          </Link>
          <div className="shop-info">
            <p className="shop-name">{shop.name}</p>
            <p className="store-addy">
              {shop.address}
            </p>
            <p className="shop-subtype">{shop.sub_type}</p>
          </div>
            
        </div>
      ))}

    </div>
  );
}

export default BrowseStorePage;