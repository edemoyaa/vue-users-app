<!-- src/App.vue (fragmento) -->
<template>
  <v-app>
    <v-container>
      <h1>Lista de Usuarios</h1>
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
        :size="50"
        class="loading"
      ></v-progress-circular>
      <v-alert v-if="error" type="error" dismissible class="error-alert">
        ¡Ups, algo salió mal! {{ error }}. Por favor, intenta de nuevo.
      </v-alert>
      <SearchBar v-else @search="handleSearch" />
      <UserList v-if="!loading" :users="filteredUsers" @show-details="openModal" />
      <UserModal
        :user="selectedUser"
        v-model="modalVisible"
        @close="closeModal"
      />
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SearchBar from './components/SearchBar.vue';
import UserList from './components/UserList.vue';
import UserModal from './components/UserModal.vue';
import { fetchUsers } from './services/api';

const users = ref([]);
const searchQuery = ref('');
const selectedUser = ref(null);
const modalVisible = ref(false);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    users.value = await fetchUsers();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const filteredUsers = computed(() => {
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const handleSearch = (query) => {
  searchQuery.value = query;
};

const openModal = (user) => {
  selectedUser.value = user;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedUser.value = null;
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

.loading {
  display: block;
  margin: 20px auto;
}

.error-alert {
  margin-bottom: 20px;
}
</style>