import { ComponentProps } from "react";
import { flexRender, Table } from "@tanstack/react-table";
import { Table as MTable } from "@mantine/core";

interface TableBodyProps<T> extends ComponentProps<"tbody"> {
  table: Table<T>;
}

function TableBody<T>({ table }: TableBodyProps<T>) {
  const TABLE_ROWS = table.getRowModel().rows;
  return (
    <MTable.Tbody>
      {TABLE_ROWS.length ? (
        TABLE_ROWS.map((row, i) => (
          <MTable.Tr
            key={row.id}
            className={`
                ${i % 2 === 0 ? "bg-gray-500" : "bg-gray-700"}
                `}
          >
            <MTable.Td>{i + 1} </MTable.Td>
            {row.getVisibleCells().map((cell, id) => (
              <MTable.Td key={cell.id + id} className="px-3.5 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </MTable.Td>
            ))}
          </MTable.Tr>
        ))
      ) : (
        <MTable.Tr className="text-center h-32">
          <MTable.Td colSpan={12}>No Record Found!</MTable.Td>
        </MTable.Tr>
      )}
    </MTable.Tbody>
  );
}

export default TableBody;
