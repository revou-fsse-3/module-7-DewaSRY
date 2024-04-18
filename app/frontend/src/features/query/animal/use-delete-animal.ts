import { useMutation } from "@tanstack/react-query";
import { zooApi } from "@features/api";
import { queryClient } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
import useAnimals from "@features/hooks/useAnimals";

export default function useDeleteAnimal() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const _currentAnimalId = useAnimals((s) => s.currentAnimalId);
  const { mutate } = useMutation({
    mutationFn: async () => {
      zooApi.delete("/animal/" + _currentAnimalId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`get-all-animal`],
      });
      _closeModel();
    },
  });

  function animalDeleteHandler() {
    mutate();
  }
  return {
    animalDeleteHandler,
  };
}
