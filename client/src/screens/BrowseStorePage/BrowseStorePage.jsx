import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BrowseStorePage.css'

function BrowseStorePage(props) {
  const [stores, setStores] = useState({});
  console.log(props.shops);
  const filterManhattan = props.shops.filter((shop) => shop.borough === "Manhattan");

  // console.log(filterManhattan);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Browse Local Stores</h1>
      <br />
      <br />
      {filterManhattan.map((shop) => (
        <div className="filtered-shop">
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

      <button>Manhattan</button>
      <button>Brooklyn</button>
      <button>Queens</button>
      <button>Bronx</button>
      <button>Staten Island</button>
    </div>
  );
}

export default BrowseStorePage;