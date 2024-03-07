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
  employeeSchemas,
  employeePayload as employee,
  roles,
  schedules,
} from "@utils/type";
import { useMutation } from "@tanstack/react-query";
import employeeCreate from "@http/employee/newEmployee";
import employeeUpdate from "@http/employee/updateEmployee";
import employeeDelete from "@http/employee/delEmployee";
import { allDataMutateSuccess } from "@features/query";

interface EmployeeFormsProps {
  initialValue?: employee;
  id?: string;
  isCreate: boolean;
}

export default function EmployeeForms({
  initialValue = {
    name: "",
    email: "",
    phone: "",
    role: "Animal keeper",
    schedule: "Morning",
  },
  id = "",
  isCreate,
}: EmployeeFormsProps) {
  const { mutate: employeeCreateHandler } = useMutation({
    mutationFn: employeeCreate,
    ...allDataMutateSuccess("employee"),
  });
  const { mutate: employeeDeleteHandler } = useMutation({
    mutationFn: employeeDelete,
    ...allDataMutateSuccess("employee"),
  });
  const { mutate: employeeUpdateHandler } = useMutation({
    mutationFn: employeeUpdate,
    ...allDataMutateSuccess("employee"),
  });

  const handlerSubmit: SubmitHandler<employee> = (value) => {
    if (isCreate) {
      employeeCreateHandler(value);
    } else {
      employeeUpdateHandler({
        payload: value,
        id: id,
      });
    }
  };
  const deleteHandler = () => {
    employeeDeleteHandler(id);
  };
  return (
    <>
      <Formik<employee>
        initialValues={initialValue}
        validationSchema={toFormikValidationSchema(employeeSchemas)}
        onSubmit={handlerSubmit}
      >
        {(_props: FormikProps<employee>) => (
          <Form>
            <FormInput label="name" />
            <FormInput label="email" type="email" />
            <FormInput label="phone" />
            <FormSelect label="role" options={roles} />
            <FormSelect label="schedule" options={schedules} />
            <Button type="submit">
              {isCreate ? "Create employee" : `update ${initialValue.name}`}
            </Button>
            {!isCreate && <Button onClick={deleteHandler}></Button>}
          </Form>
        )}
      </Formik>
    </>
  );
}
