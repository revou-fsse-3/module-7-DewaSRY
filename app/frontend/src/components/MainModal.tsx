import { Modal } from "@mantine/core";
import EmployeeForm from "@components/EmployeeForm";
import AnimalForm from "@components/AnimalForm";
import useMainTabState from "@hooks/useMainTabState";
import useMainModeState from "@hooks/useMainModeState";

export default function MainModal() {
  const currentTab = useMainTabState((s) => s.currentTab);
  const { modelOpen, closeModel } = useMainModeState();
  return (
    <Modal
      size="calc(100vw - 3rem)"
      opened={modelOpen}
      onClose={closeModel}
      withCloseButton={false}
    >
      {currentTab == "animal" ? <AnimalForm /> : <EmployeeForm />}
    </Modal>
  );
}
