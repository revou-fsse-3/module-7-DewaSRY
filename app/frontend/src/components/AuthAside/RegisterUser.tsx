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
import { useMutation } from "@tanstack/react-query";
import userRegister from "@http/auth/register";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@hooks/useAuthenticationState";

// interface CreateAnimalProps extends ComponentProps<"div">, PropsWithChildren {}

export default function RegisterUser() {
  const closeModel = useAuthAsideState((s) => s.closeAuthAside);

  const setIsAuthentications = useAuthenticationState(
    (s) => s.setIsAuthentications
  );
  const { mutate: handleRegister, isSuccess } = useMutation({
    mutationFn: userRegister,
  });

  const handlerSubmit: SubmitHandler<registerPayload> = (value) => {
    handleRegister({
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
