import { Train } from "./typedefs";

const BASE_URL = "https://trains-2y0n.onrender.com";

function request<T>(url: string): Promise<T> {
  const fullUrl = BASE_URL + url;

  return fetch(fullUrl).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
}

export default {
  getTrains: (from: string, to?: string) => request<Train[]>(`/trains?from=${from}&to=${to}`),
  getByNumber: (trainNumber: number) => request<Train>(`/trains/${trainNumber}`),
};
