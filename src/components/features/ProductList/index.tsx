import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../app/search";
import SuggestedList from "../SuggestedList";
import Categories from "../Categories";
import { IProducts } from "../../../types";

import styles from "./productList.module.scss";

const ProductList = () => {
  const products: Array<IProducts> = useSelector(selectProducts);

  if (!products?.length) {
    return <></>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SuggestedList />
        <div className={styles.line} />
        <Categories />
        <div className={styles.line} />
        {products.map((product: IProducts) => (
          <div className={styles.product} key={product.id}>
            <img src={product?.images[0] ?? "/images/searchIcon.svg"} />
            <div>
              <div>{product?.name}</div>
              <div>{`${product?.price} AMD`}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.scrollBarCover} />
    </div>
  );
};

export default ProductList;
