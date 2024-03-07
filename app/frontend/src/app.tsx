import { FC, ComponentProps, PropsWithChildren } from "react";
import { AppShell } from "@mantine/core";
import AuthAside from "@components/AuthAside";
import MainTabs from "@components/MainTabs";
import MainModal from "./components/MainModal";
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
          <MainModal />
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
