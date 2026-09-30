import { reactive, ref } from 'vue'
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

// Global reactive in-memory state
// Note: When the user reloads the browser, this state automatically resets back to default!
export const clinicStore = reactive(getDefaultClinicData())

// Auth state (session-only demo authentication)
const isAuthenticated = ref(false)
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
      return { success: true }
    }
    return {
      success: false,
      message: 'Invalid username or password. Please try again.'
    }
  },
  logout() {
    isAuthenticated.value = false
  }
}

// Action helper to reset all in-memory changes back to initial state
export const resetStoreToDefaults = () => {
  const fresh = getDefaultClinicData()
  Object.assign(clinicStore.clinicInfo, fresh.clinicInfo)
  Object.assign(clinicStore.missionVision, fresh.missionVision)
  Object.assign(clinicStore.healthcareTeam, fresh.healthcareTeam)
  clinicStore.pricing.otherServices = fresh.pricing.otherServices
  clinicStore.pricing.familyPlanning = fresh.pricing.familyPlanning
  clinicStore.pricing.antenatalCarePackages = fresh.pricing.antenatalCarePackages
  clinicStore.pricing.philHealthServicePackages = fresh.pricing.philHealthServicePackages
  clinicStore.pricing.medicinesList = fresh.pricing.medicinesList
  clinicStore.pricing.suppliesList = fresh.pricing.suppliesList
  clinicStore.chatbot.faqResponses = fresh.chatbot.faqResponses
}
