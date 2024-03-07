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
} from "@common/Forms";
import { authPayload, authSchemas } from "@utils/type";

// interface CreateAnimalProps extends ComponentProps<"div">, PropsWithChildren {}

export default function RegisterUser() {
  const handlerSubmit: SubmitHandler<authPayload> = (value) => {
    alert(JSON.stringify(value));
  };
  return (
    <>
      <Formik<authPayload>
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={toFormikValidationSchema(authSchemas)}
        onSubmit={handlerSubmit}
      >
        {(_props: FormikProps<authPayload>) => (
          <Form>
            <FormInput label="username" />
            <FormInput label="password" />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
