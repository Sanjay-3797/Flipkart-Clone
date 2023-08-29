import { useState } from "react";
import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";


const Header = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  dispatch(authActions.search(search));
  
  return (
    <div className={classes.header}>
      <img src="public\flipkart-logo.svg" alt="image tag" />
      <input type="text" placeholder="  Search for Products, Brands and More" onChange={(e)=>setSearch(e.target.value)}/>
      <ul>
        <li>
          <img src="public\seller.svg" alt="" /><a href="">Become a Seller</a>
          </li>
      </ul>
      <ul>
        <li>
          <img src="public\profile.svg" alt="" /><a href="">Sign in</a>
          </li>
      </ul>
      <ul>
        <li>
          <img src="public\cart-logo.svg" alt="" /><a href="">Cart</a>
          </li>
      </ul>
      <ul>
        <li>
          <img src="public\dropdown.svg" alt="" /></li>
      </ul>
    </div>
  )
}

export default Header;
