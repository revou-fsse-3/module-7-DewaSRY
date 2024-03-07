import { ZOO_API_HTTPS } from "@utils/http";
import { animalPayload, animalPayloadWithId } from "@utils/type";
import { getCookies } from "@utils/cookie";
export default async function newAnimal(payload: animalPayload) {
  const response = await fetch(`${ZOO_API_HTTPS}/animal`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to create animal");
  }

  return response.json() as unknown as animalPayloadWithId;
}
