import { Outlet } from "react-router-dom";
import { Fragment,useContext } from "react";
import {ReactComponent as Logo} from '../../../assets/Crown.svg'
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import {NavigationContainer,NavLink,NavLinks,LogoContainer} from './navigation.styles'
import CartDropdown from "../../card-dropdown/cart-dropdown.component";
const Navigation =() =>{

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext)
    // const signOutHandler = async()=>{
    //     await signOutUser();
    //     setCurrentUser(null)
    // }

    // console.log(currentUser)
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                )
                :(
                  <NavLink to='/auth'>
                      SIGN IN
                  </NavLink>
                )
            }
            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation