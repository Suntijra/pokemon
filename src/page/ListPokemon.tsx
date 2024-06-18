// App.tsx
import React, { useMemo } from 'react';
import TableComponent from '../components/TableComponent';
import { ColumnFilter } from '../components/ColumnFillter';

interface Data {
  col1: string;
  col2: string;
  col3: string;
}

const App: React.FC = () => {
  const data: Data[] = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'Example',
      },
      {
        col1: 'React Table',
        col2: 'rocks',
        col3: 'Test',
      },
      {
        col1: 'Whatever',
        col2: 'you want',
        col3: 'Data',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',

      },
      {
        Header: 'Column 2',
        accessor: 'col2',

      },
      {
        Header: 'Column 3',
        accessor: 'col3',

      },
    ],
    []
  );

  return (
    <div>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default App;
