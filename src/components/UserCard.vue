<!-- src/components/UserCard.vue -->
<template>
  <v-card class="user-card" elevation="2">
    <v-card-title>
      <img :src="`https://i.pravatar.cc/150?img=${user.id}`" alt="Avatar" class="avatar" />
      {{ user.name }}
    </v-card-title>
    <v-card-text>
      <p>Email: {{ user.email }}</p>
      <v-btn color="primary" @click="showDetails">Ver más</v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['show-details']);

const showDetails = () => {
  emit('show-details', props.user);
};
</script>

<style scoped>
.user-card {
  padding: 16px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>