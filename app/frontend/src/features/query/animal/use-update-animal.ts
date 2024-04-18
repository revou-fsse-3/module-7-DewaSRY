import { useMutation } from "@tanstack/react-query";
import { zooApi } from "@features/api";
import { queryClient } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
import { AxiosResponse } from "axios";
import { animalPayload, animalPayloadWithId } from "@features/entity";
import useAnimals from "@features/hooks/useAnimals";

export default function useUpdateAnimal() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const _currentAnimalId = useAnimals((s) => s.currentAnimalId);

  const { mutate: animalUpdateHandler } = useMutation({
    mutationFn: (updatePayload: animalPayload) =>
      zooApi
        .put<animalPayload, AxiosResponse<animalPayloadWithId>>(
          "/animal/" + _currentAnimalId,
          updatePayload
        )
        .then((d) => d.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`get-all-animal`],
      });
      _closeModel();
    },
  });

  return {
    animalUpdateHandler,
  };
}
