import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconMessageCircle } from "@tabler/icons-react";
import EmployeeTable from "@components/EmployeeTable";
import AnimalTable from "@components/AnimalTable";
// import { ComponentProps, PropsWithChildren } from "react";

// interface MainTabsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MainTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="animal">
      <Tabs.List>
        <Tabs.Tab value="animal" leftSection={<IconPhoto style={iconStyle} />}>
          Animals Table
        </Tabs.Tab>
        <Tabs.Tab
          value="employee"
          leftSection={<IconMessageCircle style={iconStyle} />}
        >
          Employee Table
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="animal">
        <AnimalTable />
      </Tabs.Panel>
      <Tabs.Panel value="employee">
        <EmployeeTable />
      </Tabs.Panel>
    </Tabs>
  );
}
