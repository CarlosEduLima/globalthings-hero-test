import React, { createContext, ReactNode, useContext, useState } from 'react';
import { getHeroes, IHeroProps, deleteHero } from '../../services/hero';

interface IHeroContextData {
  loadHeroes: () => void;
  allHeroes: IHeroProps[];
  loading: boolean;
  selectedHero: IHeroProps | undefined;
  setSelectedHero: any; 
  removeHero: (id: number) => void;
}

interface HeroProviderProps {
  children: ReactNode;
}

const HeroContext = createContext({} as IHeroContextData);

const HeroProvider = ({ children }: HeroProviderProps) => {
  const [allHeroes, setAllHeroes] = useState<IHeroProps[]>([])
  const [selectedHero, setSelectedHero] = useState<IHeroProps>()
  const [loading, setLoading] = useState(false)

  const loadHeroes = async () => {
    setLoading(true)
    const response: any = await getHeroes();
    setAllHeroes(response);
    setLoading(false)
  };

  const removeHero = async (heroId: number) => {
    setLoading(true)
    await deleteHero(heroId)
    setLoading(false)
    setSelectedHero(undefined)
    loadHeroes()
  }

  return (
    <HeroContext.Provider
      value={{
        loadHeroes,
        loading,
        selectedHero,
        setSelectedHero,
        removeHero,
        allHeroes,
      }}>
      {children}
    </HeroContext.Provider>
  );
};

function useHero() {
  const context = useContext(HeroContext);

  return context;
}

export { HeroProvider, useHero };
