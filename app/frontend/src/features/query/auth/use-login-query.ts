import { useMutation } from "@tanstack/react-query";
import useAlertState from "@hooks/useAlertState";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";
import { authApi } from "@features/api";
import { loginPayload, authResponse } from "@features/entity";
import { setCookies } from "@utils/cookie";
import { AxiosResponse } from "axios";

export default function useUserLoginQuery() {
  const _closeAuthMode = useAuthAsideState((s) => s.closeAuthAside);
  const _setProblemFound = useAlertState((s) => s.setProblemFound);

  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate } = useMutation({
    mutationFn: (value: loginPayload) =>
      authApi
        .post<loginPayload, AxiosResponse<authResponse>>("/login", value)
        .then((d) => d.data),
    onSuccess: (response: authResponse) => {
      _closeAuthMode();
      setIsAuthentications(true);
      setCookies(response.access_token);
    },

    onError: () => {
      _setProblemFound(
        "Failed to Login ",
        "there is some issus while login maybe your password was wrong "
      );
      _closeAuthMode();
    },
  });
  return {
    handlerUserLogin: mutate,
  };
}
