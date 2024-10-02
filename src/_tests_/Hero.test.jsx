import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../components//Hero/Hero';

describe('Hero Component', () => {
  it('renders with default values if no props passed', () => {
    render(<Hero />);
    const title = screen.getByRole('heading', {
      name: /your cool website title/i,
    });
    const subtitle = screen.getByRole('paragraph', {});
    expect(title).toBeInTheDocument;
    expect(subtitle.textContent).toMatch(
      /Your cool website tagline, make it unique/i,
    );
  });

  it('renders with custom props passed', () => {
    render(
      <Hero
        title={"React Custom PC's"}
        subtitle={"Custom built PC's, no matter your needs"}
      />,
    );
    const title = screen.getByRole('heading', {
      name: /react custom pc\'s/i,
    });
    const subtitle = screen.getByRole('paragraph', {});
    expect(title).toBeInTheDocument;
    expect(subtitle.textContent).toMatch(
      /custom built pc\'s\, no matter your needs/i,
    );
  });
});
