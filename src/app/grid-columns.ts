import { ColDef } from 'ag-grid-community';

export const GridColumns: ColDef[] = [
  {
    colId: 'id',
    headerName: 'id',
    field: 'id',
    minWidth: 30,
    width: 60
  }, {
    colId: 'value',
    headerName: 'Value',
    field: 'value',
    minWidth: 100,
    width: 160
  }
];