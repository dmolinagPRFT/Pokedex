import { render, screen } from '@testing-library/react';
import { InputComp } from './InputComp';
import userEvent from '@testing-library/user-event';

const onChangeSpy = jest.fn();
const defaultProps = {
	onChangeValue: onChangeSpy,
	label: 'Search by name',
	loading: false,
	value: '',
};

const renderComp = (props = defaultProps) => {
	render(<InputComp {...props} />);
};

describe('Input component', () => {
	it('should render and test input component', async () => {
		renderComp();

		const input = screen.getByTestId('Search by name');
		await userEvent.click(input);

		await userEvent.paste(input, 'Test');

		expect(onChangeSpy).toBeCalledWith('Test');
	});
	it('should render loading', async () => {
		const newProps = { ...defaultProps, loading: true };
		renderComp(newProps);

		expect(screen.getByTestId('spinner')).toBeVisible();
	});
	it('should render label', async () => {
		renderComp();

		expect(screen.getByText('Search by name:')).toBeInTheDocument();
	});
});
