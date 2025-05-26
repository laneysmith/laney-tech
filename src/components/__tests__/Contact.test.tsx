import { render, screen } from '@testing-library/react';
import { Contact } from '../Contact';
import { describe, expect, it } from 'vitest';

describe('Contact', () => {
  it('should display contact links', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: /github.com\// })).toBeVisible();
    expect(screen.getByRole('link', { name: /linkedin.com\/in\// })).toBeVisible();
    expect(screen.getByRole('link', { name: /@.*.com/ })).toBeVisible();
  });
});
