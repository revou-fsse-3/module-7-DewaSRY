import { useState } from "react";
import { ComponentProps } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

import { Table as MTable, Button } from "@mantine/core";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  // SortingState,
  useReactTable,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";

interface TableProps<T> extends ComponentProps<"table"> {
  data: T[];
  columns: ColumnDef<T, unknown>[];
}
function Table<T>({ data, columns }: TableProps<T>) {
  // const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const table = useReactTable<T>({
    data,
    columns,
    state: {
      // sorting,
      pagination,
    },
    // onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: false,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });
  return (
    <>
      <MTable highlightOnHover horizontalSpacing="xl" verticalSpacing="sm">
        <TableHead<T> table={table} />
        <TableBody<T> table={table} />
      </MTable>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <Button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <Button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
      </div>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
        {table.getRowCount().toLocaleString()} Rows
      </div>
    </>
  );
}
export default Table;
