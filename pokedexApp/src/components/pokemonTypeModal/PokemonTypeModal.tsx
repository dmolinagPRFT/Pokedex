import { PokemonTypesAgainstType } from '../../types/Pokemon';
import { pokemonTypesAgainst } from '../../utils';
import { PokemonBadgeType } from '../pokemonBadgeType/PokemonBadgeType';
import styles from './pokemonTypeModal.module.scss';
import { Modal } from 'react-aria-components';

type PokemonModalProps = {
	type: string;
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
};

export const PokemonTypeModal = ({
	type,
	isOpen,
	setOpen,
}: PokemonModalProps) => {
	const pokemonType: PokemonTypesAgainstType = pokemonTypesAgainst.filter(
		(pokemonType) => {
			return pokemonType.type === type;
		}
	)[0];

	return (
		<>
			{isOpen && (
				<Modal
					isDismissable
					isOpen={isOpen}
					onOpenChange={() => setOpen(isOpen)}
					className={styles.pokemonModal}
				>
					<div className={styles.modal}>
						<div className={styles.modal__types}>
							<div className={styles.modal__types__title}>Type:</div>
							<div className={styles.modal__types__type}>
								<PokemonBadgeType
									key={pokemonType.type}
									type={pokemonType.type}
									tabIndex={false}
								/>
							</div>
						</div>

						{PokemonBadgeTypeComp('String against', pokemonType.strongAgainst)}

						{PokemonBadgeTypeComp('Weak against', pokemonType.weakAgainst)}

						{PokemonBadgeTypeComp('Resistance to', pokemonType.resistantTo)}

						{PokemonBadgeTypeComp('Vulnerable to', pokemonType.vulnerableTo)}
					</div>
				</Modal>
			)}
		</>
	);
};

const PokemonBadgeTypeComp = (
	title: string,
	type: string[]
): React.ReactElement => {
	return (
		<div className={styles.modal__types}>
			<div className={styles.modal__types__title}>{title}:</div>
			<div className={styles.modal__types__type}>
				{type.map((type) => (
					<PokemonBadgeType key={type} type={type} tabIndex={false} />
				))}
			</div>
		</div>
	);
};
