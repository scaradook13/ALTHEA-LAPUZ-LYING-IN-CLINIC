// Pricing and Fee Directory for Althea-Lapuz Lying-In Clinic
// Source: Official Clinic Price List Information
// Effective Date: April 01, 2026
// Regulatory Reference: Public Access to Price List Information (A.O. No. 2021-0008)

export const pricingNotice = {
  clinicName: 'ALTHEA-LAPUZ LYING-IN CLINIC',
  address: '332 Daan Ramon Magsaysay, Tilapayong, Baliwag, Bulacan',
  contactNumbers: ['(044)-462-0789', '0931-069-3921', '0969-405-5108'],
  email: 'lapuzaltheajasmine@gmail.com',
  effectiveDate: 'April 01, 2026',
  regulation: 'Public Access to Price List Information (A.O. No. 2021-0008)'
}

export const otherServices = [
  {
    service: 'Consultation',
    price: 100.00,
    formattedPrice: '₱100.00',
    coverage: 'Not Covered by PhilHealth',
    unit: 'Per consultation'
  },
  {
    service: 'Ear Piercing w/ Sterile Earrings',
    price: 350.00,
    formattedPrice: '₱350.00',
    coverage: 'Not Covered by PhilHealth',
    unit: 'Per procedure'
  },
  {
    service: 'Birth Certificate',
    price: 350.00,
    formattedPrice: '₱350.00',
    coverage: 'Not Covered by PhilHealth',
    unit: 'Per issuance'
  }
]

export const familyPlanning = {
  injectables: [
    {
      service: 'DMPA (3 Months)',
      price: 160.00,
      formattedPrice: '₱160.00',
      duration: '3 Months protection',
      type: 'Injectable Contraceptive'
    },
    {
      service: 'Norifam (1 Month)',
      price: 350.00,
      formattedPrice: '₱350.00',
      duration: '1 Month protection',
      type: 'Injectable Contraceptive'
    }
  ],
  others: [
    {
      service: 'Pap Smear',
      price: 600.00,
      formattedPrice: '₱600.00',
      duration: 'Cervical Cancer Screening',
      type: 'Diagnostic Examination'
    }
  ]
}

export const antenatalCarePackages = [
  {
    code: 'ANCO1',
    title: 'Antenatal Care Package',
    description: 'Covers essential health services that a woman about to give birth receives during the antenatal period, including at least 4 prenatal check-ups/visits, with the last one during the last trimester of pregnancy.',
    caseRate: '₱2,925.00',
    includes: {
      hci: '₱1,755.00',
      professionalFee: '₱1,170.00'
    },
    withPhilHealth: {
      noBalanceBilling: true,
      totalOutOfPocket: '₱0.00',
      notes: 'Walang Bayad (c/o PhilHealth)'
    },
    withoutPhilHealth: {
      professionalFee: '₱800.00',
      supplies: '₱700.00',
      totalOutOfPocket: '₱1,500.00'
    }
  },
  {
    code: 'ANCO2',
    title: 'Antenatal Care with Intrapartum Monitoring / Labor Watch',
    description: 'Antenatal care services with intrapartum monitoring or labor watch without delivery.',
    icdCode: '236.7',
    rvsCode: 'ANCO2',
    caseRate: '₱4,192.50',
    includes: {
      hci: '₱2,515.00',
      professionalFee: '₱1,677.00'
    },
    withPhilHealth: {
      noBalanceBilling: true,
      totalOutOfPocket: '₱0.00',
      notes: 'Walang Bayad (c/o PhilHealth)'
    },
    withoutPhilHealth: {
      professionalFee: '₱1,200.00',
      supplies: '₱800.00',
      totalOutOfPocket: '₱2,000.00'
    }
  }
]

