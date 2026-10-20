// Utility helpers for PhilHealth and Clinical Package Badges
// Althea-Lapuz Lying-In Clinic

/**
 * Normalizes package code for clean UI presentation (e.g. ANCO1 -> ANC01, NSDO1 -> NSD01)
 * @param {string} code
 * @returns {string}
 */
export const formatPackageCode = (code) => {
  if (!code) return ''
  const trimmed = String(code).trim().toUpperCase()
  if (trimmed === 'ANCO1') return 'ANC01'
  if (trimmed === 'ANCO2') return 'ANC02'
  if (trimmed === 'NSDO1') return 'NSD01'
  return trimmed
}

/**
 * Returns distinct, accessible styling for each package code badge
 * Ensuring each package has its own unique color identity for immediate user recognition.
 * @param {string} code
 * @returns {string} Tailwind CSS class string
 */
export const getPackageBadgeClass = (code) => {
  const norm = formatPackageCode(code)
  
  // Shared base badge geometry: monospace, bold, pill-like rounded-md, crisp contrast
  const base = 'px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider inline-flex items-center justify-center shrink-0 shadow-xs'

  switch (norm) {
    case 'ANC01':
      // Rose Pink - Routine Antenatal Care (4 Visits Minimum)
      return `${base} bg-rose-600 text-white border border-rose-500`

    case 'ANC02':
      // Warm Amber / Ochre - Antenatal Care with Intrapartum / Labor Watch
      return `${base} bg-amber-600 text-white border border-amber-500`

    case 'MCP01':
      // Regal Purple - Maternal Care Package (Full Maternity & Delivery)
      return `${base} bg-purple-700 text-white border border-purple-600`

    case 'NSD01':
      // Clinical Sapphire Blue - Normal Spontaneous Delivery Package
      return `${base} bg-blue-600 text-white border border-blue-500`

    case 'NCP':
      // Fresh Emerald Green - Newborn Care Package (ENBS, Hearing & Immunization)
      return `${base} bg-emerald-600 text-white border border-emerald-500`

    case 'CONSULT':
      // Slate Charcoal - Outpatient Consultation
      return `${base} bg-slate-700 text-white border border-slate-600`

    case 'BCG':
      // Vibrant Teal - BCG Infant Birth Immunization
      return `${base} bg-teal-600 text-white border border-teal-500`

    case 'HEPB':
      // Cyan Ocean - Hepatitis B Birth Dose
      return `${base} bg-cyan-700 text-white border border-cyan-600`

    case 'TT':
      // Deep Fuchsia - Tetanus Toxoid Vaccine
      return `${base} bg-fuchsia-700 text-white border border-fuchsia-600`

    case 'FP-DMPA':
      // Indigo - DMPA 3-Month Contraceptive
      return `${base} bg-indigo-600 text-white border border-indigo-500`

    case 'FP-NORI':
      // Violet - Norifam 1-Month Contraceptive
      return `${base} bg-violet-600 text-white border border-violet-500`

    default:
      return `${base} bg-brand-primary text-white border border-brand-primary-dark`
  }
}
