import { useMutation } from "@tanstack/react-query";
import userLogin from "@http/auth/login";
import useAlertState from "@hooks/useAlertState";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";
export default function useUserLoginQuery() {
  const closeAuthMode = useAuthAsideState((s) => s.closeAuthAside);
  const setProblemFound = useAlertState((s) => s.setProblemFound);
  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate, error } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => {
      closeAuthMode();
      setIsAuthentications(true);
    },
    onError: () => {
      setProblemFound(
        "Failed to Login ",
        "there is some issus while login maybe your password was wrong "
      );
      closeAuthMode();
    },
  });
  console.log(error);

  return {
    handlerUserLogin: mutate,
  };
}