export const philHealthServicePackages = [
  {
    code: 'MCP01',
    title: 'Maternal Care Package',
    description: 'Routine obstetric care including prenatal, delivery and newborn services and postpartum care.',
    caseRate: '₱15,600.00',
    includes: {
      hci: '₱9,360.00',
      professionalFee: '₱6,240.00'
    },
    withPhilHealth: {
      noBalanceBilling: true,
      totalOutOfPocket: '₱0.00',
      notes: 'Walang Bayad (c/o PhilHealth)'
    },
    withoutPhilHealth: {
      breakdown: [
        { item: 'Professional Fee', amount: '₱4,500.00' },
        { item: 'Birthing Room', amount: '₱2,000.00' },
        { item: 'Accommodation/Room', amount: '₱1,500.00' },
        { item: 'Drugs/Medicine', amount: '₱2,500.00' },
        { item: 'Supplies', amount: '₱2,000.00' }
      ],
      totalOutOfPocket: '₱12,500.00'
    }
  },
  {
    code: 'NSDO1',
    title: 'Normal Spontaneous Delivery Package',
    description: 'Routine obstetric care including antepartum care, vaginal delivery and postpartum care.',
    caseRate: '₱12,675.00',
    includes: {
      hci: '₱7,605.00',
      professionalFee: '₱5,070.00'
    },
    withPhilHealth: {
      noBalanceBilling: true,
      totalOutOfPocket: '₱0.00',
      notes: 'Walang Bayad (c/o PhilHealth)'
    },
    withoutPhilHealth: {
      breakdown: [
        { item: 'Professional Fee', amount: '₱4,500.00' },
        { item: 'Birthing Room', amount: '₱2,000.00' },
        { item: 'Accommodation/Room', amount: '₱1,500.00' },
        { item: 'Drugs/Medicine', amount: '₱1,500.00' },
        { item: 'Supplies', amount: '₱1,500.00' }
      ],
      totalOutOfPocket: '₱11,000.00'
    }
  },
  {
    code: 'NCP',
    title: 'Newborn Care Package',
    description: 'Expanded newborn care package including supplies for essential newborn care, Vitamin K, eye prophylaxis, Hepatitis B vaccine, BCG vaccine, cord care, expanded newborn screening test, and newborn hearing screening test.',
    caseRate: '₱5,752.50',
    includes: {
      hci: '₱4,774.50',
      professionalFee: '₱978.00'
    },
    withPhilHealth: {
      noBalanceBilling: true,
      totalOutOfPocket: '₱0.00',
      notes: 'Walang Bayad (c/o PhilHealth)'
    },
    withoutPhilHealth: {
      breakdown: [
        { item: 'Professional Fee', amount: '₱500.00' },
        { item: 'Accommodation/Room', amount: '₱1,000.00' },
        { item: 'Drugs/Medicine & Supplies', amount: '₱3,500.00' }
      ],
      totalOutOfPocket: '₱5,000.00'
    }
  }
]

export const medicinesList = [
  { name: 'Atropine 1 mg', price: 50.00, formattedPrice: '₱50.00', quantity: 'Per ampule' },
  { name: 'BCG Vaccines', price: 400.00, formattedPrice: '₱400.00', quantity: 'Per patient used' },
  { name: 'Dexamethasone 5 mg', price: 300.00, formattedPrice: '₱300.00', quantity: 'Per ampule' },
  { name: 'Calcium Gluconate 10 mg', price: 80.00, formattedPrice: '₱80.00', quantity: 'Per ampule' },
  { name: 'Diphenhydramine 50 mg', price: 90.00, formattedPrice: '₱90.00', quantity: 'Per ampule' },
  { name: 'Epinephrine 1 mg', price: 100.00, formattedPrice: '₱100.00', quantity: 'Per ampule' },
  { name: 'Erythromycin Ophthalmic Ointment 0.5%', price: 100.00, formattedPrice: '₱100.00', quantity: 'Per patient used' },
  { name: 'Hepatitis B Vaccines', price: 450.00, formattedPrice: '₱450.00', quantity: 'Per patient used' },
  { name: 'D5 LR or Plain LR', price: 150.00, formattedPrice: '₱150.00', quantity: 'Per bottle / 1 liter' },
  { name: 'Plain NSS', price: 150.00, formattedPrice: '₱150.00', quantity: 'Per bottle / 1 liter' },
  { name: 'Lidocaine', price: 70.00, formattedPrice: '₱70.00', quantity: 'Per patient used' },
  { name: 'Magnesium Sulfate', price: 70.00, formattedPrice: '₱70.00', quantity: 'Per bottle' },
  { name: 'Oxytocin 10 units', price: 150.00, formattedPrice: '₱150.00', quantity: 'Per ampule' },
  { name: 'Tetanus Toxoid', price: 150.00, formattedPrice: '₱150.00', quantity: 'Per vial' },
  { name: 'Tranexamic Acid', price: 300.00, formattedPrice: '₱300.00', quantity: 'Per ampule' },
  { name: 'Vitamin K', price: 100.00, formattedPrice: '₱100.00', quantity: 'Per ampule' }
]

