import { ZOO_API_HTTPS } from "@utils/http";
import { animalPayloadWithId } from "@utils/type";
export default async function getAllAnimals() {
  const response = await fetch(`${ZOO_API_HTTPS}/animal`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw Error("failed to create animal");
  }
  const data = response.json() as unknown as animalPayloadWithId[];

  return data;
}
