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
import { registerPayload, registerSchema } from "@utils/type";
import useUserRegister from "@query/useRegisterQuery";

export default function RegisterUser() {
  const { handlerUserRegister } = useUserRegister();

  const handlerSubmit: SubmitHandler<registerPayload> = (value) => {
    handlerUserRegister({
      password: value.password.trim(),
      username: value.username.trim(),
    });
  };

  return (
    <>
      <Formik<registerPayload>
        initialValues={{
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={toFormikValidationSchema(registerSchema)}
        onSubmit={handlerSubmit}
      >
        {(_props: FormikProps<registerPayload>) => (
          <Form>
            <FormInput label="username" />
            <FormInput label="password" type="password" />
            <FormInput label="confirmPassword" type="password" />
            <Button fullWidth variant="outline" type="submit" color="gray">
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
