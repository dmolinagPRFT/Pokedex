import { render, screen } from '@testing-library/react';
import { SearchByType } from './SearchByType';
import userEvent from '@testing-library/user-event';
import { pokemonTypes } from '../../../utils';

const onChangeSpy = jest.fn();
const qonSearchByTypeSpy = jest.fn();

const defaultProps = {
	setPage: onChangeSpy,
};

const renderComp = (props = defaultProps) => {
	render(<SearchByType {...props} />);
};

describe('Search by type', () => {
	it('should render the title', async () => {
		renderComp();

		const title = screen.getByText('Search by type');

		expect(title).toBeInTheDocument();
	});
	it('should render pokemon types list', async () => {
		renderComp();

		const pokemonListString = screen.getByTestId('pokemon-types-list');

		const pokemonList = pokemonListString.innerHTML.split(/<li/i);

		expect(pokemonList).toHaveLength(20);
	});
});
