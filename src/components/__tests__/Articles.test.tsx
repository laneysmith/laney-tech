import { render, screen } from '@testing-library/react';
import Articles from '../Articles';
import { describe, expect, it } from 'vitest';

describe('Articles', () => {
  it('should display article links', () => {
    render(<Articles />);

    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(1);
  });
});
