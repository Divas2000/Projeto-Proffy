import { render } from '@testing-library/react';
import Header from './Header';

const TITLE = 'Header';

describe('Header Component', () => {
  test('should render header title', () => {
    const { queryByText } = render(<Header/>);

    expect(queryByText(TITLE)).toBeInTheDocument();
  });
});