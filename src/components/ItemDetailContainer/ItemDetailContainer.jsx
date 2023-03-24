import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";



const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const ropasCollection = collection(db, "ropa");
    getDocs(ropasCollection).then((querySnapshot) => {
      const ropas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(ropas);
    });
  }, []);

  return <ItemDetail ropas= {data}/>;
  
};

export default ItemDetailContainer