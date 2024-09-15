import React from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/ProductCard";

import style from "./ProductsPage.module.css";

import products from "../../assets/DummyData";
export default function ProductPage({ search }) {
  let products_data = products;
  const params = useParams();
  if (search) {
    const query = params["query"];
    products_data = products_data.filter((data) => data.tags.includes(query));
  }
  return (
    <>
      <h1 className={style.heading}>
        {search ? "Search Result" : "All Products"}
      </h1>
      {products_data.length !== 0 ? (
        <div className={style.products__grid}>
          {products_data.map((data) => (
            <ProductCard
              id={data.product_id}
              title={data.product_name}
              price={data.product_price}
              key={data.product_id}
              img={data.image}
            />
          ))}
        </div>
      ) : (
        <p className={style.info}>No Result Found</p>
      )}
    </>
  );
}
