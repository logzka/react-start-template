import React, { createContext, PropsWithChildren, useState } from 'react';

/** Types */
export type TLang = 'ru' | 'en';

interface ILangContextProps {
  lang: TLang;
  setLang: (value: TLang) => void;
}

export const LangContext = createContext<ILangContextProps>({
  lang: 'ru',
  setLang: () => {
    // TODO: ? Unexpected empty method
  },
});

export const LangContextProvider = ({ children }: PropsWithChildren) => {
  console.log('LangContextProvider render');
  const [lang, setLang] = useState<TLang>('ru');

  const value = {
    lang,
    setLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};
