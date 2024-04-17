import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { animalPayloadWithId } from "@/features/entity";
import ActionsButton from "@components/ActionsButton";
import { Text } from "@mantine/core";
const columnHelper = createColumnHelper<animalPayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    header: () => <Text size="md">NAME</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
  }),
  columnHelper.accessor("species", {
    header: () => <Text size="md">SPECIES</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("gender", {
    header: () => <Text size="md">GENDER</Text>,

    cell: (info) => <Text size="md">{info.renderValue()}</Text>,

    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => <Text size="md">AGE</Text>,
    cell: (info) => <Text size="md">{info.renderValue()}</Text>,

    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("animalId", {
    header: () => <Text size="md">ACTION</Text>,
    cell: (props) => {
      return <ActionsButton id={props.getValue()}>action</ActionsButton>;
    },
  }),
] as unknown as ColumnDef<animalPayloadWithId, unknown>[];

export default columns;
