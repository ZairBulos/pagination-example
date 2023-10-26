import { API_URL } from "./constants";

export const getAllPaged = async (endpoint, page, size = 5) => {
  try {
    const res = await fetch(`${API_URL}/${endpoint}/paged?page=${page}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
