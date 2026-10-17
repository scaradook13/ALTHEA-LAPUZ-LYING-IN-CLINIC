import { reactive, ref, watch } from 'vue'
import {
  pricingNotice,
  otherServices as initialOtherServices,
  familyPlanning as initialFamilyPlanning,
  antenatalCarePackages as initialAntenatalCarePackages,
  philHealthServicePackages as initialPhilHealthServicePackages,
  medicinesList as initialMedicinesList,
  suppliesList as initialSuppliesList
} from '../data/pricingData.js'
import {
  faqResponses as initialFaqResponses,
  fallbackResponse as initialFallbackResponse,
  quickReplyIds as initialQuickReplyIds
} from '../components/chatbot/faqResponses.js'

// Deep clone helper
const clone = (obj) => JSON.parse(JSON.stringify(obj))

const STORAGE_KEY = 'althea_lapuz_clinic_data_demo'
const AUTH_KEY = 'althea_lapuz_clinic_admin_auth'

// Initial default state factory
export const getDefaultClinicData = () => ({
  clinicInfo: {
    name: 'ALTHEA-LAPUZ LYING IN CLINIC',
    tagline: 'Maternal & Newborn Care',
    headline: 'Precise, Transparent Medical Care.',
    subheadline: 'Providing compassionate, affordable, and high-quality maternal and infant healthcare primarily dedicated to pregnant women, postpartum mothers, newborns, and their families.',
    address: '332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan',
    city: 'Baliwag, Bulacan',
    phonePrimary: '0931-069-3921',
    phoneSecondary: '(044)-462-0789',
    phoneTertiary: '0969-405-5108',
    email: 'lapuzaltheajasmine@gmail.com',
    facebookUrl: 'https://www.facebook.com/share/1F9n16Qjzo/',
    operatingHoursDelivery: '24 Hours a Day • 7 Days a Week Active Care',
    operatingHoursPrenatal: 'Monday to Sunday: 9:00 AM – 7:00 PM',
    effectiveDate: 'April 01, 2026',
    regulation: 'Public Access to Price List Information (A.O. No. 2021-0008)',
    announcement: {
      enabled: true,
      badge: 'CLINIC ADVISORY',
      text: 'PhilHealth Maternity (MCP01) & Newborn Screening (NCP) packages available with 100% No Balance Billing. Open 24/7 for admissions.'
    }
  },
  missionVision: {
    mission: "To provide an affordable and quality maternal and child health care services in Bulacan and it's near provinces.",
    vision: "Aims to be the best lying-in clinic to give the safe environment for mother and child.",
    coreValues: [
      { name: 'Transparency', desc: 'Clear pricing & clinical honesty' },
      { name: 'Clarity', desc: 'Direct patient communication' },
      { name: 'Precision', desc: 'Exact medical excellence' }
    ]
  },
  healthcareTeam: {
    staffTypes: [
      { title: 'Licensed Midwives', description: '24/7 labor, normal delivery, and newborn care.' },
      { title: 'Obstetricians & Gynecologists', description: 'Clinical prenatal consultations and maternal health.' },
      { title: 'Pediatric Care Specialists', description: 'Infant wellness, screening, and immunization.' }
    ],
    midwifeAvailability: 'Our certified midwives are accessible for scheduled consultations, continuous monitoring, and emergency delivery support. We maintain a vigorous 24/7 rotation to ensure expert maternal care is always available when you need it most.',
    availabilityStatus: 'Active On-Call'
  },
  pricing: {
    notice: clone(pricingNotice),
    otherServices: clone(initialOtherServices),
    familyPlanning: clone(initialFamilyPlanning),
    antenatalCarePackages: clone(initialAntenatalCarePackages),
    philHealthServicePackages: clone(initialPhilHealthServicePackages),
    medicinesList: clone(initialMedicinesList),
    suppliesList: clone(initialSuppliesList)
  },
  chatbot: {
    faqResponses: clone(initialFaqResponses),
    fallbackResponse: initialFallbackResponse,
    quickReplyIds: clone(initialQuickReplyIds)
  }
})

// Load saved data from localStorage, falling back to defaults
const loadStoredData = () => {
  const defaults = getDefaultClinicData()
  if (typeof window === 'undefined') return defaults
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return {
        clinicInfo: { ...defaults.clinicInfo, ...(parsed.clinicInfo || {}) },
        missionVision: { ...defaults.missionVision, ...(parsed.missionVision || {}) },
        healthcareTeam: { ...defaults.healthcareTeam, ...(parsed.healthcareTeam || {}) },
        pricing: {
          notice: { ...defaults.pricing.notice, ...(parsed.pricing?.notice || {}) },
          otherServices: parsed.pricing?.otherServices || defaults.pricing.otherServices,
          familyPlanning: parsed.pricing?.familyPlanning || defaults.pricing.familyPlanning,
          antenatalCarePackages: parsed.pricing?.antenatalCarePackages || defaults.pricing.antenatalCarePackages,
          philHealthServicePackages: parsed.pricing?.philHealthServicePackages || defaults.pricing.philHealthServicePackages,
          medicinesList: parsed.pricing?.medicinesList || defaults.pricing.medicinesList,
          suppliesList: parsed.pricing?.suppliesList || defaults.pricing.suppliesList
        },
        chatbot: {
          faqResponses: (parsed.chatbot?.faqResponses || defaults.chatbot.faqResponses).slice(0, 10),
          fallbackResponse: parsed.chatbot?.fallbackResponse || defaults.chatbot.fallbackResponse,
          quickReplyIds: parsed.chatbot?.quickReplyIds || defaults.chatbot.quickReplyIds
        }
      }
    }
  } catch (e) {
    console.warn('Failed to load clinic data from storage:', e)
  }
  return defaults
}

