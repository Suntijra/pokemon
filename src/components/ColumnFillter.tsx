import React from 'react';
import { useAsyncDebounce } from 'react-table';

export const ColumnFilter = ({
    column: { filterValue, preFilteredRows, setFilter },
}: any) => {
    const count = preFilteredRows.length;

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined);
    }, 300);

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                onChange(e.target.value);
            }}
            placeholder={`Search ${count} records...`}
            style={{
                width: '100%',
            }}
        />
    );
};