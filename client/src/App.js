import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Layout from './layouts/Layout';
import Homepage from './screens/Homepage/Homepage';
import BrowsePlantsPage from './screens/BrowsePlantsPage/BrowsePlantsPage';
import BrowseStorePage from './screens/BrowseStorePage/BrowseStorePage';
import PlantDetailPage from './screens/PlantDetail/PlantDetailPage';

import { getAllShops, getShopDetail, createShop, updateShop, destroyShop } from './services/shops'
import { getAllPlants, getPlantDetail, createPlant, updatePlant, destroyPlant } from './services/plants'

function App() {
  const [plants, setPlants] = useState([]);
  const [shops, setShops] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPlants = async () => {
      const plantData = await getAllPlants();
      setPlants(plantData);
    }
    const fetchShops = async () => {
      const storeData = await getAllShops();
      setShops(storeData);
    }
    fetchPlants();
    fetchShops();
  }, [])


  const handleCreate = async (plantData) => {
    const newFood = await createPlant(plantData);
    setPlants(prevState => [...prevState, newFood]);
    history.push('/plants');
  }

  const handleUpdate = async (id, plantData) => {
    const updatedPlant = await updatePlant(id, plantData);
    setPlants(prevState => prevState.map(plant => {
      return plant.id === Number(id) ? updatedPlant : plant
    }))
    history.push('/plants');
  }

  const handleDelete = async (id) => {
    await destroyPlant(id);
    setPlants(prevState => prevState.filter(plant => plant.id !== id))
  }
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />

          <Route exact path='/plants'>
            <BrowsePlantsPage plants={plants} />
          </Route>

          <Route exact path='/plants/:id'>
            <PlantDetailPage />
          </Route>
        
          <Route exact path='/shops'>
            <BrowseStorePage shops={shops}  />
          </Route>

          <Route exact path='/shops/:id'>
            <BrowseStorePage />
          </Route>
        </Switch>
        
      </Layout>
    </div>
  );
}

export default App;
