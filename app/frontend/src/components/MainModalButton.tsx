import { ComponentProps } from "react";
import ProtectionButton from "./ProtectionButton";
import useMainModeState from "@hooks/useMainModeState";
import useMainTabState from "@hooks/useMainTabState";

export default function MainModalButton({
  ...restProps
}: ComponentProps<"span">) {
  const handleMainModel = useMainModeState((s) => s.openModel);
  const currentTab = useMainTabState((s) => s.currentTab);
  return (
    <ProtectionButton {...restProps} handleClick={handleMainModel}>
      Create {currentTab}
    </ProtectionButton>
  );
}
