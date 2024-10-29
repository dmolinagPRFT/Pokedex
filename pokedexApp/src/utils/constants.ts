import { PokemonType, PokemonTypesAgainstType } from '../types/Pokemon';

export const POKEMONS_PER_PAGE = 9;
export const MAX_POKEMON = 150;
export const URL = 'http://localhost:3000/';
export const POKEMONS_PATH = 'pokemons';
export const USERS_PATH = 'users';
export const FAVORITES_PATH = 'favorites';

export const pokemonTypes: PokemonType[] = [
	{ name: 'bug', color: '#7bcf00' },
	{ name: 'dark', color: '#5a566a' },
	{
		name: 'dragon',
		color: '#0076ff',
	},
	{
		name: 'electric',
		color: '#ffde00',
	},
	{
		name: 'fairy',
		color: '#ff76ff',
	},
	{
		name: 'fighting',
		color: '#ff215b',
	},
	{
		name: 'fire',
		color: '#ff9900',
	},
	{
		name: 'flying',
		color: '#89bdff',
	},
	{
		name: 'ghost',
		color: '#4e6aff',
	},
	{
		name: 'grass',
		color: '#1cd80e',
	},
	{
		name: 'ground',
		color: '#ff6b0d',
	},
	{
		name: 'ice',
		color: '#2ee4c6',
	},
	{
		name: 'normal',
		color: '#9fa39d',
	},
	{
		name: 'poison',
		color: '#f149ff',
	},
	{
		name: 'psychic',
		color: '#ff6c64',
	},
	{ name: 'rock', color: '#d8bc5a' },
	{
		name: 'steel',
		color: '#23a1bd',
	},
	{
		name: 'water',
		color: '#14a8ff',
	},
];

export const pokemonTypesAgainst: PokemonTypesAgainstType[] = [
	{
		type: 'normal',
		strongAgainst: [''],
		weakAgainst: ['rock', 'ghost', 'steel'],
		resistantTo: ['ghost'],
		vulnerableTo: ['fighting'],
	},
	{
		type: 'fighting',
		strongAgainst: ['normal', 'rock', 'steel', 'ice', 'dark'],
		weakAgainst: ['flying', 'poison', 'psychic', 'bug', 'ghost', 'fairy'],
		resistantTo: ['rock', 'bug', 'dark'],
		vulnerableTo: ['flying', 'psychic', 'fairy'],
	},
	{
		type: 'flying',
		strongAgainst: ['fighting', 'bug', 'grass'],
		weakAgainst: ['rock', 'steel', 'electric'],
		resistantTo: ['fighting', 'ground', 'bug', 'grass'],
		vulnerableTo: ['rock', 'electric', 'ice'],
	},
	{
		type: 'poison',
		strongAgainst: ['grass', 'fairy'],
		weakAgainst: ['poison', 'ground', 'rock', 'ghost', 'steel'],
		resistantTo: ['fighting', 'poison', 'grass', 'fairy'],
		vulnerableTo: ['ground', 'psychic'],
	},
	{
		type: 'ground',
		strongAgainst: ['poison', 'rock', 'steel', 'fire', 'electric'],
		weakAgainst: ['flying', 'bug', 'grass'],
		resistantTo: ['poison', 'rock', 'electric'],
		vulnerableTo: ['water', 'grass', 'ice'],
	},
	{
		type: 'rock',
		strongAgainst: ['flying', 'bug', 'fire', 'ice'],
		weakAgainst: ['fighting', 'ground', 'steel'],
		resistantTo: ['normal', 'flying', 'poison', 'fire'],
		vulnerableTo: ['fighting', 'ground', 'steel', 'water', 'grass'],
	},
	{
		type: 'bug',
		strongAgainst: ['grass', 'psychic', 'dark'],
		weakAgainst: [
			'fighting',
			'flying',
			'poison',
			'ghost',
			'steel',
			'fire',
			'fairy',
		],
		resistantTo: ['fighting', 'ground', 'grass'],
		vulnerableTo: ['flying', 'rock', 'fire'],
	},
	{
		type: 'ghost',
		strongAgainst: ['ghost', 'psychic'],
		weakAgainst: ['normal', 'dark'],
		resistantTo: ['normal', 'fighting', 'poison', 'bug'],
		vulnerableTo: ['ghost', 'dark'],
	},
	{
		type: 'steel',
		strongAgainst: ['rock', 'ice', 'fairy'],
		weakAgainst: ['steel', 'fire', 'water', 'electric'],
		resistantTo: [
			'normal',
			'flying',
			'poison',
			'rock',
			'bug',
			'steel',
			'grass',
			'psychic',
			'ice',
			'dragon',
			'fairy',
		],
		vulnerableTo: ['fighting', 'ground', 'fire'],
	},
	{
		type: 'fire',
		strongAgainst: ['bug', 'steel', 'grass', 'ice'],
		weakAgainst: ['rock', 'fire', 'water', 'dragon'],
		resistantTo: ['bug', 'steel', 'fire', 'grass', 'ice'],
		vulnerableTo: ['ground', 'rock', 'water'],
	},
	{
		type: 'water',
		strongAgainst: ['ground', 'rock', 'fire'],
		weakAgainst: ['water', 'grass', 'dragon'],
		resistantTo: ['steel', 'fire', 'water', 'ice'],
		vulnerableTo: ['grass', 'electric'],
	},
	{
		type: 'grass',
		strongAgainst: ['ground', 'rock', 'water'],
		weakAgainst: [
			'flying',
			'poison',
			'bug',
			'steel',
			'fire',
			'grass',
			'dragon',
		],
		resistantTo: ['ground', 'water', 'grass', 'electric'],
		vulnerableTo: ['flying', 'poison', 'bug', 'fire', 'ice'],
	},
	{
		type: 'electric',
		strongAgainst: ['flying', 'water'],
		weakAgainst: ['ground', 'grass', 'electric', 'dragon'],
		resistantTo: ['flying', 'steel', 'electric'],
		vulnerableTo: ['ground'],
	},
	{
		type: 'psychic',
		strongAgainst: ['fighting', 'poison'],
		weakAgainst: ['steel', 'psychic', 'dark'],
		resistantTo: ['fighting', 'psychic'],
		vulnerableTo: ['bug', 'ghost', 'dark'],
	},
	{
		type: 'ice',
		strongAgainst: ['flying', 'ground', 'grass', 'dragon'],
		weakAgainst: ['steel', 'fire', 'water', 'ice'],
		resistantTo: ['ice'],
		vulnerableTo: ['fighting', 'rock', 'steel', 'fire'],
	},
	{
		type: 'dragon',
		strongAgainst: ['dragon'],
		weakAgainst: ['steel', 'fairy'],
		resistantTo: ['fire', 'water', 'grass', 'electric'],
		vulnerableTo: ['ice', 'dragon', 'fairy'],
	},
	{
		type: 'fairy',
		strongAgainst: ['fighting', 'dragon', 'dark'],
		weakAgainst: ['poison', 'steel', 'fire'],
		resistantTo: ['fighting', 'bug', 'dragon', 'dark'],
		vulnerableTo: ['poison', 'steel'],
	},
	{
		type: 'dark',
		strongAgainst: ['ghost', 'psychic'],
		weakAgainst: ['fighting', 'dark', 'fairy'],
		resistantTo: ['ghost', 'psychic', 'dark'],
		vulnerableTo: ['fighting', 'bug', 'fairy'],
	},
];
