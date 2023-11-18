import React, { createContext, PropsWithChildren, useState } from 'react';

/** Types */
export type TTheme = 'light' | 'dark';

interface IThemeContextProps {
  theme: TTheme;
  setTheme: (value: TTheme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
  theme: 'light',
  setTheme: () => {
    // TODO: ? Unexpected empty method
  },
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<TTheme>('light');

  const value = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
