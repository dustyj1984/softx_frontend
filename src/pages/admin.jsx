import "./admin.css";
import { useState, useEffect } from "react";
import DataService from './../services/dataService';


const Admin = () => {
    
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);
    

    const [product, setProduct] = useState({}); 
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        loadCoupons();
        loadProducts();
    }, [])

    const loadCoupons = async () => {
        let service = new DataService();
        let list = await service.getCoupons();
        setAllCoupons(list);
    };

    const loadProducts = async () => {
        let service = new DataService();
        let prods = await service.getCatalog();
        setAllProducts(prods);
    };



    const handleCouponChange = (e) => {
        const text = e.target.value;
        const name= e.target.name;
        
        let copy = {...coupon};
        copy[name] = text;
        setCoupon(copy);
    };

    const saveCoupon = async() => {
        let copy = {...coupon};
                copy.discount = parseFloat(copy.discount);
        
        let service = new DataService();
        let c = await service.saveCoupon(copy);
        console.log(c);

            
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
    
    const saveProduct = async ()  => {
        let copy = {...product};
        copy.price = parseFloat(copy.price);

        let service = new DataService();
        let prod = await service.saveProduct(copy);
        console.log(prod);


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
                            <input className= "form-control" type="text" name="category" onChange={handleProductChange} />
                        </div>
                        <div className="my-control">
                            <button onClick={saveProduct} className="btn btn-primary">Save</button>
                        </div>
                    </div>

                    <ul>
                        {allProducts.map((p, index) => <li key={index}>{p.title} - {p.category} - ${p.price} </li>)}
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
                        {allCoupons.map((c, index)=> <li key={index}>{c.code} - {c.discount}</li>)}
                    </ul>                  
                
                </section>
                
        
            </div>
        </div>
    );
};

export default Admin;



