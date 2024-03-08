import { FC, ComponentProps, PropsWithChildren } from "react";
import { AppShell } from "@mantine/core";
import AuthAside from "@components/AuthAside";
import MainTabs from "@components/MainTabs";
import MainModal from "@components/MainModal";
import HeaderLogo from "@components/HeaderLogo";
import MainFooter from "@components/MainFooter";
interface HomeProps extends ComponentProps<"div"> {}
type HomeComponents = FC<HomeProps> & PropsWithChildren;
const Home: HomeComponents = () => {
  return (
    <AppShell
      transitionDuration={700}
      padding="xl"
      header={{ height: 80, collapsed: false }}
    >
      <AppShell.Header>
        <HeaderLogo />
      </AppShell.Header>

      <AppShell.Main>
        <div className="xl:w-[100rem] xl:m-auto">
          <MainTabs />
        </div>
      </AppShell.Main>
      <AppShell.Section>
        <MainModal />
        <AuthAside />
      </AppShell.Section>
      <AppShell.Footer className="p2-8 pt-2 mx-2  ">
        <MainFooter />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Home;
