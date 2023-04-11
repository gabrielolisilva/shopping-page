import React, { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
  const { cardItems } = useContext(productsContext);

  return (
    <div>
      {cardItems.map((item) => (
        <div key={item.id}>
          <img src={item.picture} alt={item.name} width="300px" />
          <h1 className="text-3xl">{item.name}</h1>
          <p className="mt-6 text-lg">R$ {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
