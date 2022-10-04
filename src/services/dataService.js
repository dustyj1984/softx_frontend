const catalog = [
    {
        _id:"1",
        title: 'AI bot',
        price: "99.99",
        image:"softx-logo.png",
        category: 'bot',
        
    },
    {
        _id:"2",
        title: 'AI bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    {
        _id:"3",
        title: 'AI bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    {
        _id:"4",
        title: 'AI bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    { 
        _id:"5",
        title: 'AI bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    {
        _id:"6",
        title: 'AI bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    {
        _id:"7",
        title: 'AI bot',
        title: 'XR bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
    {
        _id:"8",
        title: 'AI bot',
        title: 'XR bot',
        price: "99.99",
        category: 'bot',
        image:"test.jpg",
    },
];

class Dataservice {
    getCatalog(){
        return catalog;
        // TODO: call the server to get the data

    }

    saveOrder(){

    }

    validateCouponCode(){

    }
}

export default Dataservice;