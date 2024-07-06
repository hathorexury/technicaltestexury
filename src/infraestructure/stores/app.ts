import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    activePage: "Home",
    pageIcon: "mdi-home",
  }),
  actions: {
    setActivePage(page: string) {
      this.activePage = page;
    },
    setPageIcon(icon: string) {
      this.pageIcon = icon;
    },
  },
  getters: {
    getActivePage() {
      return this.activePage;
    },
    getPageIcon() {
      return this.pageIcon;
    },
  },
});
