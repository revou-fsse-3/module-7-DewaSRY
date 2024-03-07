// import { ComponentProps, PropsWithChildren } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import RegisterUser from "@components/AuthAside/RegisterUser";
// interface AuthAsideProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AuthAside() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <RegisterUser />
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
