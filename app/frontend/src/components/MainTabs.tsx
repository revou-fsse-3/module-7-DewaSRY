import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconMessageCircle } from "@tabler/icons-react";
import EmployeeTable from "@components/EmployeeTable";
import AnimalTable from "@components/AnimalTable";
import useMainTabState from "@/features/hooks/useMainTabState";
import MainModalButton from "@components/MainModalButton";
// import { ComponentProps, PropsWithChildren } from "react";

// interface MainTabsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MainTabs() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const setCurrentTab = useMainTabState((s) => s.setCurrentTab);

  return (
    <Tabs defaultValue="animal" className="relative ">
      <MainModalButton className="absolute top-0 right-0 inline-block z-10" />
      <Tabs.List>
        <Tabs.Tab
          onClick={setCurrentTab.bind(null, "animal")}
          value="animal"
          leftSection={<IconPhoto style={iconStyle} />}
        >
          Animals Table
        </Tabs.Tab>
        <Tabs.Tab
          onClick={setCurrentTab.bind(null, "employee")}
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