export const suppliesList = [
  { name: '70% Isopropyl Alcohol', quantity: 'Per 50ml', price: 70.00, formattedPrice: '₱70.00' },
  { name: '1cc Syringe', quantity: 'Per piece', price: 15.00, formattedPrice: '₱15.00' },
  { name: '3cc Syringe', quantity: 'Per piece', price: 15.00, formattedPrice: '₱15.00' },
  { name: '5cc Syringe', quantity: 'Per piece', price: 20.00, formattedPrice: '₱20.00' },
  { name: '10cc Syringe', quantity: 'Per piece', price: 25.00, formattedPrice: '₱25.00' },
  { name: 'IV Tubings (Macroset)', quantity: 'Per piece', price: 100.00, formattedPrice: '₱100.00' },
  { name: 'IV Tubings (Microset)', quantity: 'Per piece', price: 100.00, formattedPrice: '₱100.00' },
  { name: 'Nasal Cannula', quantity: 'Per piece', price: 50.00, formattedPrice: '₱50.00' },
  { name: 'IV Catheter G#22', quantity: 'Per piece', price: 50.00, formattedPrice: '₱50.00' },
  { name: 'Plaster', quantity: 'Per piece', price: 60.00, formattedPrice: '₱60.00' },
  { name: 'Providone Iodine Solution', quantity: 'Per 50ml', price: 50.00, formattedPrice: '₱50.00' },
  { name: 'Sterile Absorbable Suture', quantity: 'Per piece', price: 150.00, formattedPrice: '₱150.00' },
  { name: 'Sterile Cotton Balls', quantity: 'Per pack', price: 20.00, formattedPrice: '₱20.00/pack' },
  { name: 'Sterile Cotton Pledgets', quantity: 'Per piece', price: 10.00, formattedPrice: '₱10.00' },
  { name: 'Sterile Gauzes', quantity: 'Per piece', price: 12.00, formattedPrice: '₱12.00' },
  { name: 'Surgical Caps', quantity: 'Per piece', price: 10.00, formattedPrice: '₱10.00' },
  { name: 'Surgical Mask', quantity: 'Per piece', price: 10.00, formattedPrice: '₱10.00' },
  { name: 'Suction Catheter', quantity: 'Per piece', price: 75.00, formattedPrice: '₱75.00' },
  { name: 'Umbilical Cord Clamp', quantity: 'Per piece', price: 50.00, formattedPrice: '₱50.00' },
  { name: 'Surgical Gloves', quantity: 'Per pair', price: 50.00, formattedPrice: '₱50.00' },
  { name: 'Clean Gloves', quantity: 'Per pair', price: 20.00, formattedPrice: '₱20.00' },
  { name: 'Yellow, Green, Black Bag', quantity: 'Per piece', price: 10.00, formattedPrice: '₱10.00' },
  { name: 'Adult Diaper', quantity: 'Per piece', price: 30.00, formattedPrice: '₱30.00' },
  { name: 'Newborn Diaper', quantity: 'Per piece', price: 12.00, formattedPrice: '₱12.00' },
  { name: 'Under Pads', quantity: 'Per piece', price: 35.00, formattedPrice: '₱35.00' },
  { name: 'Sanitex', quantity: 'Per pack', price: 175.00, formattedPrice: '₱175.00' }
]
