import axios from "axios";

const BaseUrl = "http://localhost:5000/heroes";

export async function getHeroes() {
  return await axios.get(BaseUrl);
}

export async function getHeroById(id) {
  return await axios.get(`${BaseUrl}/${id}`);
}

export async function deleteHeroById(id) {
  return await axios.delete(`${BaseUrl}/${id}`);
}

export async function putHero(updatedHero) {
  return await axios.put(`${BaseUrl}/${updatedHero.id}`, updatedHero);
}

export async function postHero(newHero) {
  return await axios.post(BaseUrl, newHero);
}
