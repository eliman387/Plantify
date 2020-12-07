import api from './apiConfig';

export const getAllShops = async () => {
  const resp = await api.get('/shops')
  return resp.data
}

export const getShopDetail = async (id) => {
  const resp = await api.get(`/shops/${id}`);
  return resp.data
}

export const createShop = async (shopData) => {
  const resp = await api.post('/shops', { shops: shopData });
  return resp.data
}

export const updateShop = async (id, shopData) => {
  const resp = await api.put(`/shops/${id}`, { shop: shopData });
  return resp.data;
}

export const destroyShop = async (id) => {
  const resp = await api.delete(`/shops/${id}`);
  return resp;
}