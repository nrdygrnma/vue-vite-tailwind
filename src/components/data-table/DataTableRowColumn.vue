<template>
  <td class="p-2 border border-gray-400">{{ props.data }}</td>
</template>

<script setup lang="ts">
import { DataTableRowColumnProp } from "@/types/dataTableTypes";
import { PropType } from "vue";

const props = defineProps({
  data: {
    type: [Number, String] as PropType<DataTableRowColumnProp>,
    required: true,
  },
});
</script>
@/types/data-table/data-table-types @/types/types
