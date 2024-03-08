/* eslint-disable @typescript-eslint/no-unused-vars */
// import { ComponentProps, PropsWithChildren } from "react";
import { Button } from "@mantine/core";
import {
  SubmitHandler,
  FormInput,
  Formik,
  FormikProps,
  Form,
  toFormikValidationSchema,
  FormSelect,
} from "@common/Forms";
import {
  animalSchemas,
  animalPayload as animal,
  species,
  genders,
} from "@utils/type";
import { useMutation } from "@tanstack/react-query";
import animalCreate from "@http/animal/newAnimal";
import animalUpdate from "@http/animal/updateAnimal";
import animalDelete from "@http/animal/delAnimal";
import useMainModeState from "@hooks/useMainModeState";

import { allDataMutateSuccess } from "@features/query";

interface AnimalFormsProps {
  initialValue?: animal;
  id?: string;
  isCreate: boolean;
}

export default function AnimalForms({
  initialValue = {
    name: "",
    age: 0,
    gender: "Male",
    species: "Mammals",
  },
  id = "",
  isCreate,
}: AnimalFormsProps) {
  const closeModel = useMainModeState((s) => s.closeModel);

  const { mutate: animalCreateHandler } = useMutation({
    mutationFn: animalCreate,
    ...allDataMutateSuccess("animal"),
  });
  const { mutate: animalDeleteHandler } = useMutation({
    mutationFn: animalDelete,
    ...allDataMutateSuccess("animal"),
  });
  const { mutate: animalUpdateHandler } = useMutation({
    mutationFn: animalUpdate,
    ...allDataMutateSuccess("animal"),
  });

  const handlerSubmit: SubmitHandler<animal> = (value, action) => {
    if (isCreate) {
      animalCreateHandler(value);
    } else {
      animalUpdateHandler({
        payload: {
          age: value.age,
          gender: value.gender,
          name: value.name,
          species: value.species,
        },
        id: id,
      });
    }
    action.resetForm();
    closeModel();
  };
  const deleteHandler = () => {
    animalDeleteHandler(id);
    closeModel();
  };
  return (
    <Formik<animal>
      initialValues={initialValue}
      validationSchema={toFormikValidationSchema(animalSchemas)}
      onSubmit={handlerSubmit}
    >
      {(_props: FormikProps<animal>) => (
        <Form className="">
          <FormInput label="name" />
          <FormInput label="age" type="number" />
          <FormSelect label="species" options={species} />
          <FormSelect label="gender" options={genders} />
          <div className="flex justify-between mt-10 ">
            <Button type="submit" variant="outline" color="green">
              {isCreate
                ? "Create new animal record"
                : `Edit '${initialValue.name}' data`}
            </Button>
            {!isCreate && (
              <Button
                className=""
                onClick={deleteHandler}
                variant="outline"
                color="red"
              >
                Remove '{initialValue.name}' on Zoo list
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
