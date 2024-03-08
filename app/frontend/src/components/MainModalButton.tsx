import { ComponentProps } from "react";
import ProtectionButton from "./ProtectionButton";
import useMainModeState from "@hooks/useMainModeState";
import useMainTabState from "@hooks/useMainTabState";

import useAnimals from "@hooks/useAnimals";
import useEmployees from "@hooks/useEmployees";
export default function MainModalButton({
  ...restProps
}: ComponentProps<"span">) {
  const handleMainModel = useMainModeState((s) => s.openModel);
  const resetCurrentAnimal = useAnimals((s) => s.resetCurrentAnimal);
  const resetCurrentEmployee = useEmployees((s) => s.resetCurrentEmployee);
  const currentTab = useMainTabState((s) => s.currentTab);

  const handleClick = () => {
    resetCurrentAnimal();
    resetCurrentEmployee();
    handleMainModel();
  };
  return (
    <ProtectionButton {...restProps} handleClick={handleClick}>
      Create {currentTab}
    </ProtectionButton>
  );
}
