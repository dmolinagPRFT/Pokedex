import { useState } from "react";
import { useSpinnerContext, useToastContext } from "../utils";
import { PokemonObj } from "../types/Pokemon";
import { fetchPokemonsById } from "../api";

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
