import api from './apiConfig';

export const getAllPlants = async () => {
  const resp = await api.get('/plants')
  return resp.data
}

export const getPlantDetail = async (id) => {
  const resp = await api.get(`/plants/${id}`);
  return resp.data
}

export const createPlant = async (plantData) => {
  const resp = await api.post('/plants', { plants: plantData });
  return resp.data
}

export const updatePlant = async (id, plantData) => {
  const resp = await api.put(`/plants/${id}`, { plant: plantData });
  return resp.data;
}

export const destroyPlant = async (id) => {
  const resp = await api.delete(`/plants/${id}`);
  return resp;
}