import { useMutation } from "@tanstack/react-query";
import { zooApi } from "@features/api";
import { queryClient, GET_ALL_EMPLOYEE } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
import useEmployees from "@features/hooks/useEmployees";

export default function useDeleteEmployee() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const _currentEmployeeId = useEmployees((s) => s.currentEmployeeId);
  const { mutate } = useMutation({
    mutationFn: async () => {
      zooApi.delete("/employee/" + _currentEmployeeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ALL_EMPLOYEE],
      });
      _closeModel();
    },
  });

  function EmployeeDeleteHandler() {
    mutate();
  }
  return {
    EmployeeDeleteHandler,
  };
}
