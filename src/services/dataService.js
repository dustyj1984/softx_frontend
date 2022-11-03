import axios from "axios";

const catalog = [
    {
        _id:"1",
        title: 'Digital Human',
        price: 99.99,
        image:"chatbot.jpg",
        category: 'bot',
        
    },
    {
        _id:"2",
        title: 'Smart Fitness',
        price: 99.99,
        image:"fitness.png",
        category: 'bot',
    },
    {
        _id:"3",
        title: 'Smart Finance',
        price: 99.99,
        category: 'bot',
        image:"finances.jpg",
    },
    {
        _id:"4",
        title: 'Smart Military',
        price: 99.99,
        category: 'bot',
        image:"military.jpg",
    },
    { 
        _id:"5",
        title: 'Smart Health',
        price: 99.99,
        category: 'bot',
        image:"health.jpg",
    },
    {
        _id:"6",
        title: 'AI Manufacturing',
        price: 99.99,
        category: 'bot',
        image:"manufacturing.jpg",
    },
    {
        _id:"7",
        title: 'Smart Drive',
        price: 99.99,
        category: 'bot',
        image:"driving.jpg",
    },
    {
        _id:"8",
        title: 'Smart Retail',
        price: 99.99,
        category: 'bot',
        image:"retail.jpg",
    },
];

class Dataservice {
    async getCatalog (){
        //use this line to work without a server
        //return catalog;
     
        //use this line to work with a server
   let res = await axios.get("http://127.0.0.1:5000/api/catalog")
    return res.data;

}

async saveProduct(product){
    let res = await axios.post("http://127.0.0.1:5000/api/catalog", product)
    return res.data;
}

    saveOrder(){

    }

    validateCouponCode(){}
    
    async saveCoupon(coupon){
        let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return res.data;
    }

    async getCoupons(){
        let res = await axios.get("http://127.0.0.1:5000/api/coupons");
        return res.data;
    }

}

    

export default Dataservice;