import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconMessageCircle } from "@tabler/icons-react";
import RegisterUser from "@components/AuthAside/RegisterUser";
import LoginUser from "@components/AuthAside/LoginUser";
// import { ComponentProps, PropsWithChildren } from "react";

// interface MainTabsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AuthTab() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="login">
      <Tabs.List>
        <Tabs.Tab value="login" leftSection={<IconPhoto style={iconStyle} />}>
          Login hallo
        </Tabs.Tab>
        <Tabs.Tab
          value="register"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Register
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="register">
        <RegisterUser />
      </Tabs.Panel>
      <Tabs.Panel value="login">
        <LoginUser />
      </Tabs.Panel>
    </Tabs>
  );
}
