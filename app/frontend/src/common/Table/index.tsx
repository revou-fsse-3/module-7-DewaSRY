import { useState } from "react";
import { ComponentProps } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { Table as MTable } from "@mantine/core";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

interface TableProps<T> extends ComponentProps<"table"> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
}
function Table<T>({ data, columns }: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable<T>({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });
  return (
    <MTable highlightOnHover horizontalSpacing="xl" verticalSpacing="sm">
      <TableHead<T> table={table} />
      <TableBody<T> table={table} />
    </MTable>
  );
}
export default Table;
