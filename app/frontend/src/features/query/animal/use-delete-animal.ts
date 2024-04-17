import { useMutation } from "@tanstack/react-query";
import animalDelete from "@/features/http/animal/animal-del";
import { queryClient } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
export function useDeleteAnimal() {
  const _closeModel = useMainModeState((s) => s.closeModel);

  const { mutate: animalDeleteHandler } = useMutation({
    mutationFn: animalDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`get-all-${name}`],
      });
      _closeModel();
    },
  });

  return {
    animalDeleteHandler,
  };
}
