<template>
  <div 
    class="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-brand-border shadow-card group select-none"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Main Carousel Display Area -->
    <div class="relative w-full h-80 sm:h-96 md:h-[420px] overflow-hidden bg-neutral-900">
      
      <!-- Slide Images with Crossfade -->
      <transition-group name="carousel-fade" tag="div" class="w-full h-full relative">
        <div 
          v-for="(photo, index) in photos" 
          :key="photo.src"
          v-show="currentIndex === index"
          class="absolute inset-0 w-full h-full"
        >
          <img 
            :src="photo.src" 
            :alt="photo.title"
            class="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
            :class="{ 'scale-105': currentIndex === index }"
            loading="lazy"
          />
          <!-- Subtle bottom gradient so dots remain clearly visible on bright photos -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
        </div>
      </transition-group>

      <!-- Top Right Controls (Counter & Fullscreen) -->
      <div class="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-2 z-10">
        <!-- Counter Pill -->
        <span class="px-2.5 py-1 bg-black/60 backdrop-blur-md text-white font-mono text-[11px] font-bold rounded-full border border-white/20 shadow-sm">
          {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(photos.length).padStart(2, '0') }}
        </span>

        <!-- Fullscreen Lightbox Button -->
        <button 
          @click="openLightbox"
          type="button"
          class="p-1.5 bg-black/60 hover:bg-brand-primary backdrop-blur-md text-white rounded-full transition-colors border border-white/20 cursor-pointer shadow-sm"
          title="View Fullscreen High-Resolution"
          aria-label="View Fullscreen High-Resolution"
        >
          <Maximize2 class="w-3.5 h-3.5" />
        </button>
      </div>

      <!-- Arrow Navigation Buttons -->
      <button 
        @click="prevSlide" 
        type="button"
        class="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-brand-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-md hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        aria-label="Previous Photo"
      >
        <ChevronLeft class="w-5 h-5" />
      </button>

      <button 
        @click="nextSlide" 
        type="button"
        class="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-brand-primary text-white backdrop-blur-md flex items-center justify-center transition-all duration-200 border border-white/20 shadow-md hover:scale-105 active:scale-95 cursor-pointer opacity-80 group-hover:opacity-100"
        aria-label="Next Photo"
      >
        <ChevronRight class="w-5 h-5" />
      </button>

      <!-- Dot Indicators (Clean, centered at the bottom) -->
      <div class="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1 sm:gap-1.5 z-10 pointer-events-auto">
        <button
          v-for="(_, idx) in photos"
          :key="idx"
          @click="goToSlide(idx)"
          type="button"
          class="h-1.5 transition-all duration-300 rounded-full cursor-pointer shadow-xs"
          :class="currentIndex === idx ? 'w-6 bg-brand-primary' : 'w-1.5 bg-white/70 hover:bg-white'"
          :aria-label="`Go to photo ${idx + 1}`"
        />
      </div>

    </div>

    <!-- Thumbnail Strip Preview (Click to Jump) -->
    <div class="p-2.5 bg-white border-t border-brand-border flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-brand-border">
      <button 
        v-for="(photo, idx) in photos" 
        :key="photo.src"
        @click="goToSlide(idx)"
        type="button"
        class="relative w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer"
        :class="currentIndex === idx ? 'border-brand-primary ring-2 ring-brand-primary/30 scale-105' : 'border-transparent opacity-60 hover:opacity-100'"
        :aria-label="`Thumbnail ${idx + 1}: ${photo.title}`"
      >
        <img :src="photo.src" :alt="photo.title" class="w-full h-full object-cover" loading="lazy" />
      </button>
    </div>

    <!-- Fullscreen Lightbox Modal -->
    <Teleport to="body">
      <div 
        v-if="isLightboxOpen" 
        class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white animate-fade-in"
        @keydown.esc="closeLightbox"
        @keydown.left="prevSlide"
        @keydown.right="nextSlide"
        tabindex="0"
      >
        <!-- Lightbox Header -->
        <div class="flex items-center justify-between z-10">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full">
              Photo {{ currentIndex + 1 }} of {{ photos.length }}
            </span>
            <span class="text-xs text-white/70 font-semibold hidden sm:inline">
              {{ currentPhoto.title }}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button 
              @click="closeLightbox" 
              type="button"
              class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Close Fullscreen (Esc)"
            >
              <X class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Main Lightbox Image View -->
        <div class="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          <img 
            :src="currentPhoto.fullSrc || currentPhoto.src" 
            :alt="currentPhoto.title" 
            class="max-w-full max-h-[78vh] sm:max-h-[82vh] object-contain rounded-xl shadow-2xl transition-all"
          />

          <!-- Lightbox Nav Buttons -->
          <button 
            @click="prevSlide" 
            type="button"
            class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-primary text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-lg"
          >
            <ChevronLeft class="w-6 h-6" />
          </button>

          <button 
            @click="nextSlide" 
            type="button"
            class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-brand-primary text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer shadow-lg"
          >
            <ChevronRight class="w-6 h-6" />
          </button>
        </div>

        <!-- Lightbox Thumbnails -->
        <div class="flex justify-center gap-2 overflow-x-auto py-1 max-w-full">
          <button 
            v-for="(photo, idx) in photos" 
            :key="'lb-' + idx"
            @click="goToSlide(idx)"
            type="button"
            class="w-10 h-8 sm:w-12 sm:h-9 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer"
            :class="currentIndex === idx ? 'border-brand-primary scale-110' : 'border-transparent opacity-40 hover:opacity-100'"
          >
            <img :src="photo.src" :alt="photo.title" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X 
} from '@lucide/vue'

