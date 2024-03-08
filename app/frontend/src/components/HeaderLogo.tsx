// import { ComponentProps, PropsWithChildren } from "react";
import { Button, Center, Text, Title, Tooltip } from "@mantine/core";
import useAuthAsideState from "@hooks/useAuthAsideState";
import useAuthenticationState from "@/features/hooks/useAuthenticationState";
// interface HeaderLogoProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeaderLogo() {
  const handelOpenAsideAuth = useAuthAsideState((s) => s.openAuthAside);
  const currentAuthentication = useAuthenticationState(
    (s) => s.isAuthentications
  );
  return (
    <Center h={80} bg="gray" className="gap-2">
      <Tooltip label="Authentications Tab's">
        <Button size="md" variant="default" onClick={handelOpenAsideAuth}>
          {currentAuthentication ? "Welcome's To " : "Authentications"}
        </Button>
      </Tooltip>
      <div>
        <Title order={1} className="inline-block text-yellow-400">
          REVOU'S
        </Title>
        <Text size="xl" fw={700} td="underline" className="ml-1 inline-block">
          ZOO Table
        </Text>
      </div>
    </Center>
  );
}
