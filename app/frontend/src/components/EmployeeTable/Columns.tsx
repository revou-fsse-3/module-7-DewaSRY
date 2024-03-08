import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { employeePayloadWithId } from "@utils/type";
import ActionsButton from "@components/ActionsButton";
import { Text } from "@mantine/core";

const columnHelper = createColumnHelper<employeePayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    header: () => <Text size="md">NAME</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("role", {
    header: () => <Text size="md">ROLE</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("schedule", {
    header: () => <Text size="md">SCHEDULE</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("email", {
    header: () => <Text size="md">EMAIL</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("phone", {
    header: () => <Text size="md">PHONE</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("employeeId", {
    header: () => <Text size="md">ACTION</Text>,
    cell: (props) => (
      <ActionsButton id={props.getValue()}>actions</ActionsButton>
    ),
  }),
] as unknown as ColumnDef<employeePayloadWithId, unknown>[];

export default columns;
