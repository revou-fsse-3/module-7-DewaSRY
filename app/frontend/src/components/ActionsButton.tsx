import { ComponentProps, PropsWithChildren } from "react";
import { Button } from "@mantine/core";
import useAnimals from "@hooks/useAnimals";
import useEmployee from "@hooks/useEmployees";
import useMainTabState from "@hooks/useMainTabState";
interface ActionsFormProps extends ComponentProps<"div">, PropsWithChildren {
  id: string;
}
export default function ActionsButton({ id, children }: ActionsFormProps) {
  const setCurrentAnimal = useAnimals((s) => s.setCurrentAnimal);
  const setCurrentEmployee = useEmployee((s) => s.setCurrentEmployee);
  const currentTab = useMainTabState((s) => s.currentTab);
  const handlerClick = () => {
    if (currentTab == "animal") {
      setCurrentAnimal(id);
    } else {
      setCurrentEmployee(id);
    }
  };
  return <Button onClick={handlerClick}>{children}</Button>;
}
