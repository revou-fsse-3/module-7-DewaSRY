import { PropsWithChildren, ComponentProps } from "react";
import { Button, Tooltip } from "@mantine/core";

import useAuthenticationState from "@/features/hooks/useAuthenticationState";

interface ActionsFormProps extends PropsWithChildren, ComponentProps<"span"> {
  handleClick: () => void;
}

export default function ProtectionButton({
  children,
  handleClick,
  ...restProps
}: ActionsFormProps) {
  const isAuth = useAuthenticationState((s) => s.isAuthentications);

  return (
    <span {...restProps}>
      {isAuth ? (
        <Button variant="filled" color="cyan" size="xs" onClick={handleClick}>
          {children}
        </Button>
      ) : (
        <Tooltip label="please Authentications your's self first">
          <Button size="xs" disabled>
            {children}
          </Button>
        </Tooltip>
      )}
    </span>
  );
}
