// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { employeePayloadWithId } from "@utils/type";
import getAllEmployees from "@http/employee/allEmployees";
import { useQuery } from "@tanstack/react-query";
import useEmployees from "@hooks/useEmployes";
import columns from "./Columns";
import Skeletons from "./Skeletons";
// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}

export default function EmployeeTable() {
  const setEmployee = useEmployees((s) => s.setEmployee);
  const { data, isLoading, isSuccess } = useQuery<
    employeePayloadWithId[],
    Error
  >({
    queryFn: () => getAllEmployees(),
    queryKey: ["get-all-employee"],
  });
  if (!isLoading && isSuccess && data.length > 0) {
    setEmployee(data);
  }
  return (
    <div>
      {isLoading && <Skeletons />}
      {data && data.length > 0 && (
        <Table<employeePayloadWithId> columns={columns} data={data} />
      )}
    </div>
  );
}
