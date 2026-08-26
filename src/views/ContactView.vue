<template>
  <div class="min-h-screen bg-brand-soft pb-20">
    <PageHero 
      title="Contact Information" 
      subtitle="We are here to assist you. Reach out to schedule an appointment, ask questions, or learn more about our facility."
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        <!-- Contact Information List -->
        <BaseCard class="lg:col-span-1">
          <h2 class="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <Phone class="text-brand-primary w-6 h-6" />
            Contact Details
          </h2>
          
          <div class="space-y-8 text-text-secondary">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-light">
                <PhoneCall class="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p class="font-bold text-text-primary text-lg mb-1">Phone Numbers</p>
                <p class="text-lg">(123) 456-7890</p>
                <p class="text-lg">+0912 345 6789</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-light">
                <Mail class="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p class="font-bold text-text-primary text-lg mb-1">Email Address</p>
                <p class="text-lg">inquiry@althealapuzclinic.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-light">
                <Share2 class="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p class="font-bold text-text-primary text-lg mb-1">Social Media</p>
                <a href="#" class="text-brand-primary hover:text-brand-primary-dark hover:underline font-medium text-lg transition-colors">Facebook Page</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-brand-soft rounded-2xl flex items-center justify-center flex-shrink-0 border border-brand-light">
                <Headphones class="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <p class="font-bold text-text-primary text-lg mb-1">Patient Support</p>
                <p class="leading-relaxed text-lg">Available during operating hours for general inquiries and booking.</p>
              </div>
            </div>
          </div>
        </BaseCard>

        <!-- Clinic Location -->
        <BaseCard class="lg:col-span-1">
          <h2 class="text-2xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <MapPin class="text-brand-primary w-6 h-6" />
            Clinic Location
          </h2>
          
          <div class="space-y-6 text-text-secondary mb-8">
            <div>
              <p class="font-bold text-text-primary mb-2">Full Address</p>
              <p class="text-lg">123 Healthway Avenue, Medical District, Cityville, 12345</p>
            </div>
            <div>
              <p class="font-bold text-text-primary mb-2">Nearby Landmarks</p>
              <p class="text-lg">Near Cityville Central Plaza, adjacent to the community pharmacy.</p>
            </div>
          </div>
          
          <div class="w-full h-56 bg-brand-soft rounded-[2rem] overflow-hidden relative flex items-center justify-center shadow-inner group cursor-pointer border border-brand-light">
            <!-- Simulated Google Map -->
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map View" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-brand-primary-dark/10 flex items-center justify-center mix-blend-multiply"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <BaseButton variant="primary" class="shadow-xl px-8 !py-4 font-bold tracking-wide">
                <template #prefix><Navigation class="w-5 h-5 mr-2" /></template>
                Open in Maps
              </BaseButton>
            </div>
          </div>
        </BaseCard>

        <!-- Clinic Inquiry Form -->
        <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-brand-light lg:col-span-1 relative">
          <div class="relative z-10">
            <h2 class="text-2xl font-bold mb-8 flex items-center gap-3 text-text-primary">
              <MessageSquare class="w-6 h-6 text-brand-primary" />
              Send an Inquiry
            </h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-bold mb-2 text-text-primary">Name</label>
                <input type="text" class="w-full px-5 py-3.5 rounded-2xl bg-white border border-brand-light focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light text-text-primary transition-all text-lg placeholder-text-secondary/50" placeholder="Your full name" required>
              </div>
              
              <div>
                <label class="block text-sm font-bold mb-2 text-text-primary">Email / Phone</label>
                <input type="text" class="w-full px-5 py-3.5 rounded-2xl bg-white border border-brand-light focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light text-text-primary transition-all text-lg placeholder-text-secondary/50" placeholder="How can we reach you?" required>
              </div>
              
              <div>
                <label class="block text-sm font-bold mb-2 text-text-primary">Subject</label>
                <select class="w-full px-5 py-3.5 rounded-2xl bg-white border border-brand-light focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light text-text-primary transition-all text-lg appearance-none">
                  <option value="appointment">Schedule Appointment</option>
                  <option value="services">Inquire about Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label class="block text-sm font-bold mb-2 text-text-primary">Message</label>
                <textarea rows="4" class="w-full px-5 py-3.5 rounded-2xl bg-white border border-brand-light focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-light text-text-primary resize-none transition-all text-lg placeholder-text-secondary/50" placeholder="Your message here..." required></textarea>
              </div>
              
              <BaseButton type="submit" variant="primary" fullWidth class="text-lg mt-4 !py-4 shadow-lg">
                Submit Inquiry
              </BaseButton>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, PhoneCall, Mail, Share2, Headphones, MapPin, Navigation, MessageSquare } from '@lucide/vue'
import PageHero from '../components/common/PageHero.vue'
import BaseCard from '../components/common/BaseCard.vue'
import BaseButton from '../components/common/BaseButton.vue'

const submitForm = () => {
  alert('Thank you for your inquiry. We will get back to you shortly.')
}
</script>
