import { useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from './checkout.styles';
const Checkout = () =>{
    const {cartItems,cartTotal} = useContext(CartContext);

    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem)=>(
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}
export default Checkout;