import { AxiosResponse } from "axios";
import { zooApi } from "@features/api";
import { employeePayloadWithId as employeeRes } from "@/features/entity";
import { useQuery } from "@tanstack/react-query";
import { GET_ALL_EMPLOYEE } from "@features/query";

import useEmployees from "@/features/hooks/useEmployees";

export default function useGetAllAnimals() {
  const _setEmployee = useEmployees((s) => s.setEmployee);
  const { data, isLoading, isSuccess } = useQuery<employeeRes[], Error>({
    queryFn: () =>
      zooApi
        .get<void, AxiosResponse<employeeRes[]>>("/employee")
        .then((d) => d.data),
    queryKey: [GET_ALL_EMPLOYEE],
  });
  if (!isLoading && isSuccess && data.length > 0) {
    _setEmployee(data);
  }
  return {
    employees: data,
    isLoading,
    isSuccess,
  };
}
