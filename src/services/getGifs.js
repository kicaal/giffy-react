import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;

  const gifs = data.map((image) => {
    const { title, id } = image;
    const { url } = image.images.downsized_medium;
    return { title, id, url };
  });
  return gifs;
};

export default function getGifs({
  limit = 25,
  keyword = "morty",
  page = 0,
  rating,
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
