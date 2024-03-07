// import { ComponentProps, PropsWithChildren } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import AuthTab from "@components/AuthAside/AuthTab";
// interface AuthAsideProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AuthAside() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        <AuthTab />
      </Drawer>
      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
