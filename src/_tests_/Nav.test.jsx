import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Nav } from '../components/Nav';

// jest.mock('react-router-dom', () => ({ children }) => <a>{children}</a>);
describe('Navbar component', () => {
  it('renders the proper title', () => {
    render(<Nav />);
    expect(screen.getByRole('span').textContent).toMatch(/react pc/i);
  });
});
