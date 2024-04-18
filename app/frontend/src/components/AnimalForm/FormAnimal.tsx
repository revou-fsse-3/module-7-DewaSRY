/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, PropsWithChildren } from "react";
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
} from "@/features/entity";

interface AnimalFormsProps extends ComponentProps<"form">, PropsWithChildren {
  initialValue?: animal;
  useSubmit: (value: animal) => void;
}
export default function AnimalForms({
  initialValue = {
    name: "",
    age: 0,
    gender: "Male",
    species: "Mammals",
  },
  useSubmit,
  children,
}: AnimalFormsProps) {
  const handlerSubmit: SubmitHandler<animal> = (value, action) => {
    useSubmit(value);
    action.resetForm();
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
          {children}
        </Form>
      )}
    </Formik>
  );
}
