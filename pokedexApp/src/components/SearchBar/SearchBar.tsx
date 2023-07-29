import React from "react";
import styles from "./searchBar.module.scss";
import { SearchByType } from "./SearchByType/SearchByType";
import { SearchByName } from "./SearchByName/SearchByName"

interface SearchBarProp {
  setPage: (page: number) => void;
}

export const SearchBar = ({ setPage }: SearchBarProp) => {
  return (
    <section className={styles.searchBar}>
      <SearchByType setPage={setPage} />

      <SearchByName />
    </section>
  );
};
