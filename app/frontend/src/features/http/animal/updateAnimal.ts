import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
import { animalPayloadWithId, animalPayload, updatePayload } from "@utils/type";

export default async function updateAnimal({
  payload,
  id,
}: updatePayload<animalPayload>) {
  const response = await fetch(`${ZOO_API_HTTPS}/animal/${id}`, {
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
