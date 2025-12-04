<<<<<<< HEAD
import React, { createContext, useState, useEffect } from "react";
=======
import React, { createContext, useState } from "react";
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
<<<<<<< HEAD
  // Initialize state from localStorage if available
  const [order, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(order));
  }, [order]);

  // Add a new order
  const addOrder = (product) => {
    setOrders((prevOrders) => [...prevOrders, product]);
  };

=======
  const [order, setOrders] = useState([]);

  const addOrder = (product) => {
    setOrders((order) => [...order, product]);
  };
>>>>>>> 1a72bcf6a49c0ccd50f2dcda33870645799cc98f
  return (
    <OrderContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
