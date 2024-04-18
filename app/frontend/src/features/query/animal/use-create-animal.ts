import { useMutation } from "@tanstack/react-query";
import { zooApi } from "@features/api";
import { queryClient, GET_ALL_ANIMALS } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
import { AxiosResponse } from "axios";

import { animalPayload, animalPayloadWithId } from "@features/entity";

export default function useCreateAnimal() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const { mutate: animalCreateHandler } = useMutation({
    mutationFn: (animalPayload: animalPayload) =>
      zooApi
        .post<animalPayload, AxiosResponse<animalPayloadWithId>>(
          "/animal",
          animalPayload
        )
        .then((d) => d.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ALL_ANIMALS],
      });
      _closeModel();
    },
    onError(error, variables) {
      console.log(error);
      console.log(variables);
    },
  });

  return {
    animalCreateHandler,
  };
}
