import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
import { employeePayload, employeePayloadWithId } from "@/features/entity";
export default async function newAnimal(payload: employeePayload) {
  const response = await fetch(`${ZOO_API_HTTPS}/employee`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to create employee");
  }

  return response.json() as unknown as employeePayloadWithId;
}
