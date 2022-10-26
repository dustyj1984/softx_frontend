
import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
    <div className="home">
        <div className="hero">
        <div>
        <img src="/images/hero.jpg" alt="" />
        </div>
        <div className="content">
            <h1 className="title">Welcom to Softx!</h1>
            <h3 className="subtitle">Augment Your Business with AI software</h3>
            <Link to="/catalog"><button className="btn btn-primary">SHOP</button></Link>
        </div>
         
        </div>
         </div>   
        
    
        
    );

};

export default Home;