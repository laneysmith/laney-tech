import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemePicker from '../ThemePicker';
import { THEME_LIST } from '../themes';

describe('ThemePicker', () => {
  it('should call setTheme with the correct values', async () => {
    const user = userEvent.setup();
    const setThemeMock = jest.fn();
    render(<ThemePicker theme={THEME_LIST[0]} setTheme={setThemeMock} />);

    await user.click(screen.getByLabelText('dark'));

    expect(setThemeMock).toHaveBeenCalledWith('dark');
    expect(setThemeMock.mock.calls.length).toBe(1);

    await user.click(screen.getByLabelText('rainbow'));

    expect(setThemeMock).toHaveBeenCalledWith('rainbow');
    expect(setThemeMock.mock.calls.length).toBe(2);
  });

  it('should have the correct theme selected by default', () => {
    const { rerender } = render(<ThemePicker theme={THEME_LIST[0]} setTheme={jest.fn()} />);
    const firstThemeRadio = screen.getByLabelText('light');
    const secondThemeRadio = screen.getByLabelText('dark');

    expect(firstThemeRadio).toBeChecked();

    rerender(<ThemePicker setTheme={jest.fn()} theme={THEME_LIST[1]} />);

    expect(secondThemeRadio).toBeChecked();
  });
});
