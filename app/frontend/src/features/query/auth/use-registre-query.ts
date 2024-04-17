import { useMutation } from "@tanstack/react-query";
import userRegister from "@/features/http/auth/auth-register";

import useAlertState from "@hooks/useAlertState";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";

export default function useUserRegister() {
  const closeAuthMode = useAuthAsideState((s) => s.closeAuthAside);
  const setProblemFound = useAlertState((s) => s.setProblemFound);
  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate, error } = useMutation({
    mutationFn: userRegister,
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
