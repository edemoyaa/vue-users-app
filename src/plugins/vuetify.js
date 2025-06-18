// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'; 
import {
  VApp,
  VContainer,
  VRow,
  VCol,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VBtn,
  VDialog,
  VTextField,
  VProgressCircular,
  VAlert,
  VIcon, 
} from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components: {
    VApp,
    VContainer,
    VRow,
    VCol,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VBtn,
    VDialog,
    VTextField,
    VProgressCircular,
    VAlert,
    VIcon, 
  },
  directives,
});