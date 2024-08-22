import { createContext, useReducer, useState, useEffect, useMemo } from "react";
import { allProducts } from "../Data/Products.js";

export let products = createContext([]);

const cartListFunction = (currCartList, action) => {
  let newCartList = currCartList;
  if (action.type === "ADD_PROD") {
    newCartList = [...currCartList, action.item];
  } else if (action.type === "DEL_PROD") {
    newCartList = currCartList.filter(
      (item) => !(action.id === item.id && action.size === item.selected_size)
    );
  } else if (action.type === "UPDATE_PROD") {
    newCartList = action.item;
  }
  return newCartList;
};

function ProductStore(props) {
  let [cartList, dispactCartList] = useReducer(cartListFunction, []);  //Cart List
  let [cartQuantity, setCartQuantity] = useState(0);  // CartQuantity in nav ar
  let [subTotal, setSubTotal] = useState(0);        //Sub total in summary
  let [grandTotal, setGrandTotal] = useState(0);    //Grand total in summary
  let [filter, setFilter] = useState('default');

  function addProduct(item) {                         
    const newProd = {
      type: "ADD_PROD",
      item,
    };
    dispactCartList(newProd);
  }
  function delProduct(id, size) {
    const newProd = {
      type: "DEL_PROD",
      id,
      size,
    };
    dispactCartList(newProd);
  }
  function updateQuantity(item) {            //for updating quantity y 1 if we add same product which is in cart with same size 
    const newProd = {
      type: "UPDATE_PROD",
      item,
    };
    dispactCartList(newProd);
  }

  function calculateCartQuantity() {                          //for cartQuantity in nav bar
    let quantity = cartList.reduce((accum, next) => {
      return Number(accum) + Number(next.selected_quantity);
    }, 0);
    setCartQuantity(quantity);
  }
  useEffect(() => {
    calculateCartQuantity();
  }, [cartList]);

  function calculate(){
    if(cartList.length!==0){
      const newSubTotal = cartList.reduce((accum, item) => accum + item.total_amount, 0);
      setSubTotal(newSubTotal);
      setGrandTotal(newSubTotal + 100);
    }
  }

  const sortedProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => {
      if (filter === 'highToLow') {
        return b.price - a.price;
      } else if (filter === 'lowToHigh') {
        return a.price - b.price;
      } else {
        return 0; //no sorting
      }
    });
  }, [filter]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <products.Provider
      value={{
        allProducts,
        addProduct,
        delProduct,
        updateQuantity,
        cartList,
        cartQuantity,
        calculateCartQuantity,
        subTotal,
        grandTotal,
        calculate,
        filter, 
        setFilter,
        sortedProducts,
        handleLinkClick
      }}
    >
      {props.children}
    </products.Provider>
  );
}

export default ProductStore;
