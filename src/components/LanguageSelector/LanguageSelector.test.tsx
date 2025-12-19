import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import i18n from '../../i18n';
import LanguageSelector from './LanguageSelector';
import { beforeEach, describe, expect, it } from 'vitest';

describe('LanguageSelector', () => {
  beforeEach(() => {
    // ensure a predictable starting language
    void i18n.changeLanguage('en');
  });

  it('renders EN / ES labels and a checkbox', () => {
    render(<LanguageSelector />);
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('shows unchecked when language is "en" and toggles to "es" on click', async () => {
    render(<LanguageSelector />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    // changeLanguage is async; await any pending promises
    expect(i18n.language.startsWith('es')).toBe(true);
    expect(checkbox).toBeChecked();
  });

  it('toggles back to "en" when clicked again', async () => {
    // start at es for this case
    await i18n.changeLanguage('es');
    render(<LanguageSelector />);
    const user = userEvent.setup();
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(i18n.language.startsWith('en')).toBe(true);
    expect(checkbox).not.toBeChecked();
  });
});
