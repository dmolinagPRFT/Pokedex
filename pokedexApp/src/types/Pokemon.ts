export type PokemonObj = {
	id: number;
	name: string;
	types: [{ type: { name: string } }];
	weight: number;
	height: number;
	stats: [{ base_stat: number; stat: { name: string } }];
};

export type PokemonType = {
	name: string;
	color: string;
};

export interface PokemonTypesAgainstType {
	type: string;
	strongAgainst: string[];
	weakAgainst: string[];
	resistantTo: string[];
	vulnerableTo: string[];
}
