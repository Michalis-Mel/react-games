const base_url = import.meta.env.VITE_GAMES_API;

export const titleSearch = (title) => `${base_url}title=${title}`;
export const idSearch = (id) => `${base_url}title=${id}`;
export const multipleIdSearch = (ids) => `${base_url}title=${ids}`;
