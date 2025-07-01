import { createContext, useState, useEffect } from "react";
import { food_list } from "../../../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState({});
  const [TotalCost, setTotalCost] = useState(0);
  const [liked, setLiked] = useState({});
  const [searchItem, setSearchItem] = useState("");
  const [CostAfterShipping, setCostAfterShipping] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(49.99);
  const [isExpress, setIsExpress] = useState(false);
  const [address, setAddress] = useState(null);
  const [myorder, setMyorder] = useState({});

  // Toggle like
  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: prev[id] === 1 ? 0 : 1,
    }));
  };

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const addToMyOrder = (itemId) => {
    setMyorder((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  }

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  // const AddtoMyOrder=(itemId)=>{
  //   setMyorder((prev) => ({
  //     ...prev,
  //     [itemId]:1,
  //   }));

  // }

  // Calculate total cost when CartItems change
  useEffect(() => {
    let total = 0;
    for (const itemId in CartItems) {
      const quantity = CartItems[itemId];
      const item = food_list.find((item) => item._id === itemId);
      if (item) {
        total += item.price * quantity;
      }
    }
    setTotalCost(total);
  }, [CartItems]);

  // Calculate total cost with shipping charge
  useEffect(() => {
    // Only auto-set shipping if not express
    if (!isExpress) {
      if (TotalCost < 500) {
        setShippingCharge(49.99);
      } else {
        setShippingCharge(0);
      }
    }
    const totalWithShipping = TotalCost + shippingCharge;
    setCostAfterShipping(totalWithShipping);
  }, [TotalCost, shippingCharge, isExpress]);

  const placeOrder = (shipping = 0, discount = 0) => {
    setMyorder(prev => {
      const newOrders = { ...prev };
      Object.keys(CartItems).forEach(id => {
        newOrders[id] = {
          quantity: CartItems[id],
          date: new Date().toLocaleDateString(),
          status: 'Delivered',
          shipping,
          discount,
        };
      });
      return newOrders;
    });
    setCartItems({});
  };

  const valueList = {
    food_list,
    addToCart,
    removeFromCart,
    CartItems,
    setCartItems,
    toggleLike,
    liked,
    searchItem,
    setSearchItem,
    TotalCost,
    CostAfterShipping,
    setCostAfterShipping,
    shippingCharge,
    setShippingCharge,
    isExpress,
    setIsExpress,
    address,
    setAddress,
    myorder,
    setMyorder,
    // 
    addToMyOrder,
    placeOrder
  };

  return (
    <StoreContext.Provider value={valueList}>
      {children}
    </StoreContext.Provider>
  );
};

export  default StoreContextProvider;
