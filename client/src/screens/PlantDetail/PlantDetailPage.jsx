import React, { useEffect, useState } from 'react';
import './PlantDetailPage.css'
import {getPlantDetail} from '../../services/plants'
import { useParams } from 'react-router-dom';
import './PlantDetailPage.css'

function PlantDetailPage() {
  const [plant, setPlant] = useState({});
  const [showAvailable, setShowAvailable] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlant = async () => {
      const resp = await getPlantDetail(id)
      setPlant(resp);
      console.log(resp);
    }
    fetchPlant();
  }, [id])
  
  return (
    <div>
      <div className='main-container'>
        <img id='plant-img' src={plant.picture} alt="" />
        <div className='title-container'>
          <p className='plant-title'>{plant.common_name}</p>
          <br/>
          <p className='descrip'>{plant.botanical_name}</p> 
          <hr />
          <div className='info-container'>
            <h4>Size: {plant.size}</h4>
            <br />
            <h4>Difficulty: {plant.difficulty_level}</h4>
            <br />
            <h4>Light: {plant.light}</h4>
            <br />
            <h4>Pet Friendly: {plant.pet_friendly === "t" ? "Yes, pet friendly" : "No, your pet will die"}</h4>
            <br />
            <br />
            <br />
          </div>
          <button
            onClick={() => setShowAvailable(!showAvailable)}
            className='view-shop-button'>Find local shop availabilty
          </button>
          {showAvailable ? <ul>
            {plant.shops?.map((shop) => (
              <li key={shop.id} className='shop-item'>
                <br />
                <span id="shop-name">{shop.name}</span>
                <br />
                <br />
                <span id="shop-type" >{shop.sub_type}</span>
                <p id="shop-addy">{shop.address}</p>
                <img src={shop.image} alt="shop" className="shop-thumbnail" />
              </li>
            ))}
          </ul> : null}
        </div>
        
      </div>
      
    </div>
  );
}

export default PlantDetailPage;