import { Link } from "react-router-dom";

const Title=()=>(
    <img className="logo"
    alt="logo"
    src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
    />
);
const HeaderContent=()=>{
return (
    <div className="header">
        {Title()}
    <div className="nav-items">
        <ul>
            <li><Link>Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link>Contact</Link></li>
            <li><Link>Cart</Link></li>
        </ul>
    </div>
    </div>
);
}

export default HeaderContent;