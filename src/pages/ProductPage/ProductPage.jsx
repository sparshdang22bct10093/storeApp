import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import { CartContext } from "../../store/CartContext";

import productsData from "../../assets/DummyData";
import img from "../../assets/p1.jpg";

import style from "./ProductPage.module.css";

export default function ProductPage() {
  const params = useParams();
  const id = params.productId;
  const data = productsData.filter((e) => e.product_id === id)[0];

  const context = useContext(CartContext);

  return (
    <div className={style.container}>
      <div className={style.image__container}>
        <img src={ data.image ? data.image :  img} alt="" />
      </div>
      <div className={style.info__container}>
        <h1>{data.product_name}</h1>
        <p>{data.product_desc}</p>
        <div className={style.tags}>
          {
            data.tags.map(e => <span className={style.tag}>{e}</span> )
          }
        </div>
        <div className={style.wrapper}>
          <div className={style.price}>Rs. {data.product_price}</div>
          <button onClick={() => context.addItem(id)}>
            Add To Cart <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
