<!-- src/components/SearchBar.vue -->
<template>
  <v-text-field
    v-model="search"
    label="Buscar por nombre"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    @input="emitSearch"
  ></v-text-field>
</template>

<script setup>
import { ref } from 'vue';

const search = ref('');

const emitSearch = () => {
  emit('search', search.value);
};

const emit = defineEmits(['search']);
</script>