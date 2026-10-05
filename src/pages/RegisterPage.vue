```vue
<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const acceptTerms = ref(false);

const handleRegister = () => {
  console.log({
    name: name.value,
    email: email.value,
    password: password.value,
  });
};
</script>

<template>
  <v-app>
    <v-main class="bg-grey-lighten-5">
      <v-container fluid class="fill-height pa-0">
        <v-row no-gutters class="fill-height">
          <!-- Left side -->
          <v-col cols="12" md="6" class="d-none d-md-flex register-banner">
            <div class="banner-content">
              <div class="logo">Vulp</div>

              <h1 class="text-h2 font-weight-bold mb-4">
                Start your Vulp journey.
              </h1>

              <p class="text-h6 font-weight-regular">
                Create your account and discover products selected for you.
              </p>
            </div>
          </v-col>

          <!-- Register -->
          <v-col
            cols="12"
            md="6"
            class="d-flex align-center justify-center py-8"
          >
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
                <h2 class="text-h4 font-weight-bold mb-2">Create an account</h2>

                <p class="text-body-1 text-grey-darken-1">
                  Join Vulp and start shopping today
                </p>
              </div>

              <v-form @submit.prevent="handleRegister">
                <!-- Name -->
                <v-text-field
                  v-model="name"
                  label="Full name"
                  placeholder="John Doe"
                  type="text"
                  variant="outlined"
                  prepend-inner-icon="mdi-account-outline"
                  class="mb-2"
                  :rules="[(value) => !!value || 'Name is required']"
                />

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
                  placeholder="Create a password"
                  :type="showPassword ? 'text' : 'password'"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock-outline"
                  :append-inner-icon="
                    showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                  "
                  class="mb-2"
                  @click:append-inner="showPassword = !showPassword"
                  :rules="[
                    (value) => !!value || 'Password is required',
                    (value) =>
                      value.length >= 8 ||
                      'Password must contain at least 8 characters',
                  ]"
                />

                <!-- Confirm password -->
                <v-text-field
                  v-model="confirmPassword"
                  label="Confirm password"
                  placeholder="Repeat your password"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  variant="outlined"
                  prepend-inner-icon="mdi-lock-check-outline"
                  :append-inner-icon="
                    showConfirmPassword
                      ? 'mdi-eye-off-outline'
                      : 'mdi-eye-outline'
                  "
                  class="mb-2"
                  @click:append-inner="
                    showConfirmPassword = !showConfirmPassword
                  "
                  :rules="[
                    (value) => !!value || 'Please confirm your password',
                    (value) => value === password || 'Passwords do not match',
                  ]"
                />

                <!-- Terms -->
                <v-checkbox
                  v-model="acceptTerms"
                  class="mb-4"
                  hide-details
                  :rules="[(value) => value || 'You must accept the terms']"
                >
                  <template #label>
                    <span class="text-body-2">
                      I agree to the
                      <v-btn
                        variant="text"
                        color="primary"
                        class="px-1 text-none"
                        size="small"
                        @click.stop
                      >
                        Terms of Service
                      </v-btn>
                      and
                      <v-btn
                        variant="text"
                        color="primary"
                        class="px-1 text-none"
                        size="small"
                        @click.stop
                      >
                        Privacy Policy
                      </v-btn>
                    </span>
                  </template>
                </v-checkbox>

                <!-- Register -->
                <v-btn
                  type="submit"
                  block
                  size="large"
                  color="primary"
                  rounded="lg"
                  class="text-none font-weight-bold mb-6"
                >
                  Create account
                </v-btn>
              </v-form>

              <div class="text-center text-body-2">
                <span class="text-grey-darken-1">
                  Already have an account?
                </span>

                <v-btn
                  variant="text"
                  color="primary"
                  :to="{ name: 'login' }"
                  class="text-none font-weight-bold"
                >
                  Sign in
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
.register-banner {
  position: relative;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  overflow: hidden;
}

.register-banner::after {
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
```
