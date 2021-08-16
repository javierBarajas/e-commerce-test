import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Body from "../../components/Body";
import functionsProducts from "../../functions/Products";


export default function Products() {
  const [list, setList] = useState([]);

  const get = async () => {
    setList(await functionsProducts.getAll());
  };

  useEffect(() => {
    get();
  }, []);

  const content = list.map((product, index) => (
    <Product key={index} Product={product} />
  ));

  return <Body title={"Products"} content={content} />;
}
