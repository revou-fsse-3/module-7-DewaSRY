import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { employeePayloadWithId } from "@utils/type";

const columnHelper = createColumnHelper<employeePayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("email", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("phone", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
] as unknown as ColumnDef<employeePayloadWithId, unknown>[];

export default columns;
