import { Drawer, Text } from "@mantine/core";
import AuthTab from "@components/AuthAside/AuthTab";
import useAuthAsideState from "@hooks/useAuthAsideState";

export default function AuthAside() {
  const { authAsideOpen, closeAuthAside } = useAuthAsideState();
  return (
    <Drawer
      className="relative"
      opened={authAsideOpen}
      onClose={closeAuthAside}
    >
      <Text className="mb-10 mx-4" tt="capitalize" size="xl">
        Authentication
      </Text>
      <AuthTab />
      <div className="absolute w-11/12 bottom-0">
        <hr className="mt-4 p-4 border-gray-600 " />
        <hr className="mt-2 p-4 border-gray-600 " />
        <hr className="mt-2 p-4 border-gray-600 " />
      </div>
    </Drawer>
  );
}
