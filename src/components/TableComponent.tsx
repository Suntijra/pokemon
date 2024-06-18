import React, { useState, useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import { TableInstance } from 'react-table';
interface Data {
    col1: string;
    col2: string;
    col3: string;
}

interface TableComponentProps {
    columns: any;
    data: Data[];
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
    } = useTable({ columns, data }, useFilters, useGlobalFilter);
    const { globalFilter } = state;
    return (
        <>
            <input
                value={globalFilter || ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search..."
            />
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} style={{ borderBottom: 'solid 3px red', background: 'aliceblue', color: 'black', fontWeight: 'bold' }}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} style={{ padding: '10px', border: 'solid 1px gray', background: 'papayawhip' }}>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default TableComponent;