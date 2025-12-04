import React, { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
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

  return (
    <OrderContext.Provider value={{ order, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
