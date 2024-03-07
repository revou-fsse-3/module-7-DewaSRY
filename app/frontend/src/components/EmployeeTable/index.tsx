// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { employeePayloadWithId } from "@utils/type";
import getAllEmployees from "@http/employee/allEmployees";
import { useQuery } from "@tanstack/react-query";
import columns from "./Columns";
import Skeletons from "./Skeletons";
// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}

export default function EmployeeTable() {
  const { data, isLoading } = useQuery<employeePayloadWithId[], Error>({
    queryFn: () => getAllEmployees(),
    queryKey: ["get-all-employee"],
  });
  return (
    <div>
      {isLoading && <Skeletons />}
      {data && data.length > 0 && (
        <Table<employeePayloadWithId> columns={columns} data={data} />
      )}
    </div>
  );
}
