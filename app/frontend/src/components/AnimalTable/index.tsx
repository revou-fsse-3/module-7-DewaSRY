// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { animalPayloadWithId } from "@utils/type";
import getAllAnimals from "@http/animal/allAnimals";
import { useQuery } from "@tanstack/react-query";
import columns from "./Columns";
import Skeletons from "./Skeletons";
// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AnimalTable() {
  const { data, isLoading } = useQuery<animalPayloadWithId[], Error>({
    queryFn: () => getAllAnimals(),
    queryKey: ["get-all-animal"],
  });
  return (
    <div>
      {isLoading && <Skeletons />}
      {data && !isLoading && (
        <Table<animalPayloadWithId> columns={columns} data={data} />
      )}
    </div>
  );
}
