import { ComponentProps, PropsWithChildren } from "react";
import ProtectionButton from "@components/ProtectionButton";
import useAnimals from "@hooks/useAnimals";
import useEmployee from "@hooks/useEmployees";
import useMainTabState from "@hooks/useMainTabState";
import useMainModeState from "@hooks/useMainModeState";
interface ActionsFormProps extends ComponentProps<"div">, PropsWithChildren {
  id: string;
}
export default function ActionsButton({ id, children }: ActionsFormProps) {
  const setCurrentAnimal = useAnimals((s) => s.setCurrentAnimal);
  const setCurrentEmployee = useEmployee((s) => s.setCurrentEmployee);
  const openMainModel = useMainModeState((s) => s.openModel);
  const currentTab = useMainTabState((s) => s.currentTab);
  const handlerClick = () => {
    if (currentTab == "animal") {
      setCurrentAnimal(id);
      console.log(id);
    } else {
      setCurrentEmployee(id);
    }
    openMainModel();
  };
  return (
    <ProtectionButton handleClick={handlerClick}>{children}</ProtectionButton>
  );
}
