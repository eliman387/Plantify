
import { Link } from 'react-router-dom';
import './AllPlants.css';


function AllPlants(props) {

  console.log(props);
  return (
    <div>
      {props.plants.map((plant) => (
          <Link to={`/plants/${plant.id}`}>
            <div key={plant.id}className="upcoming-events">
                <img className="image" src={plant.picture} alt="plant" />
                <br/>
                <div className="upcoming-info">
                  <p className="name">{plant.common_name}</p>
                
                  <p className="subCategory">{plant.botanical_name}</p>
                </div>    
            </div>
          </Link>
      ))}
    </div>
  );
}

export default AllPlants;