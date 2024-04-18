import { useMutation } from "@tanstack/react-query";
// import userRegister from "@/features/http/auth/auth-register";
import { authApi } from "@features/api";
import useAlertState from "@hooks/useAlertState";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";
import { registerPayload } from "@features/entity";
export default function useUserRegister() {
  const closeAuthMode = useAuthAsideState((s) => s.closeAuthAside);
  const setProblemFound = useAlertState((s) => s.setProblemFound);
  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate, error } = useMutation({
    mutationFn: (registerPayload: registerPayload) =>
      authApi.post("/employee", registerPayload),
    onSuccess: () => {
      closeAuthMode();
      setIsAuthentications(true);
    },
    onError: () => {
      setProblemFound(
        "Failed to Register",
        "there is some issus while Registering your form,there is might be someone already use the user name"
      );
      closeAuthMode();
    },
  });

  console.log(error);
  return {
    handlerUserRegister: mutate,
  };
}