// Global reactive state
export const clinicStore = reactive(loadStoredData())

// Save current reactive state to localStorage
export const saveClinicStore = () => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clinicStore))
  } catch (e) {
    console.error('Failed to save clinic data to storage:', e)
  }
}

// Automatically save changes on any mutation
watch(
  clinicStore,
  () => {
    saveClinicStore()
  },
  { deep: true }
)

// Listen for storage events across browser tabs/windows
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY && event.newValue) {
      try {
        const parsed = JSON.parse(event.newValue)
        if (parsed.clinicInfo) Object.assign(clinicStore.clinicInfo, parsed.clinicInfo)
        if (parsed.missionVision) Object.assign(clinicStore.missionVision, parsed.missionVision)
        if (parsed.healthcareTeam) Object.assign(clinicStore.healthcareTeam, parsed.healthcareTeam)
        if (parsed.pricing) {
          if (parsed.pricing.notice) Object.assign(clinicStore.pricing.notice, parsed.pricing.notice)
          if (parsed.pricing.otherServices) clinicStore.pricing.otherServices = parsed.pricing.otherServices
          if (parsed.pricing.familyPlanning) clinicStore.pricing.familyPlanning = parsed.pricing.familyPlanning
          if (parsed.pricing.antenatalCarePackages) clinicStore.pricing.antenatalCarePackages = parsed.pricing.antenatalCarePackages
          if (parsed.pricing.philHealthServicePackages) clinicStore.pricing.philHealthServicePackages = parsed.pricing.philHealthServicePackages
          if (parsed.pricing.medicinesList) clinicStore.pricing.medicinesList = parsed.pricing.medicinesList
          if (parsed.pricing.suppliesList) clinicStore.pricing.suppliesList = parsed.pricing.suppliesList
        }
        if (parsed.chatbot) {
          if (parsed.chatbot.faqResponses) clinicStore.chatbot.faqResponses = parsed.chatbot.faqResponses.slice(0, 10)
          if (parsed.chatbot.fallbackResponse) clinicStore.chatbot.fallbackResponse = parsed.chatbot.fallbackResponse
        }
      } catch (err) {
        console.error('Failed to synchronize cross-tab storage:', err)
      }
    }
  })
}

// Auth state (session-only demo authentication)
const isAuthenticated = ref(
  typeof window !== 'undefined' &&
    (sessionStorage.getItem(AUTH_KEY) === 'true' || localStorage.getItem(AUTH_KEY) === 'true')
)

const currentUser = ref({
  username: 'admin',
  name: 'Clinic Administrator',
  role: 'Chief Midwife & Practice Director'
})

export const auth = {
  isAuthenticated,
  user: currentUser,
  login(username, password) {
    const validUser = username.trim().toLowerCase() === 'admin'
    const validPass = password.trim() === 'admin123'
    if (validUser && validPass) {
      isAuthenticated.value = true
      try {
        sessionStorage.setItem(AUTH_KEY, 'true')
      } catch (e) {}
      return { success: true }
    }
    return {
      success: false,
      message: 'Invalid username or password. Please try again.'
    }
  },
  logout() {
    isAuthenticated.value = false
    try {
      sessionStorage.removeItem(AUTH_KEY)
      localStorage.removeItem(AUTH_KEY)
    } catch (e) {}
  }
}

// Action helper to reset all changes back to default initial state
export const resetStoreToDefaults = () => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {}
  }
  const fresh = getDefaultClinicData()
  Object.assign(clinicStore.clinicInfo, fresh.clinicInfo)
  Object.assign(clinicStore.missionVision, fresh.missionVision)
  Object.assign(clinicStore.healthcareTeam, fresh.healthcareTeam)
  clinicStore.pricing.notice = fresh.pricing.notice
  clinicStore.pricing.otherServices = fresh.pricing.otherServices
  clinicStore.pricing.familyPlanning = fresh.pricing.familyPlanning
  clinicStore.pricing.antenatalCarePackages = fresh.pricing.antenatalCarePackages
  clinicStore.pricing.philHealthServicePackages = fresh.pricing.philHealthServicePackages
  clinicStore.pricing.medicinesList = fresh.pricing.medicinesList
  clinicStore.pricing.suppliesList = fresh.pricing.suppliesList
  clinicStore.chatbot.faqResponses = fresh.chatbot.faqResponses
  clinicStore.chatbot.fallbackResponse = fresh.chatbot.fallbackResponse
  clinicStore.chatbot.quickReplyIds = fresh.chatbot.quickReplyIds
  saveClinicStore()
}
