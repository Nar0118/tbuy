import React from "react";
import { useSelector } from "react-redux";
import { selectSuggestedSearches } from "../../../app/search";

import styles from "./suggestedList.module.scss";

const SuggestedList = () => {
  const suggestedSearches: Array<string> = useSelector(selectSuggestedSearches);

  if (!suggestedSearches?.length) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Suggested searches</div>
      {suggestedSearches.map((suggestedSearche: string) => (
        <div className={styles.product} key={suggestedSearche}>
          <img src="/images/searchIcon.svg" />
          <div>{suggestedSearche}</div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedList;
