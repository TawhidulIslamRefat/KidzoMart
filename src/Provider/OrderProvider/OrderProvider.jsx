import React, { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [order, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(order));
  }, [order]);

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
