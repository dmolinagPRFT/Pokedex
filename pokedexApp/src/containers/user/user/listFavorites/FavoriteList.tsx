import { useEffect, useState } from 'react';
import styles from './favoriteList.module.scss';
import { useToastContext, useUserContext } from '../../../../utils';
import { PokemonObj } from '../../../../types/Pokemon';
import { BiSolidHeart } from 'react-icons/bi';
import _ from 'lodash';
import { useGetPokemonById } from '../../../../customHooks';
import { getFavoritePokemon, removeFavoritePokemon } from '../../../../api';

export const FavoriteList = () => {
	const { user } = useUserContext();
	const { queryPokemonsById, pokemonsArray } = useGetPokemonById();
	const { showToast } = useToastContext();

	const [pokemonIds, setPokemonIds] = useState<number[]>([]);
	const [favPokemons, setFavPokemons] = useState<PokemonObj[]>([]);
	const favPokemonsLength: number = pokemonsArray.length;

	useEffect(() => {
		const getFavPokemons = async () => {
			const response = await getFavoritePokemon(user.id, user.password);
			setPokemonIds(
				response.data.map((item: { pokemonId: number }) => item.pokemonId)
			);
		};
		getFavPokemons();
	}, []);

	useEffect(() => {
		queryPokemonsById(pokemonIds);
		setFavPokemons(pokemonsArray);
	}, [pokemonIds, favPokemonsLength]);

	const handleRemoveFavorite = async (pokemonId: number) => {
		const response = await removeFavoritePokemon(
			user.id,
			pokemonId,
			user.password
		);

		if (!response.error) {
			showToast({
				isDisplay: true,
				message: response.data.message,
				type: 'success',
			});
			const savedPokemon = pokemonIds.filter(
				(savedPokemon: number) => savedPokemon === pokemonId
			);

			if (savedPokemon.length > 0) {
				const newArray = [...favPokemons];
				_.remove(newArray, (n) => {
					return n.id === savedPokemon[0];
				});

				setFavPokemons(newArray);
			}
		} else {
			showToast({
				isDisplay: true,
				message: 'Error removing favorite pokemon',
				type: 'error',
			});
		}
	};

	return (
		<ul className={styles.favoriteList}>
			{favPokemons.map((pokemon: PokemonObj) => {
				const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

				return (
					<li className={styles.favoriteList__pokemon} key={pokemon.id}>
						<img
							src={imgUrl}
							alt={pokemon.name}
							className={styles.favoriteList__pokemon__image}
							loading='lazy'
						/>
						<div className={styles.favoriteList__pokemon__name}>
							{pokemon.name}
						</div>
						<BiSolidHeart
							size={'1.5rem'}
							className={styles.favoriteList__pokemon__icon}
							onClick={() => handleRemoveFavorite(pokemon.id)}
						/>
					</li>
				);
			})}
		</ul>
	);
};
