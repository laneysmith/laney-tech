import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemePicker from '../ThemePicker';
import { THEME_LIST } from '../../constants';

describe('ThemePicker', () => {
  const themeList = THEME_LIST;
  const theme = THEME_LIST[0];
  const setTheme = jest.fn();
  const PROPS = {
    themeList,
    theme,
    setTheme,
  };

  it('should match snapshot', () => {
    const { container } = render(<ThemePicker {...PROPS} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call setTheme with the correct values', () => {
    const { rerender } = render(<ThemePicker {...PROPS} />);
    const firstThemeButton = screen.getByRole('button', { name: /light/i });
    const secondThemeButton = screen.getByRole('button', { name: /dark/i });

    fireEvent.click(secondThemeButton);

    expect(setTheme).toHaveBeenCalledWith(THEME_LIST[1]);
    expect(setTheme.mock.calls.length).toBe(1);

    rerender(<ThemePicker {...PROPS} theme={THEME_LIST[1]} />);

    fireEvent.click(firstThemeButton);

    expect(setTheme).toHaveBeenCalledWith(THEME_LIST[0]);
    expect(setTheme.mock.calls.length).toBe(2);
  });

  it('should disable currently selected theme button', () => {
    const { rerender } = render(<ThemePicker {...PROPS} />);
    const firstThemeButton = screen.getByRole('button', { name: /light/i });
    const secondThemeButton = screen.getByRole('button', { name: /dark/i });
    const thirdThemeButton = screen.getByRole('button', { name: /rainbow/i });

    expect(firstThemeButton).toBeDisabled();
    expect(secondThemeButton).not.toBeDisabled();
    expect(thirdThemeButton).not.toBeDisabled();

    rerender(<ThemePicker {...PROPS} theme={THEME_LIST[1]} />);

    expect(firstThemeButton).not.toBeDisabled();
    expect(secondThemeButton).toBeDisabled();
    expect(thirdThemeButton).not.toBeDisabled();
  });
});
