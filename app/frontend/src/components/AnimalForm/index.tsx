// import { ComponentProps, PropsWithChildren } from "react";
// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import useAnimals from "@/features/hooks/useAnimals";
import FormHeader from "@common/FormHeader";
import useMainModeState from "@hooks/useMainModeState";
import { Button } from "@mantine/core";
import FormAnimal from "./FormAnimal";
import {
  useCreateAnimal,
  useDeleteAnimal,
  useUpdateAnimal,
} from "@query/animal";

export default function AnimalForms() {
  const { currentAnimalId: id, currentAnimal } = useAnimals();
  const closeMainModel = useMainModeState((s) => s.closeModel);
  const { animalCreateHandler } = useCreateAnimal();
  const { animalUpdateHandler } = useUpdateAnimal();
  const { animalDeleteHandler } = useDeleteAnimal();

  return (
    <>
      <FormHeader
        handelClick={closeMainModel}
        title={id.length == 0 ? "Create Animal" : "Update Animal"}
      />
      <FormAnimal
        useSubmit={(value) => {
          id.length === 0
            ? animalCreateHandler(value)
            : animalUpdateHandler(value);
        }}
      >
        <div className="flex justify-between mt-10 ">
          <Button type="submit" variant="outline" color="green">
            {id.length == 0
              ? "Create new animal record"
              : `Edit '${currentAnimal.name}' data`}
          </Button>
          {id.length && (
            <Button onClick={animalDeleteHandler} variant="outline" color="red">
              Remove '{currentAnimal.name}' on Zoo list
            </Button>
          )}
        </div>
      </FormAnimal>
    </>
  );
}
