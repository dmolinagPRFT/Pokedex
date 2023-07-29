import React from "react";
import { InputComp } from "../..";
import styles from "../searchBar.module.scss";
import { useDebounce } from "../../../customHooks";

export const SearchByName = () => {
 const { queryByName, queryLoading} = useDebounce()

  const handleSearch = (value: string) => {
    queryByName(value);
  };

  return (
    <section className={styles.searchBar}>
      <div className={styles.searchBar__searchByName}>
        <h2 className={styles.searchBar__searchByName__title}>
          Search by name
        </h2>
        <InputComp onChange={handleSearch} loading={queryLoading} />
      </div>
    </section>
  );
};
