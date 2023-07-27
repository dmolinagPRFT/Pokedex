import { PokemonObj } from "../../../types/Pokemon";
import { getPokemonColor } from "../../../utils/pokemonFunctions";
import {
  usePokemonsListContext,
  getFavoritePokemons,
  setFavoritePokemons,
  POKEMONS_PER_PAGE,
} from "../../../utils";
import {
  INITIAL_POKEMON,
  useListPokemon,
  useListPokemonByType,
} from "../../../customHooks";
import styles from "./pokemonList.module.scss";
import { useState } from "react";
import { Button, Card, CardContent, PokemonModal } from "../../../components";
import {} from "../../../utils";
import _ from "lodash";

interface PokemonListProp {
  page: number;
  setPage: (page: number) => void;
}

export const PokemonList = ({ page, setPage }: PokemonListProp) => {
  const { pokemonList, filtered, pokemonType } = usePokemonsListContext();
  const { queryPokemons } = useListPokemon();
  const { queryPokemonsByType } = useListPokemonByType();

  const [isOpen, setOpen] = useState(false);
  const [isOpenPokemonTypeModal, setIsOpenPokemonTypeModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonObj>(INITIAL_POKEMON);
  const [favPokemons, setFavPokemons] = useState<number[]>(getFavoritePokemons);

  const handleLoadMore = async () => {
    const nextPage = page + 1;

    if (!filtered) {
      queryPokemons(page);
    } else {
      queryPokemonsByType(pokemonType, POKEMONS_PER_PAGE * nextPage);
    }
    setPage(nextPage);
  };

  const handleOpenModal = (pokemon: PokemonObj) => {
    setOpen(true);
    setSelectedPokemon(pokemon);
  };
  const openPokemonTypeModal = (predicate: boolean) => {
    console.log("debug");
    setIsOpenPokemonTypeModal(predicate);
  };

  const handleSetFavorite = (pokemonId: number) => {
    setFavPokemons((prevState) => prevState.concat(pokemonId));
    setFavoritePokemons([...favPokemons, pokemonId]);
  };

  const handleRemoveFavorite = (pokemonId: number) => {
    const savedPokemon = favPokemons.filter(
      (savedPokemon: number) => savedPokemon === pokemonId
    );

    if (savedPokemon.length > 0) {
      const newArray = [...favPokemons];
      _.remove(newArray, (n) => {
        return n === savedPokemon[0];
      });
      setFavPokemons(newArray);
      setFavoritePokemons(newArray);
    }
  };

  return (
    <section className={styles.pokemonList}>
      <div className={styles.pokemonList__list}>
        {pokemonList.map((pokemon: PokemonObj) => {
          return (
            <Card
              size="md"
              backgroundColor={getPokemonColor(pokemon).color}
              key={pokemon.id}
            >
              <CardContent
                type="vertical"
                pokemon={pokemon}
                openModal={() => handleOpenModal(pokemon)}
                favPokemons={favPokemons}
                onSetFavorites={handleSetFavorite}
                onRemoveFavorites={handleRemoveFavorite}
                openPokemonTypeModal={openPokemonTypeModal}
              />
            </Card>
          );
        })}
      </div>

      <PokemonModal
        pokemon={selectedPokemon}
        isOpen={isOpen}
        setOpen={() => setOpen(false)}
      />

      {/* The final consideration about my feedback is to create a new modal to display here, which is up to you :)  */}

      <PokemonModal
        pokemon={selectedPokemon}
        isOpen={isOpenPokemonTypeModal}
        setOpen={() => openPokemonTypeModal(false)}
      />

      <div className={styles.pokemonList__button}>
        <Button buttonStyle="primary" onClick={handleLoadMore}>
          Load more
        </Button>
      </div>
    </section>
  );
};
