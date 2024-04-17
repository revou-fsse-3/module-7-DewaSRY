import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
export default async function delEmployee(animalId: string) {
  const response = await fetch(`${ZOO_API_HTTPS}/employee/${animalId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to create animal");
  }

  return response.ok;
}
