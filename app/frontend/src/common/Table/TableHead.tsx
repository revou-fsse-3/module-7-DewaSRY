import { Fragment, ComponentProps } from "react";
import { flexRender, Table } from "@tanstack/react-table";
import { Table as MTable } from "@mantine/core";
interface TableHeadProps<T> extends ComponentProps<"thead"> {
  table: Table<T>;
}

function TableHead<T>({ table }: TableHeadProps<T>) {
  return (
    <MTable.Thead>
      {table.getHeaderGroups().map((headerGroup) => (
        <MTable.Tr key={headerGroup.id}>
          {headerGroup.headers.map((header, id) => {
            return (
              <MTable.Th key={header.id + id} colSpan={header.colSpan}>
                {header.isPlaceholder ? null : (
                  <Fragment>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Fragment>
                )}
              </MTable.Th>
            );
          })}
        </MTable.Tr>
      ))}
    </MTable.Thead>
  );
}

export default TableHead;
