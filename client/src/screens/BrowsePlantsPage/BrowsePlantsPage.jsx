import { useState, useEffect } from 'react';
import { getAllPlants } from '../../services/plants';
import AllPlants from '../../components/AllPlants/AllPlants';
import './BrowsePlantsPage.css'


function BrowsePlantsPage(props) {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await getAllPlants();
      setPlants(response);
    };
    fetchPlants();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <h2 id='plant-heading'>Browse Plants</h2>
      
      <br />
      <br />
      <div id='all-plants-container'>
        <AllPlants plants={plants} />
      </div>
    </div>
  );
}

export default BrowsePlantsPage;