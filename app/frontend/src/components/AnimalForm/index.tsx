// import { ComponentProps, PropsWithChildren } from "react";

// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import Forms from "@components/AnimalForm/Forms";
import useAnimals from "@/features/hooks/useAnimals";
export default function AnimalForms() {
  const { currentAnimalId: id, currentAnimal } = useAnimals();
  return (
    <>
      {id.length == 0 ? (
        <Forms isCreate />
      ) : (
        <Forms isCreate={false} initialValue={currentAnimal} id={id} />
      )}
    </>
  );
}
