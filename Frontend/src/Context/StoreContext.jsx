import { createContext ,useState} from "react";
import { food_list } from "../../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider=(props)=>{
 



    // const valueList=()=>{
    //     food_list

    // }
      const [foodList, setFoodList] = useState(food_list);

    return(
        <StoreContext.Provider value={{food_list:foodList}}>
            {props.children}
        </StoreContext.Provider>
    )
} 

export default StoreContextProvider;