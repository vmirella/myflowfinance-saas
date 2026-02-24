<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-slate-900 text-white p-6">
      <h2 class="text-xl font-bold mb-8">My Flow Finance</h2>
      <nav class="flex flex-col gap-3">
        <router-link to="/" class="hover:bg-slate-700 p-2 rounded"> Dashboard </router-link>
      </nav>
    </aside>

    <!-- Content -->
    <div class="flex-1 flex flex-col">
      <!-- Topbar -->
      <header class="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h2 class="text-lg font-semibold">Dashboard</h2>
        <div class="text-sm text-gray-600">Usuario</div>
      </header>
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>
