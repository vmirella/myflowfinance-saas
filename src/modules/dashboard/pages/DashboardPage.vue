<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Balance -->
    <div class="bg-white p-6 rounded-xl shadow">
      <h3 class="text-sm text-gray-500">Balance</h3>
      <p class="text-2xl font-bold">$ 0.00</p>
    </div>

    <!-- Income -->
    <div class="bg-white p-6 rounded-xl shadow">
      <h3 class="text-sm text-gray-500">Ingresos</h3>
      <p class="text-2xl font-bold text-income">$ 0.00</p>
    </div>

    <!-- Expense -->
    <div class="bg-white p-6 rounded-xl shadow">
      <h3 class="text-sm text-gray-500">Gastos</h3>
      <p class="text-2xl font-bold text-expense">$ 0.00</p>
    </div>
  </div>
</template>
