import { createContext ,useState , useEffect} from "react";
import { food_list } from "../../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider=(props)=>{

    const [CartItems, setCartItems] = useState({}); 
    const [liked, setLiked] = useState({});
    const [searchItem, setSearchItem] = useState("");

     const toggleLike = (id) => {
        if(!liked[id]) {
            setLiked((prev)=> ( {...prev, [id]: 1} ));
        }else{
             setLiked((prev)=> ( {...prev, [id]: 0} ));
        }
      };
    
   
 
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
        CartItems,
        toggleLike,
        liked,
        searchItem,
        setSearchItem


    }
     

    return(
        <StoreContext.Provider value={valueList}>
            {props.children}
        </StoreContext.Provider>
    )
} 

export default StoreContextProvider;