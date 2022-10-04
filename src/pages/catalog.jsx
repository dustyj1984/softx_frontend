
import Product from '../components/product';
import "./catalog.css";


function Catalog(){
    return(
        <div className="catalog">
            <h1>Check our amazing catalog</h1>
        <div className="list-container">
            <Product />
            <Product />
            <Product />
            </div>
        </div>
    );
    }

    export default Catalog;