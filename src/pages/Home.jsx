import React, { useContext } from "react";
import SingleProduct from "../components/SingleProduct";
import { productsContext } from "../contexts/productsContext";

const Home = () => {
  const { products } = useContext(productsContext);

  return (
    <div>
      {products.map((item) => {
        return <SingleProduct item={item} />;
      })}
    </div>
  );
};

export default Home;
