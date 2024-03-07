import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
import { animalPayloadWithId, animalPayload } from "@utils/type";
export default async function updateAnimal(
  payload: Partial<animalPayload>,
  animalId: string
) {
  const response = await fetch(`${ZOO_API_HTTPS}/animal/${animalId}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to update animal");
  }

  return response.json() as unknown as animalPayloadWithId;
}
