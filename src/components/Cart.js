import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    // The below way works but has a huge performance loss, hence subscribe to portion correctly
    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="py-2 my-2 px-4 mx-4 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && (<h1>Cart is empty. Add items to the cart!</h1>)}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;