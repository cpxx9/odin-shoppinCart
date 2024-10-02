import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Listing from '../components/Listing/Listing';

const item = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const item1 = {
  id: 2,
  title: 'Fjaraven - Foldsack No. 5 Bkpack, Fits 4 Laptops',
  price: 89.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "women's clothing",
  rating: {
    rate: 2.8,
    count: 120,
  },
};

const shortDescription = item.description.substring(0, 90) + '...';

vi.mock('react-router-dom', () => ({
  Link: ({ children }) => <a>{children}</a>,
}));

describe('Item Component', () => {
  it('renders with props', () => {
    render(<Listing item={item} />);

    const title = screen.getByRole('heading', { name: item.title });
    const category = screen.getByRole('heading', { name: item.category });
    const description = screen.getByText(shortDescription);
    const rating = screen.getByRole('heading', {
      name: item.rating.rate + ' / ' + item.rating.count,
    });
    const price = screen.getByRole('heading', { name: item.price });
    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('shows full description on button click', async () => {
    const user = userEvent.setup();
    render(<Listing item={item} />);
    const button = screen.getByRole('button', { name: 'More' });

    await user.click(button);

    expect(screen.getByText(item.description)).toBeInTheDocument;
  });

  it('shows short description again on another button click', async () => {
    const user = userEvent.setup();
    render(<Listing item={item} />);
    const button = screen.getByRole('button', { name: 'More' });

    await user.click(button);
    await user.click(button);

    expect(screen.getByText(shortDescription)).toBeInTheDocument;
  });

  it('works with different props', () => {
    render(<Listing item={item1} />);

    const title = screen.getByRole('heading', { name: item1.title });
    const category = screen.getByRole('heading', { name: item1.category });
    const description = screen.getByText(shortDescription);
    const rating = screen.getByRole('heading', {
      name: item1.rating.rate + ' / ' + item1.rating.count,
    });
    const price = screen.getByRole('heading', { name: item1.price });
    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
