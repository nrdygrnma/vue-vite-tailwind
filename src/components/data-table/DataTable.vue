<template>
  <div class="p-4 flex flex-col items-start">
    <search-input v-model="store.searchTerm" />
    <div class="w-full overflow-x-auto">
      <table class="w-full whitespace-no-wrap table-auto">
        <data-table-header
          :columns="store.tableColumns"
          :activeColumn="store.activeColumn"
          :defaultSortedColumn="store.getDefaultSortedColumn"
          @sort="handleSorting"
        />
        <tbody>
          <data-table-row
            v-for="row in store.getFilteredTableData"
            :key="row.id"
            :rowData="row"
            :columns="store.tableColumns"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "./SearchInput.vue";
import DataTableHeader from "./DataTableHeader.vue";
import DataTableRow from "./DataTableRow.vue";
import { RowData } from "@interfaces/dataTableInterfaces.ts";
import { useDataTableStore } from "@stores/dataTableStore.ts";
import { onMounted } from "vue";

const store = useDataTableStore();

const handleSorting = (columnKey: string, direction: string) => {
  sortTableData(columnKey, direction);
};

const sortTableData = (columnKey: string, direction: string) => {
  if (direction === "ascending") {
    store.tableData.sort((a: RowData, b: RowData) =>
      a[columnKey] > b[columnKey] ? 1 : -1
    );
  } else if (direction === "descending") {
    store.tableData.sort((a: RowData, b: RowData) =>
      a[columnKey] < b[columnKey] ? 1 : -1
    );
  }
  store.activeColumn = columnKey;
};

onMounted(() => {
  const defaultSortedColumn = store.tableColumns.find(
    (column) => column.defaultSorted
  );

  if (defaultSortedColumn) {
    sortTableData(
      defaultSortedColumn.key,
      defaultSortedColumn.defaultSortDirection
    );
  }
});
</script>
@/stores/store
