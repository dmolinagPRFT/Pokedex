import React from 'react';
import {
	Button,
	ComboBox,
	Input,
	Item,
	Label,
	ListBox,
	Popover,
} from 'react-aria-components';
import { PokemonTypeBadge } from '../../pokemonBadgeType/PokemonType';


import styles from './dropdown.module.scss';
import { PokemonType } from '../../../pokemonTypes';

type Props = {
	onChange?: (e: any) => void;
	pokemonTypes: PokemonType[];
	label: string;
};

const DropDown = ({ onChange, pokemonTypes, label }: Props) => {
	return (
		<ComboBox>
			<Label className={styles.title}>{label}</Label>
			<div>
				<Input />
				<Button>▼</Button>
			</div>
			<Popover>
				<ListBox>
					{pokemonTypes.map((type) => {
						return (
							<Item>
								<PokemonTypeBadge
									key={type.name}
									type={type.name}
									tabIndex={false}
									button={true}
								/>
							</Item>
						);
					})}

					{/* <Item>Cat</Item>
					<Item>Dog</Item>
					<Item>Kangaroo</Item>
					<Item>Panda</Item>
					<Item>Snake</Item> */}
				</ListBox>
			</Popover>
		</ComboBox>
	);
};

export default DropDown;
