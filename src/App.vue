<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
import ChatbotWidget from './components/chatbot/ChatbotWidget.vue'

const route = useRoute()
const isPublicRoute = computed(() => !route.path.startsWith('/admin') && route.path !== '/login')
</script>

<template>
  <MainLayout />
  <ChatbotWidget v-if="isPublicRoute" />
</template>

<style>
/* Base typography settings */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}
</style>
