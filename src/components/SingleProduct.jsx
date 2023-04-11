import React, { useContext, useState } from "react";
import { productsContext } from "../contexts/productsContext";

const SingleProduct = ({ item }) => {
  const { cardItems, setCardItems, itemsQuantity, setItemsQuantity } =
    useContext(productsContext);

  const { id, name, price, picture } = item;
  const [inputValue, setInputValue] = useState(itemsQuantity);

  const handleAdd = (item) => {
    setCardItems([...cardItems, item]);
  };

  return (
    <div className="p-6 text-center flex flex-col gap-4 justify-center items-center">
      <img src={picture} alt={name} width="300px" />
      <div>
        <h1 className="text-3xl">{name}</h1>
        <p className="mt-6 text-lg">R$ {price}</p>
        <div className="mt-4 flex gap-4 items-center justify-center">
          <button>-</button>
          <input
            type="number"
            value={inputValue[id]}
            className="border-2 w-8"
          />
          <button onClick={() => handleAdd(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
