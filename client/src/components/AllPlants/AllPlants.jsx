import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllPlants.css';


function AllPlants(props) {

console.log(props);
  return (
    <div>
      {props.plants.map((plant) => (
        <div key={plant.id}className="upcoming-events">
          <Link to={`/plants/${plant.id}`}>
            <img className="image" src={plant.picture} alt="plant" />
          </Link>
          <div className="upcoming-info">
            <p className="name">{plant.common_name}</p>
          
            <p className="subCategory">{plant.botanical_name}</p>
          </div>
            
        </div>
      ))}
    </div>
  );
}

export default AllPlants;