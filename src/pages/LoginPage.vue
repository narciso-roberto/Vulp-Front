<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/api/authService";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const rememberMe = ref(false);

const handleLogin = () => {
    
};
</script>

<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <v-container fluid class="fill-height pa-0">
        <v-row no-gutters class="fill-height">
          <!-- Left side -->
          <v-col cols="12" md="6" class="d-none d-md-flex login-banner">
            <div class="banner-content">
              <div class="logo">Vulp</div>

              <h1 class="text-h2 font-weight-bold mb-4">
                Everything you need.
              </h1>

              <p class="text-h6 font-weight-regular">
                Discover products you love and have them delivered straight to
                your door.
              </p>
            </div>
          </v-col>

          <!-- Login -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <v-card
              width="440"
              max-width="90%"
              elevation="0"
              class="pa-8"
              rounded="xl"
            >
              <!-- Mobile logo -->
              <div class="d-md-none text-center mb-8">
                <span class="text-h4 font-weight-bold"> Vulp </span>
              </div>

              <div class="mb-8">
                <h2 class="text-h4 font-weight-bold mb-2">Welcome back</h2>

                <p class="text-body-1 text-grey-darken-1">
                  Sign in to your Vulp account
                </p>
              </div>

              <v-form @submit.prevent="handleLogin">
                <!-- Email -->
                <v-text-field
                  v-model="email"
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                  variant="outlined"
                  prepend-inner-icon="mdi-email-outline"
                  class="mb-2"
                  :rules="[
                    (value) => !!value || 'Email is required',
                    (value) => /.+@.+\..+/.test(value) || 'Enter a valid email',
                  ]"
                />

                <!-- Password -->
                <v-text-field
                  v-model="password"
                  label="Password"
                  placeholder="Enter your password"
                  :type="showPassword ? 'text' : 'password'"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock-outline"
                  :append-inner-icon="
                    showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                  "
                  class="mb-2"
                  @click:append-inner="showPassword = !showPassword"
                  :rules="[(value) => !!value || 'Password is required']"
                />

                <!-- Remember / Forgot -->
                <div class="d-flex align-center justify-space-between mb-6">
                  <v-checkbox
                    v-model="rememberMe"
                    label="Remember me"
                    hide-details
                    density="compact"
                  />

                  <v-btn variant="text" size="small" class="text-none px-0">
                    Forgot password?
                  </v-btn>
                </div>

                <!-- Login button -->
                <v-btn
                  type="submit"
                  block
                  size="large"
                  color="primary"
                  rounded="lg"
                  class="text-none font-weight-bold mb-6"
                >
                  Sign in
                </v-btn>
              </v-form>

              <!-- Divider -->
              <div class="d-flex align-center mb-6">
                <v-divider />

                <span class="mx-4 text-caption text-grey"> OR </span>

                <v-divider />
              </div>

              <!-- Google -->
              <v-btn
                block
                size="large"
                variant="outlined"
                rounded="lg"
                class="text-none mb-6"
              >
                <v-icon start> mdi-google </v-icon>

                Continue with Google
              </v-btn>

              <!-- Register -->
              <div class="text-center text-body-2">
                <span class="text-grey-darken-1"> Don't have an account? </span>

                <v-btn
                  variant="text"
                  color="primary"
                  :to="{ name: 'register' }"
                  class="text-none font-weight-bold"
                >
                  Create account
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.login-banner {
  position: relative;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  overflow: hidden;
}

.login-banner::after {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  right: -150px;
  bottom: -150px;
}

.banner-content {
  max-width: 600px;
  margin: auto;
  padding: 64px;
}

.logo {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 120px;
}
</style>
