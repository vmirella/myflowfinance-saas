<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/auth.store'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    await authStore.login(email.value, password.value)

    const redirectPath = (route.query.redirect as string) || '/dashboard'

    router.push(redirectPath)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="bg-white p-8 rounded-xl shadow w-96">
    <h2 class="text-2xl font-bold mb-6">Login</h2>

    <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" class="border p-3 rounded" />

      <input v-model="password" type="password" placeholder="Password" class="border p-3 rounded" />

      <button class="bg-slate-900 text-white p-3 rounded hover:bg-slate-700">Login</button>
    </form>
  </div>
</template>
