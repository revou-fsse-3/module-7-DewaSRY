import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
import {
  employeePayloadWithId,
  employeePayload as employee,
  updatePayload,
} from "@/features/entity";
export default async function updateAnimal({
  payload,
  id,
}: updatePayload<employee>) {
  const response = await fetch(`${ZOO_API_HTTPS}/employee/${id}`, {
    method: "PUT",
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
