import { FC, ComponentProps, PropsWithChildren } from "react";
import { AppShell } from "@mantine/core";
import MainTabs from "@components/MainTabs";
import HeaderLogo from "@components/HeaderLogo";
import Footer from "@common/Footer";

import MainFormModel from "@container/MainFormModel";
import MainALert from "@container/MainALert";
import AuthAside from "@container/AuthAside";

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

      <MainFormModel />
      <AuthAside />
      <MainALert />

      <Footer />
    </AppShell>
  );
};

export default Home;
