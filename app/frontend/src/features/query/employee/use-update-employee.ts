import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { zooApi } from "@features/api";
import { queryClient, GET_ALL_EMPLOYEE } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";

import { employeePayload, employeePayloadWithId } from "@features/entity";
import useEmployees from "@features/hooks/useEmployees";

export default function useUpdateEmployee() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const _currentEmployeeId = useEmployees((s) => s.currentEmployeeId);

  const { mutate: EmployeeUpdateHandler } = useMutation({
    mutationFn: (updatePayload: employeePayload) =>
      zooApi
        .put<employeePayload, AxiosResponse<employeePayloadWithId>>(
          "/employee/" + _currentEmployeeId,
          updatePayload
        )
        .then((d) => d.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ALL_EMPLOYEE],
      });
      _closeModel();
    },
  });

  return {
    EmployeeUpdateHandler,
  };
}
