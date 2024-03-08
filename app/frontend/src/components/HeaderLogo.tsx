// import { ComponentProps, PropsWithChildren } from "react";
import { Button, Center, Text } from "@mantine/core";
import useAuthAsideState from "@hooks/useAuthAsideState";

// interface HeaderLogoProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeaderLogo() {
  const handelOpenAsideAuth = useAuthAsideState((s) => s.openAuthAside);
  return (
    <Center h={80} bg="gray" className="gap-4">
      <Button
        size="md"
        variant="outline"
        color="gray"
        onClick={handelOpenAsideAuth}
      >
        Authentications
      </Button>
      <Text size="xl">REVOU ZOO Table</Text>
    </Center>
  );
}
