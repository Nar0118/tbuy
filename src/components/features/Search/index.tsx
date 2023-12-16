import React, { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Input } from "antd";
import { debounce } from "lodash";
import {
  setSearchTerm,
  selectSearchTerm,
  setProducts,
  setSuggestedSearches,
  setCategories,
} from "../../../app/search";

import styles from "./search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm: string = useSelector(selectSearchTerm);

  const fetchData = debounce(async (query, signal): Promise<void> => {
    try {
      const { data } = await axios.get(
        `https://webapi.tbuy.am/live/?word=${query}`,
        { signal }
      );
      const { products, suggestedSearches, categories } = data;
      dispatch(setProducts(products));
      dispatch(setSuggestedSearches(suggestedSearches));
      dispatch(setCategories(categories));
    } catch (e) {
      console.error(e);
    }
  }, 500);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;

    if (searchTerm.length >= 3) {
      fetchData(searchTerm, signal);
    }

    return () => {
      controller.abort();
    };
  }, [searchTerm]);

  const handleClear = (): void => {
    dispatch(setSearchTerm(""));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className={styles.container}>
      <Input
        value={searchTerm}
        placeholder="Search..."
        onChange={handleSearch}
        prefix={<img src="/images/searchIcon.svg" />}
        suffix={
          searchTerm && (
            <img src="/images/cancelSearch.svg" onClick={handleClear} />
          )
        }
      />
    </div>
  );
};

export default Search;
