<template>
  <thead>
    <tr>
      <data-table-column
        v-for="column in props.columns"
        :key="column.key"
        :column="column"
        :activeColumn="activeColumn"
        @sortDirectionChange="handleSorting"
        :defaultSortDirection="getDefaultSortDirection(column)"
      />
    </tr>
  </thead>
</template>

<script setup lang="ts">
import DataTableColumn from "./DataTableColumn.vue";
import { Column } from "@interfaces/data-table/interfaces.ts";

const props = defineProps({
  columns: {
    type: Array as () => Column[],
    required: true,
  },
  activeColumn: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["sort"]);

const getDefaultSortDirection = (column: Column) => {
  return column.defaultSorted ? column.defaultSortDirection : undefined;
};

const handleSorting = (columnKey: string, direction: string) => {
  emit("sort", columnKey, direction);
};
</script>
