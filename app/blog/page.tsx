"use client";
import { title } from "@/components/primitives";

import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";

export default function BlogPage() {
  const columns = {
    research: {
      name: "name_research",
      key: "key_research",
    },
    cleaning: {
      name: "name_cleaning",
      key: "key_cleaning",
    },
  };
  const rows = [
    {
      research: {
        name: "name_research_rows",
        key: "key_research-rows",
      },
      cleaning: {
        name: "name_cleaning_rows",
        key: "key_cleaning_rows",
      },
    },
    {
      research: {
        name: "name_research_rows",
        key: "key_research-rows",
      },
      cleaning: {
        name: "name_cleaning_rows_second",
        key: "key_cleaning_rows_second",
      },
    },
  ];
  const columnsType = typeof columns;
  const rowsType = typeof rows;
  let count = 0;

  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <div className="relative overflow-x-auto  shadow-md rounded-md">
        <Table
          aria-label="Files"
          selectionMode="multiple"
          className="w-full text-sm text-center rtl:text-right text-gray-100 dark:text-gray-200 my-8"
        >
          <TableHeader className="text-md text-gray-900 uppercase  bg-gray-50 ">
            {(Object.keys(columns) as Array<keyof typeof columns>).map(
              (keyColumn) => (
                <Column
                  className="px-6 py-3"
                  key={columns[keyColumn].key}
                  isRowHeader
                >
                  {columns[keyColumn].name}
                </Column>
              )
            )}
          </TableHeader>
          <TableBody>
            {rows.map((item) => (
              <Row
                className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                key={(count += 1)}
              >
                {(Object.keys(item) as Array<keyof typeof item>).map(
                  (keyRow) => (
                    <Cell
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      key={keyRow}
                    >
                      {item[keyRow].name}
                    </Cell>
                  )
                )}
              </Row>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
