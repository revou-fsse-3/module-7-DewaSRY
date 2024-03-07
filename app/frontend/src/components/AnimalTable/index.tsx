// import { ComponentProps, PropsWithChildren } from "react";
import Table from "@common/Table";
import { animalPayloadWithId } from "@utils/type";
import getAllAnimals from "@http/animal/allAnimals";
import { useQuery } from "@tanstack/react-query";
import useAnimals from "@hooks/useAnimals";
import columns from "./Columns";
import Skeletons from "./Skeletons";

// interface EmployeeTableProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AnimalTable() {
  const setAnimals = useAnimals((s) => s.setAnimals);
  const { data, isLoading, isSuccess } = useQuery<animalPayloadWithId[], Error>(
    {
      queryFn: () => getAllAnimals(),
      queryKey: ["get-all-animal"],
    }
  );
  if (!isLoading && isSuccess && data.length > 0) {
    setAnimals(data);
  }
  return (
    <div>
      {isLoading && <Skeletons />}
      {data && !isLoading && (
        <Table<animalPayloadWithId> columns={columns} data={data} />
      )}
    </div>
  );
}
