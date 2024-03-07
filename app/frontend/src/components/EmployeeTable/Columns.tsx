import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { employeePayloadWithId } from "@utils/type";
import ActionsButton from "@components/ActionsButton";
const columnHelper = createColumnHelper<employeePayloadWithId>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("role", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("email", {
    header: () => <span>Visits</span>,
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phone", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("employeeId", {
    header: "Status",
    cell: (props) => (
      <ActionsButton id={props.getValue()}>actions</ActionsButton>
    ),
  }),
] as unknown as ColumnDef<employeePayloadWithId, unknown>[];

export default columns;
