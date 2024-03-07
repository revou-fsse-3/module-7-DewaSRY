import { getCookies } from "@utils/cookie";
import { ZOO_API_HTTPS } from "@utils/http";
import { employeePayloadWithId } from "@utils/type";
export default async function getAllEmployee() {
  const response = await fetch(`${ZOO_API_HTTPS}/employee`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!response.ok) {
    throw Error("failed to create animal");
  }

  return response.json() as unknown as employeePayloadWithId[];
}