// 21 Real Clinic Facility Photos from C:\Users\scaradook\Downloads\clinic_pictures
const photos = [
  {
    src: '/clinic_pictures/optimized/IMG20260922084623.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084623.jpg',
    title: 'Clinic Facade & Main Entrance'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084652.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084652.jpg',
    title: 'Accessible Entry Ramp & Handrails'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084706.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084706.jpg',
    title: 'Clinic Foyer & Sanitation Area'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084723.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084723.jpg',
    title: 'Althea-Lapuz Reception Desk'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084740.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084740.jpg',
    title: 'Central Patient Waiting Lounge'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084826.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084826.jpg',
    title: 'Comfortable Family Waiting Area'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084840.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084840.jpg',
    title: 'Main Clinical Corridor'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084855.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084855.jpg',
    title: 'Corridor Handrail Support'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084915.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084915.jpg',
    title: 'Barrier-Free Hallway Transitions'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922084959.jpg',
    fullSrc: '/clinic_pictures/IMG20260922084959.jpg',
    title: 'Maternal Assessment & Records Station'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922085113.jpg',
    fullSrc: '/clinic_pictures/IMG20260922085113.jpg',
    title: 'Delivery & Labor Monitoring Equipment'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922085226.jpg',
    fullSrc: '/clinic_pictures/IMG20260922085226.jpg',
    title: 'Sterile Supply & Clinical Prep Station'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922085234.jpg',
    fullSrc: '/clinic_pictures/IMG20260922085234.jpg',
    title: 'Accessible Restroom Facility'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922085245.jpg',
    fullSrc: '/clinic_pictures/IMG20260922085245.jpg',
    title: 'Wide Doorways & Clear Walkways'
  },
  {
    src: '/clinic_pictures/optimized/IMG20260922085316.jpg',
    fullSrc: '/clinic_pictures/IMG20260922085316.jpg',
    title: 'Hand Hygiene & Sanitizing Station'
  }
]

const currentIndex = ref(0)
const isPlaying = ref(true)
const isLightboxOpen = ref(false)
let autoplayTimer = null

const currentPhoto = computed(() => photos[currentIndex.value] || photos[0])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length
}

const goToSlide = (idx) => {
  currentIndex.value = idx
}

const startAutoplay = () => {
  stopAutoplay()
  if (isPlaying.value) {
    autoplayTimer = setInterval(() => {
      nextSlide()
    }, 4500)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const pauseAutoplay = () => {
  stopAutoplay()
}

const resumeAutoplay = () => {
  if (isPlaying.value && !isLightboxOpen.value) {
    startAutoplay()
  }
}

const openLightbox = () => {
  isLightboxOpen.value = true
  stopAutoplay()
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  if (isPlaying.value) {
    startAutoplay()
  }
}

// Mobile Touch Swipe
let touchStartX = 0
const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
}

const handleTouchEnd = (e) => {
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) > 40) {
    if (diff > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Custom scrollbar for thumbnail rail */
.scrollbar-thin::-webkit-scrollbar {
  height: 5px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
