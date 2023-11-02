import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { initialTableColumns } from '@/data/dataTableColumns';
import { Column } from '@interfaces/dataTableInterfaces';

export const useDataTableStore = defineStore('dataTable', () => {
  
  const tableColumns = ref<Column[]>(initialTableColumns);

  const tableData = ref([
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
  ]);

  const searchTerm = ref('');

  const getDefaultSortedColumn = computed(() => {
    return tableColumns.value.find((column) => column.defaultSorted);
  });

  const activeColumn = ref(getDefaultSortedColumn.value?.key || '');

  const getFilteredTableData = computed(() => {
    if (!searchTerm.value) {
      return tableData.value;
    }
    const searchTermLowerCase = searchTerm.value.toLowerCase();
    return tableData.value.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTermLowerCase)
      )
    );
  });

  return {
    tableColumns,
    tableData,
    searchTerm,
    activeColumn,
    getFilteredTableData,
    getDefaultSortedColumn
  };
});
