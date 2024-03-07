import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { animalPayloadWithId } from "@utils/type";

const columnHelper = createColumnHelper<animalPayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("species", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("gender", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
] as unknown as ColumnDef<animalPayloadWithId, unknown>[];

export default columns;
