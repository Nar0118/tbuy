import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../../app/search";
import { ICategories } from "../../../types";

import styles from "./categories.module.scss";

const Categories = () => {
  const categories: Array<ICategories> = useSelector(selectCategories);

  if (!categories?.length) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Categories</div>
      {categories?.map((category: ICategories) => (
        <div className={styles.product} key={category.id}>
          <img src={category.company?.logo ?? "/images/store.svg"} />
          <div>
            <div className={styles.companyName}>{category.company.name}</div>
            <div>{category.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
