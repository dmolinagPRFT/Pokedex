import { PokemonObj } from '../../types/Pokemon';
import { formatPokemonId } from '../../utils';
import { PokemonBadgeType } from '../pokemonBadgeType/PokemonBadgeType';
import styles from './pokemonModal.module.scss';
import { Dialog, Meter, Modal } from 'react-aria-components';

type PokemonModalProps = {
	pokemon: PokemonObj;
	isOpen: boolean;
	setOpen: (isOpen: boolean) => void;
};

export const PokemonModal = ({
	pokemon,
	isOpen,
	setOpen,
}: PokemonModalProps) => {
	const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

	return (
		<Modal
			isDismissable
			isOpen={isOpen}
			onOpenChange={() => setOpen(isOpen)}
			className={styles.pokemonModal}
		>
			<Dialog className={styles.pokemonModal__dialog}>
				<div className={styles.pokemonModal__dialog__container}>
					<div className={styles.cardContent}>
						<img
							src={imgUrl}
							alt={pokemon.name}
							className={styles.cardContent__image}
						/>

						<div className={styles.cardContent__pokemonInfo}>
							<div className={styles.cardContent__pokemonInfo__number}>
								{formatPokemonId(pokemon.id)}
							</div>
							<div className={styles.cardContent__pokemonInfo__name}>
								{pokemon.name}
							</div>

							<div className={styles.cardContent__badgeList}>
								{pokemon.types.map(({ type }) => (
									<PokemonBadgeType
										key={type.name}
										type={type.name}
										tabIndex={false}
									/>
								))}
							</div>
							<div className={styles.cardContent__characteristics}>
								<div className={styles.characteristic}>
									<div className={styles.value}>{pokemon.height} m</div>
									<div>Height</div>
								</div>
								<div className={styles.characteristic}>
									<div className={styles.value}>{pokemon.weight} Kg</div>
									<div>Weight</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.stats}>
						{pokemon.stats.map((item) => {
							const pokemonStat =
								item.stat.name.charAt(0).toUpperCase() +
								item.stat.name.slice(1);

							return (
								<div className={styles.stats__stat} key={item.stat.name}>
									<div>{pokemonStat}</div>
									<div>{item.base_stat}</div>
									<Meter value={item.base_stat} aria-label={item.stat.name}>
										{({ percentage }) => (
											<div className='bar'>
												<div
													className='fill'
													style={{ width: percentage + '%' }}
												/>
											</div>
										)}
									</Meter>
								</div>
							);
						})}
					</div>
				</div>
			</Dialog>
		</Modal>
	);
};
