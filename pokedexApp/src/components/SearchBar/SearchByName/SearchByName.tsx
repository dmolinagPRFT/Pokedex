import React, { useEffect } from "react";
import { InputComp } from "../..";
import styles from "../searchBar.module.scss";
import { useGetPokemon, useListPokemon } from "../../../customHooks";

export const SearchByName = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const { queryPokemons } = useListPokemon();
  const { queryPokemon } = useGetPokemon(searchTerm, false);
  const [queryLoading, setQueryLoading] = React.useState<boolean>(false);

  // destroy debounce timeout when the user press enter
  // move debounce to a custom hook
  useEffect(() => {
    let delayDebounceFn: NodeJS.Timeout;
    if (searchTerm.length > 3) {
      delayDebounceFn = setTimeout(() => {
        queryPokemon(searchTerm);
        setQueryLoading(false);
        clearTimeout(delayDebounceFn);
      }, 5000);
    } else if (searchTerm.length === 0) {
      queryPokemons(0, true);
      setQueryLoading(false);
    } else {
      setQueryLoading(false);
    }

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setQueryLoading(true);
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
