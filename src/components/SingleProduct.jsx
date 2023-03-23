import React from "react";

const SingleProduct = (item) => {
  const { name, price, picture } = item;
  console.log(item);

  return (
    <div key={item.id}>
      {/* <img src={picture} alt={name} /> */}
      <div>
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
