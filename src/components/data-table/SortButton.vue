<template>
  <button class="focus:outline-none" @click="updateSortDirection">
    <span v-if="props.direction === 'ascending'" :class="{ active: isActive }"
      >&#8593;</span
    >
    <span v-else :class="{ active: isActive }">&#8595;</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  direction: {
    type: String,
    required: true,
  },
  activeDirection: {
    type: String,
  },
  activeColumn: {
    type: String,
    required: true,
  },
  columnKey: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["updateSortDirection"]);

const isActive = computed(
  () =>
    props.direction === props.activeDirection &&
    props.columnKey === props.activeColumn
);

const updateSortDirection = () => {
  emit("updateSortDirection", props.direction);
};
</script>
