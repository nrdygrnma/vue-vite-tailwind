export interface Column {
    key: string;
    title: string;
    sortable?: boolean,
    sortDirections?: ('ascending' | 'descending')[];
    defaultSortDirection: 'ascending' | 'descending';
    defaultSorted: boolean;
}

export interface RowData {
    [key: string]: any;
  }

 