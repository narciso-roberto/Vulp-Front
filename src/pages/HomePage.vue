<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-6 rounded-xl" elevation="8">
          <v-card-title class="text-h4 mb-2">Home</v-card-title>
          <v-card-subtitle class="mb-4">
            Bem-vindo(a), {{ authStore.currentUser?.name || "usuário" }}
          </v-card-subtitle>

          <v-alert type="success" variant="tonal" class="mb-5">
            Login realizado com sucesso.
          </v-alert>

          <p class="text-body-1 mb-4">
            E-mail: <strong>{{ authStore.currentUser?.email }}</strong>
          </p>

          <v-btn color="primary" class="mr-3" @click="goToLogin">
            Ir para login
          </v-btn>
          <v-btn color="secondary" variant="tonal" @click="handleLogout">
            Sair
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAppStore();

function goToLogin() {
  router.push("/login");
}

function handleLogout() {
  authStore.logout();
  router.push("/login");
}
</script>
