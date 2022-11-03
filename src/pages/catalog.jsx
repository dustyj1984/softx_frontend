
import { useEffect } from 'react';
import Product from '../components/product';
import "./catalog.css";
import Dataservice from './../services/dataService';
import { useState } from 'react';


function Catalog(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
    loadData();
        
    }, [])

    

    const loadData= async()=>{

        let service = new Dataservice();
        let result = await service.getCatalog();
        setProducts(result);
    }

    return(
        <div className="catalog">
            <h1>Plug & Play AI Solutions</h1>
            <h5 className='subtitle'>We Have {products.length} Products Ready for Purchase!</h5>
        <div className="">
        {products.map( prod => <Product key={prod._id} data= {prod} /> )}

            </div>
        </div>
    );
    }

    export default Catalog;