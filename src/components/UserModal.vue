<!-- src/components/UserModal.vue -->
<template>
  <v-dialog
    :value="visible"
    max-width="500px"
    transition="dialog-bottom-transition"
    @update:value="updateVisible"
  >
    <v-card>
      <v-card-title>
        <v-icon left>mdi-account</v-icon>
        Detalles de {{ user?.name }}
      </v-card-title>
      <v-card-text v-if="user">
        <p>
          <v-icon left>mdi-map-marker</v-icon>
          <strong>Dirección:</strong> {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}, {{ user.address.zipcode }}
        </p>
        <p>
          <v-icon left>mdi-phone</v-icon>
          <strong>Teléfono:</strong> {{ user.phone }}
        </p>
        <p>
          <v-icon left>mdi-briefcase</v-icon>
          <strong>Compañía:</strong> {{ user.company.name }}
        </p>
        <p>
          <v-icon left>mdi-web</v-icon>
          <strong>Sitio web:</strong>
          <a :href="`https://${user.website}`" target="_blank">{{ user.website }}</a>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="close">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    default: null,
  },
  visible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:visible', 'close']);

const updateVisible = (value) => {
  emit('update:visible', value);
};

const close = () => {
  emit('update:visible', false);
  emit('close');
};
</script>

<style scoped>
.v-card-text p {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.v-icon {
  margin-right: 8px;
}
</style>