<template>
  <div class="min-h-screen bg-gradient-to-br from-brand-subtle via-white to-brand-soft flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-brand-light selection:text-brand-primary-dark">
    
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <!-- Clinic Logo -->
      <router-link to="/" class="inline-block group mb-4">
        <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative rounded-full p-1 bg-white shadow-brand ring-4 ring-brand-border/60 group-hover:ring-brand-primary transition-all duration-300">
          <img 
            src="../../assets/images/althea-lapuz-logo.png" 
            alt="Althea-Lapuz Lying In Clinic Logo" 
            class="w-full h-full object-contain rounded-full"
          />
        </div>
      </router-link>

      <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft border border-brand-border/80 text-brand-primary text-xs font-extrabold uppercase tracking-wider rounded-full shadow-xs mb-2">
        <ShieldCheck class="w-3.5 h-3.5" />
        <span>Staff & Administration Portal</span>
      </span>

      <h1 class="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
        Althea-Lapuz Lying In Clinic
      </h1>
      <p class="mt-1 text-sm text-text-secondary">
        Sign in to manage clinic details, pricing schedules, and inquiries.
      </p>
    </div>

    <!-- Login Card -->
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-6 sm:px-10 shadow-card rounded-3xl border border-brand-border/60 space-y-6">

        <!-- Error Message -->
        <div v-if="errorMessage" class="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs font-semibold flex items-center gap-2">
          <AlertCircle class="w-4 h-4 flex-shrink-0 text-rose-600" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-5 text-left">
          <div>
            <label for="username" class="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Username
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <User class="w-4 h-4" />
              </div>
              <input
                id="username"
                v-model="username"
                type="text"
                required
                autocomplete="username"
                placeholder="e.g. admin"
                class="w-full pl-10 pr-4 py-2.5 bg-brand-subtle/30 border border-brand-border/70 rounded-2xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
                <Lock class="w-4 h-4" />
              </div>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full pl-10 pr-10 py-2.5 bg-brand-subtle/30 border border-brand-border/70 rounded-2xl text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-700 cursor-pointer"
              >
                <EyeOff v-if="showPassword" class="w-4 h-4" />
                <Eye v-else class="w-4 h-4" />
              </button>
            </div>
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full py-3 px-4 rounded-2xl bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.99] text-white text-sm font-extrabold shadow-brand-sm hover:shadow-brand transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span v-if="isLoading" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span v-else class="flex items-center gap-2">
                <span>Sign in to Dashboard</span>
                <ArrowRight class="w-4 h-4" />
              </span>
            </button>
          </div>
        </form>

        <!-- Informational Note -->
        <div class="pt-4 border-t border-brand-border/40 text-center">
          <p class="text-xs text-text-muted leading-relaxed">
            💡 <strong>In-Memory Mode</strong>: Updates reflect across the live clinic website instantly. Reloading the browser will automatically restore original default data.
          </p>
        </div>

        <div class="text-center">
          <router-link to="/" class="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-brand-primary transition-colors">
            <span>← Back to Public Website</span>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ShieldCheck, User, Lock, AlertCircle, Eye, EyeOff, ArrowRight } from '@lucide/vue'
import { auth } from '../../stores/clinicStore.js'

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

const handleLogin = () => {
  errorMessage.value = ''
  isLoading.value = true

  setTimeout(() => {
    const result = auth.login(username.value, password.value)
    isLoading.value = false

    if (result.success) {
      const redirectPath = route.query.redirect || '/admin'
      router.push(redirectPath)
    } else {
      errorMessage.value = result.message
    }
  }, 350)
}
</script>
