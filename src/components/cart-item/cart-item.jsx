import {CartItemContainer,ItemDetails} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem;
  
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span className='name'>{name}</span>
            </ItemDetails>
            <span className='price'>{quantity}x ${price}</span>
        </CartItemContainer>
    )

}

export default CartItem;