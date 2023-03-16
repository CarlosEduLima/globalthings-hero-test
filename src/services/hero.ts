import api from "./api";

export interface IHeroProps {
  Id?: number;
  Name: string;
  CategoryId: number;
  Active: boolean;
  Category: {
    Id: number;
    Name: string;
  };
}

export const getHeroes = async () => {
  try {
    const { data } = await api.get<IHeroProps[]>("/Heroes");
    return data;
  } catch (error) {
    return error;
  }
};

export const createHero = async (hero: IHeroProps) => {
  try {
    const body = hero;
    const { status } = await api.post("/Heroes", body);
    return status;
  } catch (error) {
    return error;
  }
};

export const editHero = async (hero: IHeroProps) => {
  try {
    const body = hero;
    const { status } = await api.put(`/Heroes/${hero.Id}`, body);
    return status;
  } catch (error) {
    return error;
  }
};

export const deleteHero = async (id: number) => {
  try {
    const { status } = await api.delete(`/Heroes/${id}`);
    return status;
  } catch (error) {
    return error;
  }
};
