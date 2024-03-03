import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=> store.cart.items)

    console.log(cartItems)
    return(
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                onClick={
                    handleClearCart
                }
                 className="p-2 m-2 bg-black text-white">Clear Cart</button>
                 {cartItems.length === 0 && <h1>Your Cart Is Empty..</h1>}
                 <ItemList items={cartItems}/>
            </div>
    </div>

    ) 
}

export default Cart