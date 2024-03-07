// import { ComponentProps, PropsWithChildren } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import EmployeeForm from "@components/EmployeeForm";
import AnimalForm from "@components/AnimalForm";
import useMainTabState from "@/features/hooks/useMainTabState";
// interface MainModalProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MainModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const currentTab = useMainTabState((s) => s.currentTab);
  return (
    <>
      <Modal
        size="calc(100vw - 3rem)"
        opened={opened}
        onClose={close}
        withCloseButton={false}
      >
        {currentTab == "animal" ? <AnimalForm /> : <EmployeeForm />}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
