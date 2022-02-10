import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemePicker from '../ThemePicker';
import { THEME_LIST } from '../themes';

describe('ThemePicker', () => {
  const themeList = THEME_LIST;
  const theme = THEME_LIST[0];
  const setTheme = jest.fn();
  const PROPS = {
    themeList,
    theme,
    setTheme,
  };

  it('should call setTheme with the correct values', () => {
    const { rerender } = render(<ThemePicker {...PROPS} />);
    const firstThemeButton = screen.getByRole('button', { name: /light/i });
    const secondThemeButton = screen.getByRole('button', { name: /dark/i });

    userEvent.click(secondThemeButton);

    expect(setTheme).toHaveBeenCalledWith(THEME_LIST[1]);
    expect(setTheme.mock.calls.length).toBe(1);

    rerender(<ThemePicker {...PROPS} theme={THEME_LIST[1]} />);

    userEvent.click(firstThemeButton);

    expect(setTheme).toHaveBeenCalledWith(THEME_LIST[0]);
    expect(setTheme.mock.calls.length).toBe(2);
  });

  it('should disable currently selected theme button', () => {
    const { rerender } = render(<ThemePicker {...PROPS} />);
    const firstThemeButton = screen.getByRole('button', { name: /light/i });
    const secondThemeButton = screen.getByRole('button', { name: /dark/i });
    const thirdThemeButton = screen.getByRole('button', { name: /rainbow/i });

    expect(firstThemeButton).toHaveAttribute('aria-pressed', 'true');
    expect(secondThemeButton).toHaveAttribute('aria-pressed', 'false');
    expect(thirdThemeButton).toHaveAttribute('aria-pressed', 'false');

    rerender(<ThemePicker {...PROPS} theme={THEME_LIST[1]} />);

    expect(firstThemeButton).toHaveAttribute('aria-pressed', 'false');
    expect(secondThemeButton).toHaveAttribute('aria-pressed', 'true');
    expect(thirdThemeButton).toHaveAttribute('aria-pressed', 'false');
  });
});
