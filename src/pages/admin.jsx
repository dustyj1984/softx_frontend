import "./admin.css";
import { useState } from "react";
import Product from './../components/product';


const Admin = () => {
    
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const [product, setProduct] = useState({}); 
    const [allProducts, setAllProducts] = useState([]);

    const handleCouponChange = (e) => {
        const text = e.target.value;
        const name= e.target.name;
        
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    };

    const saveCoupon = () => {
        let copy = {...coupon};
                copy.discount = parseFloat(copy.discount);
            
        let couponList = [...allCoupons];
        couponList.push(copy);
        setAllCoupons(couponList);
    };
   
  
    const handleProductChange = (e) => {
        const text = e.target.value;
        const name = e.target.name;
    
        let copy = { ...product };
        copy[name] = text;
        setProduct(copy);
    };
    
    const saveProduct = () => {
        let copy = {...product};
        copy.price = parseFloat(copy.price);

        let prodList = [...allProducts];        
        prodList.push(copy);
        setAllProducts(prodList);
    };
    return (
        <div className="admin">
            <div className="parent">
                <section className="sec-products">
                    <h3>Products</h3>

                    <div className="form">
                        <div>
                            <label className="form-label">Title</label>
                            <input  className="form-control" type="text" name="title" onChange={handleProductChange} />
                        </div>
                        <div className="my-control"> 
                            <label className="form-label">Price</label>
                            <input className= "form-control" type="number" name="price" onChange={handleProductChange} />
                        </div>
                        <div className="my-control">
                            <label className="form-label">Image</label>
                            <input className ="form-control" type="text" name="image" onChange={handleProductChange} />
                        </div>
                        <div>
                            <label className="form-label">Category</label>
                            <input class= "form-control" type="text" name="category" onChange={handleProductChange} />
                        </div>
                        <div className="my-control">
                            <button onClick={saveProduct} className="btn btn-primary">Save</button>
                        </div>
                    </div>

                    <ul>
                        {allProducts.map(p => <li key={p.title}>{p.title} - {p.category} - ${p.price} </li>)}
                    </ul>
                </section>

                <section className="sec-discount">
                    <h3>Coupon Code</h3>

                    <div>
                        <div className="my-control">
                            <label className="form-label">Code</label>
                            <input className= "form-control" name= "code" onChange={handleCouponChange} type="text" />
                        </div>
                        <div className="my-control">
                            <label className="form-label">Discount</label>
                            <input className="form-control" name="discount" onChange={handleCouponChange} type="number"/>
                        </div>
                        <div className="my-control">
                            <button onClick={saveCoupon} className="btn btn-primary">Apply</button>
                        </div>
                    </div>

                    <ul> 
                        {allCoupons.map(c => <li key={c.code}>{c.code} - {c.discount}</li>)}
                    </ul>                  
                
                </section>
                
        
            </div>
        </div>
    );
};

export default Admin;


/**
 * Product:
 * - title
 * - price
 * - image
 * category
 * 
 * 1- Create a form
 * create the state for the object
 * create another state for the list of products
 * handle the change of the function
 * save the function
 * display the list of products
 * (title - category- price)
 */

