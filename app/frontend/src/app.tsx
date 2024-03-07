import { FC, ComponentProps, PropsWithChildren } from "react";
import { AppShell } from "@mantine/core";
import AuthAside from "@components/AuthAside";
import MainTabs from "@components/MainTabs";
// import EmployeeTable from "@components/EmployeeTable";
// import AnimalTable from "@components/AnimalTable";

interface HomeProps extends ComponentProps<"div"> {}
type HomeComponents = FC<HomeProps> & PropsWithChildren;
const Home: HomeComponents = () => {
  return (
    <AppShell
      transitionDuration={700}
      padding="xl"
      header={{ height: 60, collapsed: false }}
    >
      <AppShell.Header>
        <AuthAside />
      </AppShell.Header>

      <AppShell.Main>
        <div className="xl:w-[100rem] xl:m-auto">
          <MainTabs />
          {/* <EmployeeTable /> */}
          {/* <AnimalTable /> */}
        </div>
      </AppShell.Main>
      <AppShell.Section></AppShell.Section>
    </AppShell>
  );
};

export default Home;
