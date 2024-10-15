import React, { useEffect } from 'react';
import { useGetPokemon, useListPokemon } from './index';

export function useDebounce() {
	const { queryPokemons } = useListPokemon();
	const { queryPokemon } = useGetPokemon('', false);
	const [queryLoading, setQueryLoading] = React.useState<boolean>(false);
	const [searchTerm, setSearchTerm] = React.useState<string>('');

	useEffect(() => {
		let delayDebounceFn: NodeJS.Timeout;
		if (searchTerm.length > 3) {
			delayDebounceFn = setTimeout(() => {
				queryPokemon(searchTerm);
				setQueryLoading(false);
			}, 5000);

			return () => clearTimeout(delayDebounceFn);
		} else if (searchTerm.length === 0) {
			queryPokemons(1, true);
			setQueryLoading(false);
      return () => clearTimeout(delayDebounceFn);
		} else {
			setQueryLoading(false);
      return () => clearTimeout(delayDebounceFn);
		}
	}, [searchTerm]);

	const queryByName = (searchTerm: string) => {
		setQueryLoading(true);
		setSearchTerm(searchTerm);
	};

	return { queryByName, queryLoading };
}
