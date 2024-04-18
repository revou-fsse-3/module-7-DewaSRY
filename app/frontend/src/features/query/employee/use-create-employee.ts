import { useMutation } from "@tanstack/react-query";
import { zooApi } from "@features/api";
import { queryClient, GET_ALL_EMPLOYEE } from "@features/query";
import useMainModeState from "@hooks/useMainModeState";
import { AxiosResponse } from "axios";

import { employeePayload, employeePayloadWithId } from "@features/entity";

export default function useCreateEmployee() {
  const _closeModel = useMainModeState((s) => s.closeModel);
  const { mutate: EmployeeCreateHandler } = useMutation({
    mutationFn: (EmployeePayload: employeePayload) =>
      zooApi
        .post<employeePayload, AxiosResponse<employeePayloadWithId>>(
          "/employee",
          EmployeePayload
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
    EmployeeCreateHandler,
  };
}
