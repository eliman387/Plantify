import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import PlantDetailPage from '../screens/PlantDetail/PlantDetailPage';
import BrowseStorePage from '../screens/BrowseStorePage/BrowseStorePage';
import BrowsePlantsPage from '../screens/BrowsePlantsPage/BrowsePlantsPage';
// import FoodDetail from '../screens/FoodDetail';
// import FoodEdit from '../screens/FoodEdit';
// import Foods from '../screens/Foods';
import { getAllShops, getShopDetail, createShop, updateShop, destroyShop } from '../services/shops'
import { getAllPlants, getPlantDetail, createPlant, updatePlant, destroyPlant } from '../services/plants'

export default function MainContainer(props) {
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
    <Switch>
      <Route path='/plants'>
        <BrowsePlantsPage plants={plants} />
      </Route>
      <Route path='/plants/:id/edit'>
        <BrowseStorePage shops={shops}  />
      </Route>
    </Switch>
  )
}