import React from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { IPokemonProps } from '../interface/table';

interface ITableProps {
    columns: any,
    data: IPokemonProps[]
}


export default function Table2({ columns, data }: ITableProps) {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    });
    // console.log(table.getHeaderGroups())
    console.log(table.getRowModel().rows)
    return (
        // <div></div>
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => {
                    // console.log({ headerGroup })
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => ( // map over the headerGroup headers array
                                <th key={header.id} colSpan={header.colSpan}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>

                            ))}
                        </tr>
                    )
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (

                    <tr className="border hover:bg-zinc-200 cursor-pointer" key={row.id} >
                        {row.getVisibleCells().map((cell) => (
                            <td className="p-3" key={cell.id}>
                                <p onClick={() => { console.log(cell) }}>{row.original.name}</p>
                                {/* {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )} */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>

    )
}