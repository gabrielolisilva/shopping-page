import React, { useContext } from "react";
import SingleProduct from "../components/SingleProduct";
import { productsContext } from "../contexts/productsContext";

const Home = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="grid grid-cols-2">
      {products.map((item) => {
        return <SingleProduct key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Home;
