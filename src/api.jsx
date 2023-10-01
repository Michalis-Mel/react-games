const base_url = import.meta.env.VITE_GAMES_API;

export const titleSearch = (title) => `${base_url}title=${title}`;
