<template>
  <tr class="hover:bg-gray-100 transition-colors">
    <data-table-row-column
      v-for="column in props.columns"
      :key="column.key"
      :data="rowData[column.key]"
    />
  </tr>
</template>

<script setup lang="ts">
import DataTableRowColumn from "./DataTableRowColumn.vue";
import { Column, RowData } from "@interfaces/data-table-interfaces.ts";

const props = defineProps({
  rowData: {
    type: Object as () => RowData,
    required: true,
  },
  columns: {
    type: Array as () => Column[],
    required: true,
  },
});
</script>
@/interfaces/data-table/data-table-interfaces
