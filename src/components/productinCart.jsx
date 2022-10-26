import "./productInCart.css";


const ProductInCart = (props) => {

    const getTotal = () => {
        return (props.data.price * props.data.quantity);
    };
    return < div className="prod-cart">
        <img src={"/images/" + props.data.image}alt="" />

        <div className="info">
            <h5>{props.data.title} </h5>
            <p>{props.data.category}</p>
        </div>
      <label>{props.data.price}</label>

      <label>{props.data.quantity}</label>

      <label>{getTotal()}</label>

        <button className="btn btn-danger">Remove</button>
    </div>



};

export default ProductInCart;