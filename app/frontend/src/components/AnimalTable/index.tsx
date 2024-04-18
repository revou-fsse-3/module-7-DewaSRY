// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { animalPayloadWithId as AnimalRes } from "@/features/entity";
import columns from "./Columns";
import Skeletons from "@common/Skeletons";
import NotFound from "@/common/NotFound";

import { useGetAllAnimals } from "@query/animal";
// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}
export default function AnimalTable() {
  const { animals, isLoading } = useGetAllAnimals();

  return (
    <>
      {isLoading ? (
        <Skeletons />
      ) : animals && animals.length > 0 ? (
        <Table<AnimalRes> columns={columns} data={animals} />
      ) : (
        <NotFound title="Employee table's is empty" />
      )}
    </>
  );
}
