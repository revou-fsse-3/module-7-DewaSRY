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
import useUserLogin from "@/features/query/useLoginQuery";
export default function RegisterUser() {
  const { handlerUserLogin } = useUserLogin();
  const handlerSubmit: SubmitHandler<loginPayload> = (value) => {
    handlerUserLogin({
      password: value.password.trim(),
      username: value.username.trim(),
    });
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
