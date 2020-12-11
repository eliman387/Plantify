import React, { useEffect, useState } from 'react';
import { getShopDetail } from '../../services/shops';
import { useParams } from 'react-router-dom';
import './StoreDetailPage.css'; 

import pin from '../../assets/svg/noun_Location.svg';
import phone from '../../assets/svg/noun_Phone.svg'
import web from '../../assets/svg/noun_Global.svg';

function StoreDetailPage() {
  const [shop, setShop] = useState({});
  const [showInventory, setShowInventory] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchShop = async () => {
      const resp = await getShopDetail(id)
      setShop(resp);
      console.log(resp);
    }
    fetchShop();
  }, [id])
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="shop-info-container">
        <div className="shop-header">
          <h1>{shop.name}</h1>
          <h3>{shop.sub_type}</h3>
        </div>
        <br />
        <div className="img-container">
          <img className="shop-storefront" src={shop.image} alt="shop storefront"/>
        </div>
        <div className="shop-info-card">
          <div className="info-line">
            <img src={pin} alt="pin-icon" width='36px'/>
            <h3>{shop.address}</h3>
          </div>
          <div className="info-line">
            <img src={phone} alt="phone-icon" width='36px'/>
            <h3>{shop.phone_number}</h3>
          </div>
          <div className="info-line">
            <img src={web} alt="web-icon" width='36px'/>
            <h3>{shop.website}</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="shop-plant-container">
        <h2>Available Plants</h2>
        <div className="plant-grid">
          {shop.plants?.map((plant) => (
                <div key={plant.id} className='plant-square'>
                <img src={plant.picture} alt="plant" />
                <p>{plant.common_name}</p>
                </div>
              ))}
        </div>
      </div>
      
    </div>
  );
}

export default StoreDetailPage;