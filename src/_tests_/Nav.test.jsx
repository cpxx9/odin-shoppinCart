import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Nav from '../components/Nav/Nav';

vi.mock('react-router-dom', () => ({
  NavLink: ({ children }) => <a>{children}</a>,
}));
describe('Navbar component', () => {
  it('renders the proper title', () => {
    render(<Nav />);
    expect(
      screen.getByRole('heading', { name: /odin storefront/i }),
    ).toBeInTheDocument();
  });
});
