import { createContext ,useState , useEffect} from "react";
import { food_list } from "../../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider=(props)=>{

    const [CartItems, setCartItems] = useState({});
 
    const addToCart=(itemId)=>{
        if(!CartItems[itemId]) {
            setCartItems((prev)=> ( {...prev, [itemId]: 1} ));
        }
        else{
            setCartItems((prev)=> ( {...prev, [itemId]: prev[itemId] + 1} ));
        }
    }


    const removeFromCart=(itemId)=>{
        if(CartItems[itemId]){
            setCartItems((prev)=> (
                {...prev, [itemId]: prev[itemId] -1} 
            )
            );
        }
    }
    // const removeFromCart = (itemId) => {
    //     setCartItems((prev) => {
    //         const updatedCart = { ...prev };
    //         if (updatedCart[itemId] > 1) {
    //         updatedCart[itemId] -= 1;
    //         } else {
    //         delete updatedCart[itemId];
    //         }
    //         return updatedCart;
    //     });
    // };
        useEffect(() => {
            // console.log("Cart Items Updated:", CartItems);
        },[CartItems]);



    const valueList={
        food_list,
        addToCart,
        removeFromCart,
        CartItems


    }
     

    return(
        <StoreContext.Provider value={valueList}>
            {props.children}
        </StoreContext.Provider>
    )
} 

export default StoreContextProvider;