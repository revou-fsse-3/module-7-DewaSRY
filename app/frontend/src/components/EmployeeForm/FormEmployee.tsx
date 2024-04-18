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
  employeeSchemas,
  employeePayload as Employee,
  roles,
  schedules,
} from "@/features/entity";

interface EmployeeFormsProps extends ComponentProps<"form">, PropsWithChildren {
  initialValue?: Employee;
  useSubmit: (value: Employee) => void;
}

export default function EmployeeForms({
  initialValue = {
    name: "",
    email: "",
    phone: "",
    role: "Animal keeper",
    schedule: "Morning",
  },
  useSubmit,
  children,
}: EmployeeFormsProps) {
  const handlerSubmit: SubmitHandler<Employee> = (value, action) => {
    useSubmit(value);
    action.resetForm();
  };
  return (
    <Formik<Employee>
      initialValues={initialValue}
      validationSchema={toFormikValidationSchema(employeeSchemas)}
      onSubmit={handlerSubmit}
    >
      {(_props: FormikProps<Employee>) => (
        <Form className="">
          <FormInput label="name" />
          <FormInput label="email" type="email" />
          <FormInput label="phone" />
          <FormSelect label="schedule" options={schedules} />
          <FormSelect label="role" options={roles} />
          {children}
        </Form>
      )}
    </Formik>
  );
}
