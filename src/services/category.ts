import api from "./api";

export interface ICategoryProps {
  Id?: number;
  Name: string;
}

export const getCategories = async (): Promise<ICategoryProps[] | undefined> => {
  try {
    const { data } = await api.get("/Category");
    return data;
  } catch (error) {
    console.log(error);
  }
};
