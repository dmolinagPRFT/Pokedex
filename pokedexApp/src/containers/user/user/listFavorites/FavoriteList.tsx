import { useEffect, useState } from 'react';
import styles from './favoriteList.module.scss';
import { PokemonObj } from '../../../../types/Pokemon';
import { BiSolidHeart } from 'react-icons/bi';
import { User } from '../..';
import { useGetFavoritePokemons } from '../../../../customHooks/useGetFavoritepokemons';
import { removeFavoritePokemon } from '../../../../api';
import { useToastContext } from '../../../../utils';
import _ from 'lodash';

interface FavoriteListProps {
	user: User;
}

export const FavoriteList = ({ user }: FavoriteListProps) => {
	const { queryFavoritePokemons, favoritePokemons } = useGetFavoritePokemons();
	const { showToast } = useToastContext();

	const [favPokemons, setFavPokemons] = useState<PokemonObj[]>([]);

	useEffect(() => {
		queryFavoritePokemons(user.id, user.password);
	}, []);

	useEffect(() => {
		setFavPokemons(favoritePokemons);
	}, [favoritePokemons]);

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
			const savedPokemon = favPokemons.filter(
				(savedPokemon: PokemonObj) => savedPokemon.id === pokemonId
			);
			if (savedPokemon.length > 0) {
				const newArray = [...favPokemons];
				_.remove(newArray, (n) => {
					return n.id === savedPokemon[0].id;
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
