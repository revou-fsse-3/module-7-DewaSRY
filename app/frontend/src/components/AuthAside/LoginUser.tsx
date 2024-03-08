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
import { loginPayload, loginSchemas } from "@utils/type";
import { useMutation } from "@tanstack/react-query";
import userLogin from "@http/auth/login";
// interface CreateAnimalProps extends ComponentProps<"div">, PropsWithChildren {}

export default function RegisterUser() {
  const { mutate: handleLogin } = useMutation({
    mutationFn: userLogin,
  });

  const handlerSubmit: SubmitHandler<loginPayload> = (value) => {
    handleLogin(value);
  };
  return (
    <>
      <Formik<loginPayload>
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={toFormikValidationSchema(loginSchemas)}
        onSubmit={handlerSubmit}
      >
        {(_props: FormikProps<loginPayload>) => (
          <Form>
            <FormInput label="username" />
            <FormInput label="password" type="password" />
            <Button type="submit" fullWidth variant="outline">
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
