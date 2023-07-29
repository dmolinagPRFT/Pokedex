import React from "react";
import { pokemonTypes } from "../../../pokemonTypes";
import { Button, PokemonBadgeType } from "../../";
import styles from "../searchBar.module.scss";
import { useListPokemon, useListPokemonByType } from "../../../customHooks";
import { POKEMONS_PER_PAGE } from "../../../utils";

interface SearchBarProp {
  setPage: (page: number) => void;
}

export const SearchByType = ({ setPage }: SearchBarProp) => {
  const [selectedType, setSelectedType] = React.useState<string>("");
  const { queryPokemonsByType } = useListPokemonByType();
  const { queryPokemons } = useListPokemon();

  const onSearchByType = async (typeName: any) => {
    setSelectedType(typeName);
    if (typeName && typeName !== selectedType) {
      setPage(1);
      queryPokemonsByType(typeName, POKEMONS_PER_PAGE);
    } else if (!typeName) {
      queryPokemons(0, true);
    }
  };

  return (
    <div className={styles.searchBar__searchByType}>
      <h2 className={styles.searchBar__searchByType__title}>Search by type</h2>

      <ul className={styles.searchBar__searchByType__pokemonTypes}>
        {pokemonTypes.map((type) => {
          return (
            <li key={type.name}>
              <PokemonBadgeType
                type={type.name}
                tabIndex={false}
                button={true}
                handleClick={onSearchByType}
              />
            </li>
          );
        })}
        <li>
          <Button
            buttonStyle="badge"
            bgColor={"white"}
            onClick={() => onSearchByType(undefined)}
            textColor="black"
            name=""
          >
            Clear
          </Button>
        </li>
      </ul>
    </div>
  );
};
