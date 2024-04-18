// import { ComponentProps, PropsWithChildren } from "react";
import { AxiosResponse } from "axios";
import { animalPayloadWithId as AnimalRes } from "@/features/entity";
import { zooApi } from "@features/api";
import { useQuery } from "@tanstack/react-query";
import useAnimals from "@/features/hooks/useAnimals";

export default function useGetAllAnimals() {
  const setAnimals = useAnimals((s) => s.setAnimals);
  const { data, isLoading, isSuccess } = useQuery<AnimalRes[], Error>({
    queryFn: () =>
      zooApi
        .get<void, AxiosResponse<AnimalRes[]>>("/animal")
        .then((d) => d.data),
    queryKey: ["get-all-animal"],
  });
  if (!isLoading && isSuccess && data.length > 0) {
    setAnimals(data);
  }

  return {
    animals: data,
    isLoading,
    isSuccess,
  };
}
