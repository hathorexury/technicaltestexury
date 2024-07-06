<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { SIDEBAR_LINKS } from "@/domain/constants/sidebar.constant";
import { useAppStore } from "@/infraestructure/stores/app";
import { SidebarItem } from "@/domain/models/sidebar-item";
import { CART_ICON, HOME_ICON } from "@/domain/constants/icons.constant";
import {
  BUY_CRYPTO_URL,
  DASHBOARD_URL,
} from "@/domain/constants/url-pages.constant";
import { linksToShow } from "@/application/mappers/sidebar-mapper";

const router = useRouter();
const route = useRoute();

const appStore = useAppStore();

const isCollapsed = ref(true);

watch(route, (newRoute) => {
  const currentLink = SIDEBAR_LINKS.find(
    (link) => link.route === newRoute.path,
  );
  if (currentLink) {
    useHead({ title: currentLink.title });
  } else {
    useHead({ title: appStore.getActivePage });
  }
});

onMounted(() => {
  const currentLink = SIDEBAR_LINKS.find((link) => link.route === route.path);
  if (currentLink) {
    useHead({ title: currentLink.title });
    appStore.setActivePage(currentLink.title);
  }
});

const handleHover = () => {
  isCollapsed.value = !isCollapsed.value;
};

const handleItem = (item: SidebarItem): void => {
  appStore.setActivePage(item.title);
  router.push(item.route);
};

const goToBuyCrypto = (): void => {
  appStore.setActivePage("Buy Crypto");
  appStore.setPageIcon(CART_ICON);
  router.push(BUY_CRYPTO_URL);
};

const goToHome = (): void => {
  appStore.setActivePage("Home");
  appStore.setPageIcon(HOME_ICON);
  router.push(DASHBOARD_URL);
};
</script>

<template>
  <v-navigation-drawer
    class="sidebar"
    permanent
    expand-on-hover
    rail
    @mouseenter="handleHover"
    @mouseleave="handleHover"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-btn
          elevation="0"
          block
          color="primary"
          class="mb-4 justify-center"
          @click="goToBuyCrypto()"
          rounded
        >
          <template v-if="isCollapsed">
            <v-icon left>mdi-cart-minus</v-icon>
          </template>
          <template v-else>
            <v-icon class="mr-2">mdi-cart-minus</v-icon>
            Buy Crypto
          </template>
        </v-btn>
      </v-list-item>
      <v-list-item-group v-model="route.path" density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          @click="goToHome()"
          class="mb-1"
          :class="{
            'active-link text-primary':
              route.path === '/' || route.path === '/dashboard',
          }"
        />
        <v-divider class="mb-4"></v-divider>
        <v-list-item
          v-for="link in linksToShow"
          :key="link.title"
          @click="handleItem(link)"
          :title="link.title"
          :prepend-icon="link.icon"
          :class="{
            'active-link text-primary': route.path === link.route,
          }"
        />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.sidebar {
  background-color: #f6f6f7;
}
.active-link {
  background-color: white;
  border-left: 4px solid #1976d2;
  border-radius: 8px;
}
.v-btn {
  justify-content: flex-start;
  text-transform: none !important;
}

.v-icon {
  margin-right: 1px;
}
</style>
