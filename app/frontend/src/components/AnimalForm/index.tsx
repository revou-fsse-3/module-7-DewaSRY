// import { ComponentProps, PropsWithChildren } from "react";
// interface indexProps extends ComponentProps<"div">, PropsWithChildren {}
import Forms from "@components/AnimalForm/Forms";
import useAnimals from "@/features/hooks/useAnimals";
import FormHeader from "@common/FormHeader";
import useMainModeState from "@hooks/useMainModeState";

export default function AnimalForms() {
  const { currentAnimalId: id, currentAnimal } = useAnimals();
  const closeMainModel = useMainModeState((s) => s.closeModel);

  return (
    <div>
      <FormHeader
        handelClick={closeMainModel}
        title={id.length == 0 ? "Create Animal" : "Update Animal"}
      />
      {id.length == 0 ? (
        <Forms isCreate />
      ) : (
        <Forms isCreate={false} initialValue={currentAnimal} id={id} />
      )}
    </div>
  );
}
