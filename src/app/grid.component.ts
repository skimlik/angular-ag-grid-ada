import { Component, Input } from '@angular/core';
import {
  GridApi,
  GridOptions,
  GridReadyEvent,
  ColumnApi
} from 'ag-grid-community';
import { GridColumns } from './grid-columns';

const data = [
  { id: 1, value: 'Value 1' },
  { id: 2, value: 'Value 2' },
  { id: 3, value: 'Value 3' },
  { id: 4, value: 'Value 4' },
  { id: 5, value: 'Value 5' },
  { id: 6, value: 'Value 6' },
]

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.scss']
})
export class GridComponent  {
  private _gridApi: GridApi;
  private _columnApi: ColumnApi

  rowData = data;
  columnDefs = GridColumns;
  gridOptions: GridOptions = {
    defaultColDef: {
      editable: false
    }
  }

  getRowNodeId(params): void {
    return params.id.toString();
  }

  onGridReady(params): void {
    this._gridApi = params.api;
    this._columnApi = params.columnApi;
  }
}
