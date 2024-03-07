import { ZOO_API_HTTPS } from "@utils/http";
import { authPayload, registerResponse } from "@utils/type";
import { setCookies } from "@utils/cookie";
export default async function userLogin(payload: authPayload) {
  const response = await fetch(`${ZOO_API_HTTPS}/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw Error("failed to login ");
  } else {
    const data = (await response.json()) as unknown as registerResponse;
    setCookies(data.access_token);
  }
}
