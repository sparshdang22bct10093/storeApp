import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import { CartContext } from "../../store/CartContext";

import img from "../../assets/p1.jpg";

import style from "./ProductPage.module.css";

export default function ProductPage() {
  const context = useContext(CartContext);
  const params = useParams();
  const id = params.productId;
  const data = context.products.filter((e) => e.product_id === id)[0];


  return (
    <div className={style.container}>
      <div className={style.image__container}>
        <img src={ data.image ? data.image :  img} alt="" />
      </div>
      <div className={style.info__container}>
        <h1>{data.product_name}</h1>
        <p>{data.product_desc}</p>
        <p  className={style.stocks}>In Stock : {data.product_stock}</p>
        <div className={style.tags}>
          {
            data.tags.map(e => <span key={e} className={style.tag}>{e}</span> )
          }
        </div>
        <div className={style.wrapper}>
          <div className={style.price}>Rs. {data.product_price}</div>
          <button onClick={() => context.addItem(id)} disabled={data.product_stock === 0}>
            Add To Cart <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
