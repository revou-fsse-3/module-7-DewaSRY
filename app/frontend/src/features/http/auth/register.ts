import { ZOO_API_HTTPS } from "@utils/http";
import { loginPayload as authPayload } from "@utils/type";
import userLogin from "@http/auth/login";
export default async function userRegister(payload: authPayload) {
  const response = await fetch(`${ZOO_API_HTTPS}/register`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (response.status == 422) {
    throw Error("failed to username already register");
  }

  if (response.ok) {
    await userLogin(payload);
  }
}
