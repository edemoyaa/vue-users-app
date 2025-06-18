<!-- src/components/UserList.vue -->
<template>
  <v-container>
    <v-row>
      <v-col
        v-for="user in users"
        :key="user.id"
        cols="12"
        sm="6"
        md="4"
      >
        <UserCard :user="user" @show-details="emitShowDetails" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import UserCard from './UserCard.vue';

defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['show-details']);

const emitShowDetails = (user) => {
  emit('show-details', user);
};
</script>