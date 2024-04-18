// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { employeePayloadWithId } from "@/features/entity";
import columns from "./Columns";
import Skeletons from "@common/Skeletons";
import NotFound from "@common/NotFound";

import { useGetAllAnimals } from "@query/employee";
// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}

export default function EmployeeTable() {
  const { employees, isLoading } = useGetAllAnimals();

  return (
    <>
      {isLoading ? (
        <Skeletons />
      ) : employees && employees.length > 0 ? (
        <Table<employeePayloadWithId> columns={columns} data={employees} />
      ) : (
        <NotFound title="Employee table's is empty" />
      )}
    </>
  );
}
