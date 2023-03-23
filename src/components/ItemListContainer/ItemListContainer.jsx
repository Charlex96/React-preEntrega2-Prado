import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import Data from '/src/data.json';

const ItemListContainer = () => {

    const [ropas, setRopas] = useState([]);
    const { category } = useParams();

    useEffect(() =>{
        const db = getFirestore();
        const ropasCollection = collection(db, 'ropa');

        getDocs(ropasCollection).then((sanpshot) => {
            const ropas = sanpshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setRopas(ropas);
        })
    }, []);

    // const getDatos = () => {
    //     return new Promise((resolve, reject) => {
    //     if (Data.length === 0) {
    //         reject(new Error("No hay datos"));
    //     }
    //     setTimeout(() => {
    //         resolve(Data);
    //     }, 2000);
    //     });
    // };

    // async function fetchingData() {
    //     try {
    //     const datosFetched = await getDatos();
    //     console.log(datosFetched);
    //     } catch (err) {
    //     console.log(err);
    //     }
    // }

    // fetchingData();

    const catFilter = ropas.filter((ropa) => ropa.category === category);

    console.log(catFilter);

    return (
        <>

            <div className='heading'>
                <h2>Catálogo</h2>
            </div>

            <div className='item-list-container'>
                {category ? <ItemList ropas={catFilter}/> : <ItemList ropas={ropas}/>}
            </div>
            
        </>
    )
}

export default ItemListContainer