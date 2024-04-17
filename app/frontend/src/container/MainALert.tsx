import { Dialog, Text, Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import useAlertState from "@hooks/useAlertState";

export default function MainALert() {
  const icon = <IconInfoCircle />;
  const { isOpen, massage, setClose, title } = useAlertState();

  return (
    <Dialog
      opened={isOpen}
      withCloseButton
      onClose={setClose}
      size="lg"
      radius="md"
    >
      <Text size="sm" mb="xs" fw={500}>
        There are some issue
      </Text>

      <Alert variant="light" color="gray" title={title} icon={icon}>
        {massage}
      </Alert>
    </Dialog>
  );
}
