import { Column } from "@/interfaces/dataTableInterfaces";

export const initialTableColumns: Column[] = [
    {
      key: 'name',
      title: 'Name',
      sortable: true,
      sortDirections: ['ascending','descending'],
      defaultSortDirection: 'ascending',
      defaultSorted: true,
    },
    {
      key: 'age',
      title: 'Age',
      sortable: true,
      sortDirections: ['ascending', 'descending'],
      defaultSortDirection: 'ascending',
      defaultSorted: false,
    },
  ];