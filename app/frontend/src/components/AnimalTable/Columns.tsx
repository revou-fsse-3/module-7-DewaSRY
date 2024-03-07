import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { animalPayloadWithId } from "@utils/type";
import ActionsButton from "@components/ActionsButton";

const columnHelper = createColumnHelper<animalPayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    header: () => <span>name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("species", {
    header: () => <span>species</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("gender", {
    header: () => <span>gender</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => <span>Age</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("animalId", {
    header: "action",
    cell: (props) => (
      <ActionsButton id={props.getValue()}>action</ActionsButton>
    ),
  }),
] as unknown as ColumnDef<animalPayloadWithId, unknown>[];

export default columns;
