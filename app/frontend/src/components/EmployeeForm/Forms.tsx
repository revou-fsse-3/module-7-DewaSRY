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
} from "@/features/entity";
import { useMutation } from "@tanstack/react-query";
import employeeCreate from "@/features/http/employee/employee-create";
import employeeUpdate from "@/features/http/employee/employee-update";
import employeeDelete from "@/features/http/employee/employee-del";
import useMainModeState from "@hooks/useMainModeState";

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
  const closeModel = useMainModeState((s) => s.closeModel);
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

  const handlerSubmit: SubmitHandler<employee> = (value, action) => {
    if (isCreate) {
      employeeCreateHandler(value);
    } else {
      employeeUpdateHandler({
        payload: {
          email: value.email,
          phone: value.phone,
          name: value.name,
          schedule: value.schedule,
          role: value.role,
        },
        id: id,
      });
    }
    action.resetForm();
    closeModel();
  };
  const deleteHandler = () => {
    employeeDeleteHandler(id);
    closeModel();
  };
  return (
    <>
      <Formik<employee>
        initialValues={initialValue}
        validationSchema={toFormikValidationSchema(employeeSchemas)}
        onSubmit={handlerSubmit}
      >
        {(_props: FormikProps<employee>) => (
          <Form className="">
            <FormInput label="name" />
            <FormInput label="email" type="email" />
            <FormInput label="phone" />
            <FormSelect label="schedule" options={schedules} />
            <FormSelect label="role" options={roles} />
            <div className="flex justify-between mt-10 ">
              <Button type="submit" variant="outline" color="green">
                {isCreate
                  ? "Register new Employee "
                  : `Edit '${initialValue.name}' data`}
              </Button>
              {!isCreate && (
                <Button onClick={deleteHandler} variant="outline" color="red">
                  Remove '{initialValue.name}' from the list
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
