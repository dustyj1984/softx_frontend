
import { useEffect } from 'react';
import Product from '../components/product';
import "./catalog.css";
import Dataservice from './../services/dataService';
import { useState } from 'react';


function Catalog(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let service = new Dataservice();
        let result = service.getCatalog();
        setProducts(result);
    }, [])
    return(
        <div className="catalog">
            <h1>Check our amazing catalog</h1>
            <h5 className='subtitle'>We have {products.length} products waiting for you!</h5>
        <div className="list-container">
        {products.map( prod => <Product key={prod._id} data= {prod} /> )}

            </div>
        </div>
    );
    }

    export default Catalog;