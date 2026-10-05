// Composables
import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import HomePage from "@/pages/HomePage.vue";
// import { useAppStore } from "@/stores/app";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   redirect: () => {
    //     const authStore = useAppStore();
    //     return authStore.currentUser ? "/home" : "/login";
    //   },
    // },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from) => {});

export default router;
