import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
export default async function delAllAnimal(animalId: string) {
  const response = await fetch(`${ZOO_API_HTTPS}/animal/${animalId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to delete animal");
  }

  return response.ok;
}
