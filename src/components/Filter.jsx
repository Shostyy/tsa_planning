import React, { useState } from "react";
import { useTable, useFilters } from "react-table";
import someData from "../staticData.json";
import "./Filter.scss";

export const Filter = () => {
  const tableData = React.useMemo(() => someData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID Транзакції",
        accessor: "id",
      },
      {
        Header: "Дата транзакції",
        accessor: "date",
      },
      {
        Header: "Ім'я",
        accessor: "name",
      },
      {
        Header: "Вартість",
        accessor: "amount",
      },
      {
        Header: "Час транзакції",
        accessor: "time",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setFilter,
  } = useTable(
    {
      columns,
      data: tableData,
    },
    useFilters
  );

  const [hiddenColumns, setHiddenColumns] = useState([]);

  const toggleColumnVisibility = (accessor) => {
    setHiddenColumns((prev) =>
      prev.includes(accessor)
        ? prev.filter((col) => col !== accessor)
        : [...prev, accessor]
    );
  };

  return (
    <div className="table-container">
      <h2 className="table-container__header">Фільтри</h2>
      <div className="filters">
        {headerGroups.map((headerGroup) => (
          <div
            key={headerGroup.id}
            {...headerGroup.getHeaderGroupProps()}
            className="filter-header"
          >
            {headerGroup.headers.map((column) => (
              <div key={column.id} className="filter-column">
                <span>{column.render("Header")}</span>
                <input
                  value={state.filters.find((f) => f.id === column.id)?.value || ""}
                  onChange={(e) => {
                    setFilter(column.id, e.target.value);
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="toggle-columns">
        <h2 className="table-container__header">Дані</h2>
        <div className="visibility">
          {columns.map((column) => (
            <label key={column.accessor}>
              <input
                type="checkbox"
                checked={!hiddenColumns.includes(column.accessor)}
                onChange={() => toggleColumnVisibility(column.accessor)}
              />
              {column.Header}
            </label>
          ))}
        </div>
      </div>
      <table {...getTableProps()} className="full-width-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) =>
                hiddenColumns.includes(column.id) ? null : (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                )
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(
                  (cell) =>
                    !hiddenColumns.includes(cell.column.id) && (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
