import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    const cartItems = useSelector((store)=> store?.cart?.items)

    const TotalPrice = useSelector((store)=> store?.cart?.TotalPrice)

    console.log(cartItems)
    return(
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-semibold">Cart</h1>
            <div className="w-6/12 m-auto">
                {
                    cartItems.length && (
                        <button 
                        onClick={
                            handleClearCart
                        }
                         className="p-2 m-2 bg-black text-white">Clear Cart</button>

                    )
                }
               
                 {cartItems.length === 0 && <h1>Your Cart Is Empty </h1>}
                 <ItemList items={cartItems}/>
                 {
                    cartItems.length? (
                    <>
                        <div className="p-2 m-2 border-dashed border-b-2 flex justify-between">
                            <p1>Add More Items</p1>  <button className="m-2 p-2" >+</button>
                        </div>
                        <div className="p-2 m-2 border-dashed border-b-2 flex justify-between">
                        <p1>Total Price</p1>  <button className="m-2 p-2" >{TotalPrice}</button>
                        </div>
                    </>
                    ): (<></>)
                 }
            
            </div>

            
            

    </div>

    ) 
}

export default Cart