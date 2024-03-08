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
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";

// interface CreateAnimalProps extends ComponentProps<"div">, PropsWithChildren {}

export default function RegisterUser() {
  const closeModel = useAuthAsideState((s) => s.closeAuthAside);
  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate: handleLogin, isSuccess } = useMutation({
    mutationFn: userLogin,
  });

  const handlerSubmit: SubmitHandler<loginPayload> = (value) => {
    handleLogin({
      password: value.password.trim(),
      username: value.username.trim(),
    });
    closeModel();
  };
  if (isSuccess) {
    setIsAuthentications(true);
  }
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
