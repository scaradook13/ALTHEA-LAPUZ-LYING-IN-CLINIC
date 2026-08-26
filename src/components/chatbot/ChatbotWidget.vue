<template>
  <div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
    
    <!-- Chat Window -->
    <Transition name="chat-window">
      <div 
        v-show="isOpen" 
        class="bg-white w-[350px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] rounded-2xl shadow-2xl flex flex-col mb-4 border border-brand-light/50 overflow-hidden"
      >
        <ChatbotHeader @close="toggleChat" />

        <!-- Messages Area -->
        <div class="flex-1 overflow-y-auto p-4 scroll-smooth" ref="messagesContainer">
          
          <ChatMessage 
            text="Hello! 👋 How can we help you today?" 
            :isUser="false" 
          />

          <template v-for="(msg, index) in messages" :key="index">
            <ChatMessage 
              :text="msg.text" 
              :isUser="msg.isUser" 
            />
          </template>

          <div v-if="isTyping" class="flex justify-start mb-4">
            <div class="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mr-2 mt-auto">
              <MessageSquare class="w-4 h-4 text-white" />
            </div>
            <div class="bg-brand-soft px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
              <span class="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></span>
              <span class="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
              <span class="w-2 h-2 bg-brand-primary rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
            </div>
          </div>

          <!-- Quick Replies (only show at bottom) -->
          <div v-show="!isTyping" class="mt-4">
            <QuickReplies 
              :replies="availableQuickReplies"
              @select="handleQuickReply"
            />
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-3 border-t border-brand-light/50 bg-white">
          <form @submit.prevent="handleInputSubmit" class="flex gap-2">
            <input 
              v-model="userInput" 
              type="text" 
              placeholder="Type a message..." 
              class="flex-1 bg-brand-surface border border-brand-light rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
              aria-label="Type a message"
            />
            <button 
              type="submit" 
              :disabled="!userInput.trim() || isTyping"
              class="bg-brand-primary text-white p-2 rounded-full hover:bg-brand-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </Transition>

    <!-- Floating Toggle Button -->
    <button 
      @click="toggleChat"
      class="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-primary-hover hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-light"
      :aria-label="isOpen ? 'Close chat' : 'Open chat'"
      :aria-expanded="isOpen"
    >
      <Transition name="fade" mode="out-in">
        <X v-if="isOpen" class="w-7 h-7" />
        <MessageSquare v-else class="w-7 h-7" />
      </Transition>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { MessageSquare, X, Send } from '@lucide/vue'
import ChatbotHeader from './ChatbotHeader.vue'
import ChatMessage from './ChatMessage.vue'
import QuickReplies from './QuickReplies.vue'
import { faqResponses, fallbackResponse, quickReplyIds } from './faqResponses'

const isOpen = ref(false)
const userInput = ref('')
const messages = ref([])
const isTyping = ref(false)
const messagesContainer = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    scrollToBottom()
  }
}

const availableQuickReplies = computed(() => {
  return quickReplyIds.map(id => faqResponses.find(faq => faq.id === id)).filter(Boolean)
})

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const addBotResponse = async (text) => {
  isTyping.value = true
  scrollToBottom()
  
  // Artificial delay for natural feel (400-700ms)
  const delay = Math.floor(Math.random() * 300) + 400
  
  setTimeout(() => {
    isTyping.value = false
    messages.value.push({ text, isUser: false })
    scrollToBottom()
  }, delay)
}

const handleQuickReply = (reply) => {
  messages.value.push({ text: reply.question, isUser: true })
  scrollToBottom()
  addBotResponse(reply.answer)
}

const handleInputSubmit = () => {
  const text = userInput.value.trim()
  if (!text) return
  
  // Add user message
  messages.value.push({ text, isUser: true })
  userInput.value = ''
  scrollToBottom()

  // Keyword matching
  const lowerText = text.toLowerCase()
  
  let bestMatch = null
  let maxMatchCount = 0

  for (const faq of faqResponses) {
    let matchCount = 0
    for (const keyword of faq.keywords) {
      if (lowerText.includes(keyword)) {
        matchCount++
      }
    }
    if (matchCount > maxMatchCount) {
      maxMatchCount = matchCount
      bestMatch = faq
    }
  }

  if (bestMatch && maxMatchCount > 0) {
    addBotResponse(bestMatch.answer)
  } else {
    addBotResponse(fallbackResponse)
  }
}
</script>

<style scoped>
.chat-window-enter-active,
.chat-window-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: bottom right;
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(-45deg);
}
</style>
