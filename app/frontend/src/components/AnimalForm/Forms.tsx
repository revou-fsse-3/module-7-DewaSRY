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

  const handlerSubmit: SubmitHandler<animal> = (value) => {
    if (isCreate) {
      animalCreateHandler(value);
    } else {
      animalUpdateHandler({
        payload: value,
        id: id,
      });
    }
  };
  const deleteHandler = () => {
    animalDeleteHandler(id);
  };
  return (
    <Formik<animal>
      initialValues={initialValue}
      validationSchema={toFormikValidationSchema(animalSchemas)}
      onSubmit={handlerSubmit}
    >
      {(_props: FormikProps<animal>) => (
        <Form className="relative">
          <FormInput label="name" />
          <FormInput label="age" type="number" />
          <FormSelect label="species" options={species} />
          <FormSelect label="gender" options={genders} />
          <Button type="submit" variant="outline" color="green">
            {isCreate
              ? "Create new animal record"
              : `Edit '${initialValue.name}' data`}
          </Button>
          {!isCreate && (
            <Button
              className="absolute bottom-0 right-0"
              onClick={deleteHandler}
              variant="outline"
              color="red"
            >
              Remove '{initialValue.name}' on Zoo list
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
}
