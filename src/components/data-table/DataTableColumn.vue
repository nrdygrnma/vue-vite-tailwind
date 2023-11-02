<template>
  <th class="p-2 border border-gray-400">
    {{ column.title }}
    <sort-button
      v-for="direction in props.column.sortDirections"
      v-if="props.column.sortable"
      :key="direction"
      :direction="direction"
      :columnKey="props.column.key"
      :activeColumn="activeColumn"
      :activeDirection="activeDirection"
      :isActive="isDefaultSortedColumn"
      @updateSortDirection="handleSortDirectionChange"
    />
  </th>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { Column } from "@interfaces/data-table/interfaces.ts";
import SortButton from "./SortButton.vue";

const props = defineProps({
  column: {
    type: Object as () => Column,
    required: true,
  },
  activeColumn: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["sortDirectionChange"]);
const activeDirection = ref<string>("");

const isDefaultSortedColumn = computed(() => {
  return (
    props.column.defaultSorted &&
    props.column.defaultSortDirection === activeDirection.value
  );
});

const handleSortDirectionChange = (direction: any) => {
  activeDirection.value = direction;
  emit("sortDirectionChange", props.column.key, direction);
};

onMounted(() => {
  if (props.column.defaultSorted) {
    activeDirection.value = props.column.defaultSortDirection || "ascending";
  }
});
</script>
