import { render, screen } from '@testing-library/react';
import Signature from './index';

describe('Signature', () => {
	it('should render the authors name', () => {
		render(<Signature />);
		const name = screen.getByText(/cpt-westphalen/i);
		expect(name).toBeVisible();
	});
});
