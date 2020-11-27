import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider";
import { auth } from "../../firebase";

function Header() {
  const [{ user,basket }, dispatch] = useStateValue();
const handleauth = ()=>{
  if(user){
    auth.signOut();
    
  }
} 
  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          alt='amazonlogo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG6.png'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <SearchIcon className='search__icon' />
      </div>
      <div className='header__nav'>
      <Link to={!user && '/login'} >
          <div onClick={handleauth} className='header__option'>
  <span className='header__option1'>Hello  </span>
            <span className='header__option2'> { user ? 'Sign-out' : 'Sign-In'} </span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__option1'>Returns</span>
          <span className='header__option2'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__option1'>Your </span>
          <span className='header__option2'>Prime </span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionbasket'>
            <ShoppingCartIcon />
            <span className='header__option2 header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
