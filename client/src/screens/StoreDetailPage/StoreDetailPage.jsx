import React, { useEffect, useState } from 'react';
import { getShopDetail } from '../../services/shops';
import { useParams } from 'react-router-dom';
import './StoreDetailPage.css'; 

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
      <h1>{shop.name}</h1>
    </div>
  );
}

export default StoreDetailPage;