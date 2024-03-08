import { Drawer, Text } from "@mantine/core";
import AuthTab from "@components/AuthAside/AuthTab";
import useAuthAsideState from "@hooks/useAuthAsideState";

export default function AuthAside() {
  const { authAsideOpen, closeAuthAside } = useAuthAsideState();
  return (
    <Drawer opened={authAsideOpen} onClose={closeAuthAside}>
      <Text className="mb-10" tt="capitalize" size="xl">
        Authentication
      </Text>
      <AuthTab />
    </Drawer>
  );
}
