<template>
  <div class="min-h-screen bg-brand-canvas flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 selection:bg-brand-light selection:text-brand-primary-dark">
    
    <div class="sm:mx-auto sm:w-full sm:max-w-md text-center">
      <!-- Clinic Logo -->
      <router-link to="/" class="inline-block group mb-4">
        <div class="w-20 h-20 mx-auto relative rounded-2xl p-1.5 bg-white shadow-card border border-brand-border group-hover:border-brand-primary transition-colors">
          <img 
            src="../../assets/images/althea-lapuz-logo.png" 
            alt="Althea-Lapuz Lying-In Clinic Logo" 
            class="w-full h-full object-contain rounded-xl"
          />
        </div>
      </router-link>

      <div class="mb-2">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-soft border border-brand-border text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full">
          <ShieldCheck class="w-3.5 h-3.5" />
          <span>Staff &amp; Administration Portal</span>
        </span>
      </div>

      <h1 class="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
        Althea-Lapuz Lying-In Clinic
      </h1>
      <p class="mt-1 text-sm text-text-secondary">
        Sign in to manage clinic details, pricing schedules, and FAQs.
      </p>
    </div>

    <!-- Login Card -->
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-6 sm:px-10 shadow-card rounded-2xl border border-brand-border space-y-6">

        <!-- Error Message -->
        <div v-if="errorMessage" role="alert" class="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-semibold flex items-center gap-2">
          <AlertCircle class="w-4 h-4 shrink-0 text-rose-600" />
          <span>{{ errorMessage }}</span>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-5 text-left">
          <div>
            <label for="username" class="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
              Username
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <User class="w-4 h-4" />
              </div>
              <input
                id="username"
                v-model="username"
                type="text"
                required
                autocomplete="username"
                placeholder="Enter staff username"
                class="w-full pl-10 pr-4 py-2.5 bg-brand-canvas border border-brand-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5">
              Password
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <Lock class="w-4 h-4" />
              </div>
              <input
                id="password"
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                class="w-full pl-10 pr-10 py-2.5 bg-brand-canvas border border-brand-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-2 focus:ring-brand-primary/20 transition-all font-medium"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
                class="absolute inset-y-0 right-0 pr-3.5 flex items-center text-text-muted hover:text-text-primary cursor-pointer"
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
              class="w-full py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary-hover active:scale-[0.99] text-white text-sm font-heading font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
        <div class="pt-4 border-t border-brand-border text-left">
          <p class="text-xs text-text-secondary leading-relaxed flex items-start gap-2">
            <Info class="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
            <span><strong>Live Synced Mode</strong>: Updates made in the dashboard reflect across the clinic website and AI assistant immediately.</span>
          </p>
        </div>

        <div class="text-center">
          <router-link to="/" class="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-text-secondary hover:text-brand-primary transition-colors">
            <ArrowLeft class="w-3.5 h-3.5" />
            <span>Back to Public Website</span>
          </router-link>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ShieldCheck, User, Lock, AlertCircle, Eye, EyeOff, ArrowRight, ArrowLeft, Info } from '@lucide/vue'
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
