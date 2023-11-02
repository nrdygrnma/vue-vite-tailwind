
<template>
    <input v-model="searchTerm" id="search-input"
        class="w-1/5 p-2 mb-4 rounded-lg shadow-md focus:outline-none border border-gray-200" type="text"
        placeholder="Search..." />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchTerm = ref("")
</script>