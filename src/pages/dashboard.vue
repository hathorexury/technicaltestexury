<script lang="ts" setup>
import { useAppStore } from "@/infraestructure/stores/app";
const appStore = useAppStore();
</script>
<template>
  <h1>
    <v-icon>{{ appStore.getPageIcon }}</v-icon>
    {{ appStore.getActivePage }} page
  </h1>
</template>
<route lang="yaml">
meta:
  layout: home
</route>
