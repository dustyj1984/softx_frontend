import "./productInCart.css";


const ProductInCart = (props) => {

    const getTotal = () => {
    return < div className="prod-cart">
        <img src="" alt="" />

        <div className="info">
            <h5>{props.data.title} </h5>
            <p>{props.data.category}</p>
        </div>
      <label>{props.data.price}</label>

      <label>{props.data.quantity}</label>

      <label>{getTotal()}</label>

        <button className="btn btn-danger">X</button>
    </div>

};

};

export default ProductInCart;