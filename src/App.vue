<script setup>
import MainLayout from './layouts/MainLayout.vue'
import ChatbotWidget from './components/chatbot/ChatbotWidget.vue'
</script>

<template>
  <MainLayout />
  <ChatbotWidget />
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
