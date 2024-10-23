import { useState } from "react";
import { useToastContext } from "../utils";
import { PokemonObj } from "../types/Pokemon";
import { useSpinnerContext } from "../utils/loadingContext";
import { fetchPokemonsById } from "../api/pokemon";

export function useGetPokemonById() {
  const { showToast } = useToastContext();
  const { showSpinner } = useSpinnerContext();

  const [pokemonsArray, setPokemonsArray] = useState<PokemonObj[]>([]);

  const queryPokemonsById = async (pokemonIds: number[]) => {
    const response = await fetchPokemonsById(pokemonIds);

    if (!response.error) {
      setPokemonsArray(response.pokemonList);
      showSpinner(false);
    } else {
      setPokemonsArray([]);
      showSpinner(false);
      showToast({
        isDisplay: true,
        message: "Error retrieving Pokemon's list by id",
        type: "error",
      });
    }
  };

  return { queryPokemonsById, pokemonsArray };
}
